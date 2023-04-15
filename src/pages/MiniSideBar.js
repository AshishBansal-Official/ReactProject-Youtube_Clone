import home_outline from "../images/sidebar/icons/home_outline.svg";
import shorts_outline from "../images/sidebar/icons/shorts_outline.svg";
import subscriptions_outline from "../images/sidebar/icons/subscriptions_outline.svg";
import library_outline from "../images/sidebar/icons/library_outline.svg";
import history_outline from "../images/sidebar/icons/history_outline.svg";
import home_filled from "../images/sidebar/icons/home_filled.svg";
import shorts_filled from "../images/sidebar/icons/shorts_filled.svg";
import subscriptions_filled from "../images/sidebar/icons/subscriptions_filled.svg";
import library_filled from "../images/sidebar/icons/library_filled.svg";
import history_filled from "../images/sidebar/icons/history_filled.svg";

import { SVGRenderer } from "../components/SVGRenderer";

const tiles = [
    {
        name: "Home",
        icon: home_outline,
        active_icon: home_filled,
    },
    {
        name: "Shorts",
        icon: shorts_outline,
        active_icon: shorts_filled,
    },
    {
        name: "Subscriptions",
        icon: subscriptions_outline,
        active_icon: subscriptions_filled,
    },
    {
        name: "Library",
        icon: library_outline,
        active_icon: library_filled,
    },
    {
        name: "History",
        icon: history_outline,
        active_icon: history_filled,
    },
];

const MiniSideBar = () => {
    return (
        <div className="fixed z-20 top-[calc(var(--header-height)+4px)] left-0 bottom-0 w-[var(--min-sidebar-width)] flex-col items-center flex app-sm:hidden">
            {tiles &&
                tiles.map((tile) => {
                    return (
                        <div
                            key={tile.name}
                            className="pb-3 pt-4 w-16 flex flex-col items-center justify-center  rounded-lg hover:bg-dark-3 cursor-pointer"
                        >
                            <div className="mb-0.5 w-6 h-6">
                                {<SVGRenderer small src={tile.icon} />}
                            </div>
                            <span className="text-[10px]">{tile.name}</span>
                        </div>
                    );
                })}
        </div>
    );
};

export default MiniSideBar;
