import React, { useContext, useEffect, useState } from "react";
import menu_icon from "../images/header/icons/menu_icon.svg";
import logo_icon from "../images/header/icons/logo_icon.svg";
import arrow_back_icon from "../images/header/icons/arrow_back_icon.svg";
import search_icon from "../images/header/icons/search_icon.svg";
import cancel_icon from "../images/header/icons/cancel_icon.svg";
import mic_icon from "../images/header/icons/mic_icon.svg";
import more_vert_icon from "../images/header/icons/more_vert_icon.svg";
import create_icon from "../images/header/icons/create_icon.svg";
import notifications_icon from "../images/header/icons/notifications_icon.svg";

import { SVGRenderer } from "../components/SVGRenderer";
import SignInButton from "../components/SignInButton";
import SideBarContext from "../utils/contexts/SideBarContext";
import OverlayContext from "../utils/contexts/OverlayContext";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../services/redux/slices/authSlice";
import IsWatchScreenContext from "../utils/contexts/IsWatchScreenContext";

const Header = () => {
    const [value, setValue] = useState("");
    const [isFocused, setIsFocused] = useState(false);
    const { setShowSideBar } = useContext(SideBarContext);
    const { setShowOverlay } = useContext(OverlayContext);
    const { isWatchScreen } = useContext(IsWatchScreenContext);

    const [showSearchBar, setShowSearchBar] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const dispatch = useDispatch();

    const user = useSelector((store) => store.auth.user);

    const updateWindowWidth = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener("resize", updateWindowWidth);
        return () => window.removeEventListener("resize", updateWindowWidth);
    }, []);

    useEffect(() => {
        if (windowWidth > 656) setShowSearchBar(false);
        else setShowSearchBar(false);
    }, [windowWidth]);

    return (
        <div className="fixed top-0 w-full z-40 bg-app-bg">
            <div className="h-[var(--header-height)] w-full px-4 flex items-center justify-between">
                {/* // start */}
                {showSearchBar ? (
                    <SVGRenderer
                        src={arrow_back_icon}
                        className="-ml-2 shrink-0 rounded-full cursor-pointer hover:bg-overlay-1 active:bg-overlay-2"
                        onClick={() => {
                            setShowSearchBar(false);
                        }}
                    />
                ) : (
                    <div className="flex items-center justify-center shrink-0">
                        <SVGRenderer
                            small
                            src={menu_icon}
                            className="rounded-full hover:bg-overlay-1 active:bg-overlay-2 cursor-pointer p-2"
                            onClick={() => {
                                isWatchScreen
                                    ? setShowOverlay(
                                          (showOverlay) => !showOverlay
                                      )
                                    : document.body.clientWidth > 1352
                                    ? setShowSideBar((showSideBar) => {
                                          return !showSideBar;
                                      })
                                    : setShowOverlay(
                                          (showOverlay) => !showOverlay
                                      );
                            }}
                        />
                        <div className="flex pl-4">
                            <div className="min-h-5 h-5 aspect-auto">
                                <img
                                    src={logo_icon}
                                    alt="logo"
                                    className="w-full h-full"
                                />
                            </div>
                            <span className="-mt-2.5 mx-1 text-[10px] font-thin">
                                IN
                            </span>
                        </div>
                    </div>
                )}
                {/* // center */}
                <div
                    className={`flex items-center flex-grow-0 flex-[728px] h-full py-2  ${
                        showSearchBar
                            ? "app-xs:flex flex pl-2"
                            : "app-xs:hidden pl-10"
                    }`}
                >
                    {/* search */}
                    <div
                        className={`flex flex-grow h-full items-center rounded-l-full border ${
                            isFocused
                                ? "bg-transparent border-app-blue"
                                : " bg-dark-0 ml-9 border-dark-4"
                        }`}
                    >
                        <form className="h-full flex items-center justify-end flex-grow rounded-l-full">
                            {isFocused && (
                                <SVGRenderer
                                    small
                                    size={5}
                                    src={search_icon}
                                    className="ml-4"
                                />
                            )}
                            <input
                                type="text"
                                className="w-full rounded-l-full h-full outline-none text-base bg-transparent placeholder-text-secondary font-normal pl-4"
                                placeholder="Search"
                                value={value}
                                onChange={(e) => setValue(e.target.value)}
                                onFocus={() => setIsFocused(true)}
                                onBlur={() => setIsFocused(false)}
                            />
                            {value.length !== 0 && (
                                <SVGRenderer
                                    src={cancel_icon}
                                    className={`cursor-pointer rounded-full hover:bg-overlay-1 active:bg-overlay-2 -m-1`}
                                    onClick={() => {
                                        setValue("");
                                    }}
                                />
                            )}
                        </form>
                    </div>
                    <div className="bg-overlay-0 h-full w-16 flex-shrink-0 rounded-r-full flex items-center justify-center border border-l-0 border-dark-4">
                        <SVGRenderer small src={search_icon} />
                    </div>
                    <div
                        className={`bg-dark-1 flex-shrink-0 ml-2 p-2 ${
                            showSearchBar ? "-mr-2 bg-dark-2" : "rounded-full"
                        }`}
                    >
                        <SVGRenderer small src={mic_icon} />
                    </div>
                </div>
                {/* // end */}
                <div
                    className={`flex items-center justify-end app-xs:min-w-0 min-w-[220px] ${
                        showSearchBar ? "hidden" : ""
                    } ${user != null ? "mr-3.5 -ml-3.5" : ""}`}
                >
                    <SVGRenderer
                        src={search_icon}
                        className=" mr-1 app-xs:block hidden rounded-full hover:bg-overlay-1 active:bg-overlay-2 cursor-pointer"
                        onClick={() => {
                            setShowSearchBar(true);
                        }}
                    />
                    <SVGRenderer
                        src={mic_icon}
                        className="bg-dark-3 app-xs:block hidden app-xxs:hidden"
                    />
                    {user != null ? (
                        <>
                            <SVGRenderer
                                src={create_icon}
                                className="app-xs:mr-0 mr-2 active:bg-overlay-1 cursor-pointer rounded-full"
                            />
                            <SVGRenderer
                                src={notifications_icon}
                                className="app-xs:mr-0 mr-[1.375rem] active:bg-overlay-1 cursor-pointer rounded-full"
                            />
                        </>
                    ) : (
                        <SVGRenderer
                            src={more_vert_icon}
                            className="app-xs:mr-0 mr-2 active:bg-overlay-1 cursor-pointer rounded-full"
                        />
                    )}
                    {user != null ? (
                        <div
                            className="h-8 w-8 rounded-full cursor-pointer group"
                            onClick={() => {
                                dispatch(logoutUser());
                            }}
                        >
                            <img
                                src={user.photoURL}
                                alt="user"
                                className="h-8 w-8 rounded-full"
                            />
                            <div className="absolute top-[3rem] right-2 rounded-lg bg-overlay-2 p-2 hidden group-hover:block">
                                Logout
                            </div>
                        </div>
                    ) : (
                        <SignInButton />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Header;
