import React, { useEffect, useState } from "react";
import api from "../../utils/api";
import { LazyLoadImage } from "react-lazy-load-image-component";
import moment from "moment";
import numeral from "numeral";
import { useNavigate } from "react-router-dom";

const SearchVideoCard = ({ video }) => {
    const {
        id,
        snippet: {
            channelId,
            channelTitle,
            description,
            title,
            publishedAt,
            thumbnails: { medium },
        },
    } = video;

    const navigate = useNavigate();

    const [hide, setHide] = useState(false);
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
            className="flex app-xxs:flex-col mt-4 mx-1 cursor-pointer"
            onClick={() => {
                handleVideoClick();
            }}
        >
            <div className="relative flex-shrink-0 max-w-[22.5rem] app-xxs:max-w-none app-xxs:rounded-none app-sm:max-w-[15rem] w-full aspect-video bg-overlay-1 mr-4 rounded-lg">
                <LazyLoadImage
                    src={medium?.url}
                    alt=""
                    className="rounded-lg h-full w-full app-xxs:rounded-none"
                />
                <span className="absolute bottom-1 right-1 bg-black/90 rounded-md text-xs px-1 py-[0.1rem]">
                    {_duration}
                </span>
            </div>
            <div className="flex flex-col text-text-secondary">
                <span className="text-lg app-sm:text-base app-sm:mt-2 app-sm:mb-0 font-medium line-clamp-2 text-text-primary">
                    {title}
                </span>
                <span className="text-xs">
                    <span className="text-xs hidden app-xxs:inline">
                        {channelTitle} •{" "}
                    </span>
                    {numeral(views).format("0.a")} views •{" "}
                    {moment(publishedAt).fromNow()}
                </span>
                <div className="flex my-3 items-center app-xxs:hidden">
                    <div className="h-6 aspect-square rounded-full mr-2 bg-overlay-2">
                        {hide ? (
                            ""
                        ) : (
                            <LazyLoadImage
                                src={channelIcon}
                                alt=""
                                className="h-full w-full rounded-full"
                                onError={() => setHide(true)}
                            />
                        )}
                    </div>
                    <span className="text-xs">{channelTitle}</span>
                </div>
                <div className="mb-1 text-xs line-clamp-2 app-xxs:hidden">
                    {description}
                </div>
            </div>
        </div>
    );
};

export default SearchVideoCard;
