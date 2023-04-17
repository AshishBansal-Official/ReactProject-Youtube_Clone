import React from "react";

const VideoCardsShimmer = () => {
    return (
        <div className="flex justify-center">
            <div className="max-w-[142rem] w-full">
                <div className="mb-6 mx-1 grid grid-cols-[repeat(auto-fit,minmax(max-content,360px))] gap-y-10 gap-x-4 justify-center">
                    {Array.from({ length: 9 }).map((_, index) => {
                        return (
                            <div
                                key={index}
                                className="flex flex-col basis-80 min-w-[20rem] max-w-[22.5rem] flex-grow"
                            >
                                <div className="w-full aspect-video rounded-xl bg-overlay-2"></div>
                                <div className="mt-3 flex">
                                    <div className="h-9 aspect-square rounded-full mr-3 bg-overlay-2"></div>
                                    <div className="flex flex-col w-full flex-grow gap-3">
                                        <div className="w-[90%] bg-overlay-2 h-4 rounded-sm"></div>
                                        <span className="w-[60%] bg-overlay-2 h-4 rounded-sm"></span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default VideoCardsShimmer;
