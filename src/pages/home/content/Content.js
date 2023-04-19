import VideoCard from "./VideoCard";

const Content = ({ videos }) => {
    return (
        <div className="flex justify-center">
            <div className="max-w-[142rem] w-full">
                <div className="mt-20 mb-6 mx-1 ">
                    <div className="content-page grid grid-cols-[repeat(auto-fit,minmax(max-content,360px))] gap-y-12 gap-x-4 justify-center">
                        {videos.length > 0 &&
                            videos?.map((video, index) => {
                                return (
                                    <VideoCard
                                        key={`${index}_${
                                            video.id?.videoId || video.id
                                        }`}
                                        video={video}
                                    ></VideoCard>
                                );
                            })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Content;
