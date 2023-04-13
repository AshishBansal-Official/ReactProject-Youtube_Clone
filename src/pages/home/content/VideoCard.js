import VideoThumbnail from "./VideoThumbnail";
import VideoDetail from "./VideoDetail";

const VideoCard = () => {
    return (
        <div className="flex flex-col basis-80 min-w-[20rem] max-w-[22.5rem] flex-grow">
            <VideoThumbnail></VideoThumbnail>
            <VideoDetail></VideoDetail>
        </div>
    );
};

export default VideoCard;
