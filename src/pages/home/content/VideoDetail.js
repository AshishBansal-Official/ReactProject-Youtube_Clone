import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const VideoDetail = ({ channelIcon, title, channel, views, release }) => {
    const [hide, setHide] = useState(false);
    return (
        <div className="mt-3 flex">
            <div className="h-9 aspect-square rounded-full mr-3 bg-overlay-2">
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
            <div className="flex flex-col">
                <span className="text-base leading-[1.4] font-medium line-clamp-2">
                    {title}
                </span>
                <span className="text-text-secondary mt-1">{channel}</span>
                <span className="text-text-secondary text-sm">
                    {views} views • {release}
                </span>
            </div>
        </div>
    );
};

export default VideoDetail;
