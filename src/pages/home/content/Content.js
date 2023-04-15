import VideoCard from "./VideoCard";

const Content = () => {
    return (
        <div className="flex justify-center">
            <div className="max-w-[142rem] w-full">
                <div className="mt-20 mb-6 grid grid-cols-[repeat(auto-fit,minmax(max-content,360px))] gap-y-12 gap-x-4 justify-center">
                    {Array.from({ length: 9 }).map((_, index) => {
                        return <VideoCard key={index}>{index}</VideoCard>;
                    })}
                </div>
            </div>
        </div>
    );
};

export default Content;
