const VideoDetail = ({ channelIcon, title, channel, views, release }) => {
    return (
        <div className="mt-3 flex">
            <div className="h-9 aspect-square rounded-full mr-3 bg-blue-200">
                <img
                    src={channelIcon}
                    alt=""
                    className="h-full w-full rounded-full"
                />
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
