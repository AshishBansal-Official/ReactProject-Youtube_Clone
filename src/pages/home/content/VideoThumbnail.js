import { LazyLoadImage } from "react-lazy-load-image-component";

const VideoThumbnail = ({ thumbnail, duration }) => {
    return (
        <div className="relative w-full aspect-video rounded-xl">
            <LazyLoadImage
                src={thumbnail}
                alt=""
                className="w-full h-full rounded-xl"
            />
            <span className="absolute bottom-2 right-2 bg-app-bg p-1 rounded">
                {duration}
            </span>
        </div>
    );
};

export default VideoThumbnail;
