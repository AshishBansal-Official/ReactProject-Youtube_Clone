import VideoCard from "./VideoCard";

const Content = () => {
    return (
        <div className="mx-auto">
            <div className="mt-6 grid grid-cols-[repeat(auto-fit,minmax(200px,360px))] gap-y-12 gap-x-4 justify-center max-w-[142rem]">
                {Array.from({ length: 10 }).map((_, index) => {
                    return <VideoCard key={index}>{index}</VideoCard>;
                })}
            </div>
        </div>
    );
};

export default Content;
