import React from "react";
import PlayerSectionMetaData from "./PlayerSectionMetaData";

const PlayerSection = () => {
    return (
        <>
            <div className="w-full">
                <iframe
                    src="https://www.youtube.com/embed/tgbNymZ7vqY"
                    title="W3Schools Free Online Web Tutorials"
                    className="border-0 w-full aspect-video"
                />
            </div>
            <PlayerSectionMetaData />
        </>
    );
};

export default PlayerSection;
