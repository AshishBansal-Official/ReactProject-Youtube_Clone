import React from "react";
import {
    MdHistory,
    MdHomeFilled,
    MdOutlineVideoLibrary,
    MdOutlineSubscriptions,
} from "react-icons/md";
import shortsIcon from "../images/icons/shorts_icon.svg";

const tiles = [
    {
        name: "Home",
        icon: MdHomeFilled,
        image: false,
    },
    {
        name: "Shorts",
        icon: shortsIcon,
        image: true,
    },
    {
        name: "Subscriptions",
        icon: MdOutlineSubscriptions,
        image: false,
    },
    {
        name: "Library",
        icon: MdOutlineVideoLibrary,
        image: false,
    },
    {
        name: "History",
        icon: MdHistory,
        image: false,
    },
];

const MinSideBar = () => {
    return (
        <div className="fixed top-[calc(var(--header-height)+4px)] left-0 bottom-0 w-[var(--min-sidebar-width)] flex flex-col items-center hidden">
            {tiles &&
                tiles.map((tile) => {
                    return (
                        <div
                            key={tile.name}
                            className="pb-3 pt-4 w-16 flex flex-col items-center justify-center  rounded-lg hover:bg-dark-3 cursor-pointer"
                        >
                            <div className="mb-0.5 w-6 h-6">
                                {!tile.image ? (
                                    tile.icon({ className: "w-full h-full" })
                                ) : (
                                    <div className="h-full w-full">
                                        <img src={tile.icon} alt="short" />
                                    </div>
                                )}
                            </div>
                            <span className="text-[10px]">{tile.name}</span>
                        </div>
                    );
                })}
        </div>
    );
};

export default MinSideBar;
