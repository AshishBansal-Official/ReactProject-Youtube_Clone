import React, { useEffect, useState } from "react";
import api from "../../utils/api";
import { LazyLoadImage } from "react-lazy-load-image-component";
import moment from "moment";
import numeral from "numeral";
import { useNavigate } from "react-router-dom";

const RelatedVideoCard = ({ video }) => {
    const {
        id,
        snippet: {
            channelId,
            channelTitle,
            title,
            publishedAt,
            thumbnails: { medium },
        },
    } = video;

    const navigate = useNavigate();

    const [views, setViews] = useState(null);
    const [duration, setDuration] = useState(null);
    const [channelIcon, setChannelIcon] = useState(null);

    const seconds = moment.duration(duration).asSeconds();
    const _duration = moment.utc(seconds * 1000).format("mm:ss");

    useEffect(() => {
        const getVideoDetails = async () => {
            const {
                data: { items },
            } = await api("/videos", {
                params: {
                    part: "contentDetails,statistics",
                    id: id.videoId,
                },
            });
            setDuration(items[0]?.contentDetails?.duration);
            setViews(items[0]?.statistics?.viewCount);
        };
        getVideoDetails();
    }, [id]);

    useEffect(() => {
        const getChannelIcon = async () => {
            const {
                data: { items },
            } = await api("/channels", {
                params: {
                    part: "snippet",
                    id: channelId,
                },
            });
            setChannelIcon(items[0]?.snippet?.thumbnails?.default?.url);
        };
        getChannelIcon();
    }, [channelId]);

    const handleVideoClick = () => {
        navigate(`/watch/${id.videoId}`);
    };

    return (
        <div
            className="flex mb-2 cursor-pointer"
            onClick={() => {
                handleVideoClick();
            }}
        >
            <div className="relative flex-shrink-0 flex-grow-0 w-[10.5rem] aspect-video bg-overlay-1 mr-2 rounded-lg">
                <LazyLoadImage
                    src={medium?.url}
                    alt=""
                    className="rounded-lg"
                />
                <span className="absolute bottom-1 right-1 bg-black/90 rounded-md text-xs px-1 py-[0.1rem]">
                    {_duration}
                </span>
            </div>
            <div className="flex flex-col mr-6">
                <span className="text-base leading-[1.4] font-medium line-clamp-2">
                    {title}
                </span>
                <span className="text-text-secondary mt-1 text-xs">
                    {channelTitle}
                </span>
                <span className="text-text-secondary text-xs">
                    {numeral(views).format("0.a")} views •{" "}
                    {moment(publishedAt).fromNow()}
                </span>
            </div>
        </div>
    );
};

export default RelatedVideoCard;
