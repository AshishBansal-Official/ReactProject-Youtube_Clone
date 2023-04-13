import VideoCard from "./VideoCard";

const Content = () => {
    return (
        <div className="mx-4">
            <div className="mt-6 mx-auto flex flex-wrap gap-y-12 gap-x-4 justify-center max-w-[141rem]">
                {Array.from({ length: 20 }).map((_, index) => {
                    return <VideoCard key={index}>{index}</VideoCard>;
                })}
            </div>
        </div>
    );
};

export default Content;
