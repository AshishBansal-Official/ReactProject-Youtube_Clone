import VideoThumbnail from "./VideoThumbnail";
import VideoDetail from "./VideoDetail";
import api from "../../../utils/api";
import { useEffect, useState } from "react";
import moment from "moment";
import numeral from "numeral";
import { useNavigate } from "react-router-dom";

const VideoCard = ({ video }) => {
    const {
        id,
        snippet: {
            channelId,
            channelTitle,
            title,
            publishedAt,
            thumbnails: {
                medium: { url },
            },
        },
    } = video;

    const navigate = useNavigate();

    const [views, setViews] = useState(null);
    const [duration, setDuration] = useState(null);
    const [channelIcon, setChannelIcon] = useState(null);

    const seconds = moment.duration(duration).asSeconds();
    const _duration = moment.utc(seconds * 1000).format("mm:ss");

    const _videoId = id?.videoId || id;

    useEffect(() => {
        // We are making an extra api call to maintain the data consistency since the video prop passed is not consistent
        const getVideoDetails = async () => {
            const {
                data: { items },
            } = await api("/videos", {
                params: {
                    part: "contentDetails,statistics",
                    id: _videoId,
                },
            });
            setDuration(items[0]?.contentDetails?.duration);
            setViews(items[0]?.statistics?.viewCount);
        };
        if (video.contentDetails && video.statistics) {
            setDuration(video.contentDetails?.duration);
            setViews(video.statistics?.viewCount);
        } else {
            getVideoDetails();
        }
    }, [_videoId, video.contentDetails, video.statistics]);

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
        navigate(`/watch/${_videoId}`);
    };

    return (
        <div
            className="flex flex-col basis-80 min-w-[20rem] max-w-[22.5rem] flex-grow cursor-pointer"
            onClick={handleVideoClick}
        >
            <VideoThumbnail
                thumbnail={url}
                duration={_duration}
            ></VideoThumbnail>
            <VideoDetail
                channelIcon={channelIcon}
                title={title}
                channel={channelTitle}
                views={numeral(views).format("0.a")}
                release={moment(publishedAt).fromNow()}
            ></VideoDetail>
        </div>
    );
};

export default VideoCard;
