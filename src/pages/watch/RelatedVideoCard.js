import React from "react";

const RelatedVideoCard = () => {
    return (
        <div className="flex mb-2">
            <div className="relative w-[10.5rem] aspect-video bg-emerald-50 mr-2 rounded-lg">
                <span className="absolute bottom-1 right-1 bg-black/90 rounded-md text-xs px-1 py-[0.1rem]">
                    22:35
                </span>
            </div>
            <div className="flex flex-col mr-6">
                <span className="text-base leading-[1.4] font-medium line-clamp-2">
                    Video Title
                </span>
                <span className="text-text-secondary mt-1 text-xs">
                    Channel
                </span>
                <span className="text-text-secondary text-xs">
                    10M views • 11 months ago
                </span>
            </div>
        </div>
    );
};

export default RelatedVideoCard;
