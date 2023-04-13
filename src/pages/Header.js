import React from "react";
import menu_icon from "../images/header/icons/menu_icon.svg";
import logo_icon from "../images/header/icons/logo_icon.svg";
import search_icon from "../images/header/icons/search_icon.svg";
import mic_icon from "../images/header/icons/mic_icon.svg";
import more_vert_icon from "../images/header/icons/more_vert_icon.svg";

import { SVGRenderer } from "../components/SVGRenderer";
import SignInButton from "../components/SignInButton";

const Header = () => {
    return (
        <div className="fixed top-0 w-full z-50 bg-app-bg">
            <div className="h-[var(--header-height)] w-full px-4 flex items-center justify-between">
                {/* // start */}
                <div className="flex items-center justify-center shrink-0">
                    <SVGRenderer small src={menu_icon} className="m-2" />
                    <div className="flex p-4">
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
                {/* // center */}
                <div className="flex items-center flex-grow-0 flex-[728px] mr-4">
                    {/* search */}
                    <div className="flex flex-grow ml-10 p-1">
                        <form
                            action=""
                            className="h-10 flex-grow rounded-l-full "
                        >
                            <input
                                type="text"
                                className="text-base placeholder-text-secondary font-normal h-10 w-[calc(100%-2rem)] rounded-l-full ml-8  pl-4 pr-1 outline-none border border-dark-4 border-r-0 bg-dark-0"
                                placeholder="Search"
                            />
                        </form>
                        <div className="bg-overlay-0 h-10 w-16 rounded-r-full flex items-center justify-center border border-dark-4">
                            <SVGRenderer small src={search_icon} />
                        </div>
                    </div>
                    <div className="bg-dark-1 rounded-full ml-1 p-2">
                        <SVGRenderer small src={mic_icon} />
                    </div>
                </div>
                {/* // end */}
                <div className="flex items-center justify-end min-w-[225px]">
                    <SVGRenderer src={more_vert_icon} className="mr-2" />
                    <SignInButton />
                </div>
            </div>
        </div>
    );
};

export default Header;
