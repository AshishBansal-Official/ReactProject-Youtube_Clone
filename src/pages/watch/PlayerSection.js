import React from "react";
import PlayerSectionMetaData from "./PlayerSectionMetaData";
import { useSelector } from "react-redux";

const PlayerSection = ({ id }) => {
    const { video } = useSelector((state) => state.selectVideo);

    return (
        <>
            <div className="w-full">
                <iframe
                    src={`https://www.youtube.com/embed/${id}`}
                    title={video?.snipper?.title}
                    className="border-0 w-full aspect-video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                />
            </div>
            <PlayerSectionMetaData id={id} />
        </>
    );
};

export default PlayerSection;
