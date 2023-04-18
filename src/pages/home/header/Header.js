import { useContext, useEffect, useRef, useState } from "react";
import SideBarContext from "../../../utils/contexts/SideBarContext";
import Chip from "./Chip";
import { SVGRenderer } from "../../../components/SVGRenderer";
import slider_left_arrow from "../../../images/icons/slider_left_arrow.svg";
import slider_right_arrow from "../../../images/icons/slider_right_arrow.svg";
import { useDispatch } from "react-redux";
import { getVideosByCategory } from "../../../services/redux/slices/homeVideosSlice";

const chips = [
    "All",
    "Music",
    "Arijit Singh",
    "Live",
    "Bollywood Music",
    "Tamil Cinema",
    "Dramedy",
    "Gaming",
    "News",
    "Mantras",
    "History",
    "Gadgets",
    "NEET",
    "Cars",
    "Eating",
    "Recently Uploaded",
];

const Header = () => {
    const { showSideBar } = useContext(SideBarContext);
    const [adjustWidth, setAdjustWidth] = useState(true);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const listRef = useRef(null);
    const [showLeftButton, setshowLeftButton] = useState(false);
    const [showRightButton, setshowRightButton] = useState(false);

    const [activeElement, setActiveElement] = useState("All");
    const dispatch = useDispatch();

    const handleClick = (category) => {
        setActiveElement(category);
        dispatch(getVideosByCategory({ category: category }));
    };

    // Show / hide slider buttons at start
    useEffect(() => {
        listRef?.current?.scrollWidth > listRef?.current?.clientWidth
            ? setshowRightButton(true)
            : setshowRightButton(false);
    }, []);

    // To set width of header
    const updateWindowWidth = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener("resize", updateWindowWidth);
        return () => window.removeEventListener("resize", updateWindowWidth);
    }, []);

    useEffect(() => {
        if (windowWidth > 1352) setAdjustWidth(true);
        else setAdjustWidth(false);
    }, [windowWidth]);

    return (
        <div
            className={`fixed z-10 bg-app-bg app-header w-[calc(100%-var(--min-sidebar-width))] ${
                showSideBar && adjustWidth
                    ? " w-[calc(100%-var(--sidebar-width))]"
                    : ""
            } app-sm:w-full`}
        >
            {/* Left button */}
            <div
                className={`absolute w-20 flex items-center h-full left-0 top-0 ${
                    showLeftButton ? "" : "hidden"
                }`}
                onClick={() => {
                    listRef?.current?.scrollBy(
                        -listRef?.current?.clientWidth,
                        0
                    );
                }}
            >
                <div className="flex-shrink-0 bg-app-bg px-2 ">
                    <SVGRenderer
                        src={slider_left_arrow}
                        className="bg-app-bg p-2 rounded-full hover:bg-overlay-1 active:bg-overlay-2 cursor-pointer"
                    />
                </div>
                <div className="w-[3.125rem] h-full">
                    <div className="w-full h-full bg-gradient-to-r from-app-bg from-20% to-transparent"></div>
                </div>
            </div>
            {/* Chips */}
            <div
                ref={listRef}
                className="flex gap-3 py-3 px-6 overflow-x-scroll tracking-[0.01rem] scrollbar-none "
                onScroll={(e) => {
                    e?.target?.scrollLeft <= 0
                        ? setshowLeftButton(false)
                        : setshowLeftButton(true);
                    e?.target?.scrollLeft + e?.target?.clientWidth >=
                    e?.target?.scrollWidth - 2
                        ? setshowRightButton(false)
                        : setshowRightButton(true);
                }}
            >
                {chips.map((chip) => {
                    return (
                        <Chip
                            key={chip}
                            name={chip}
                            onClick={() => handleClick(chip)}
                            active={chip === activeElement}
                        ></Chip>
                    );
                })}
            </div>
            {/* Right button */}
            <div
                className={`absolute w-20 flex items-center h-full right-0 top-0 ${
                    showRightButton ? "" : "hidden"
                }`}
                onClick={() => {
                    listRef?.current?.scrollBy(
                        listRef?.current?.clientWidth,
                        0
                    );
                }}
            >
                <div className="w-[3.125rem] h-full">
                    <div className="w-full h-full bg-gradient-to-l from-app-bg from-20% to-transparent"></div>
                </div>
                <div className="flex-shrink-0 bg-app-bg px-2 ">
                    <SVGRenderer
                        src={slider_right_arrow}
                        className="bg-app-bg p-2 rounded-full hover:bg-overlay-1 active:bg-overlay-2 cursor-pointer"
                    />
                </div>
            </div>
        </div>
    );
};

export default Header;
