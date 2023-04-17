import { useSelector } from "react-redux";
import VideoCard from "./VideoCard";

const Content = () => {
    const videos = useSelector((store) => store.homeVideos.videos);
    return (
        <div className="flex justify-center">
            <div className="max-w-[142rem] w-full">
                <div className="mt-20 mb-6 mx-1 grid grid-cols-[repeat(auto-fit,minmax(max-content,360px))] gap-y-12 gap-x-4 justify-center">
                    {videos &&
                        videos.map((video) => {
                            return (
                                <VideoCard
                                    key={video.id}
                                    video={video}
                                ></VideoCard>
                            );
                        })}
                </div>
            </div>
        </div>
    );
};

export default Content;
