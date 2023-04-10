import React from "react";
import { MdMic, MdMoreVert } from "react-icons/md";
import logo_icon from "../images/icons/logo_icon.svg";
import menu_icon from "../images/icons/menu_icon.svg";
import search_icon from "../images/icons/search_icon.svg";
import userAuth_icon from "../images/icons/user_auth_icon.svg";

const Header = () => {
    return (
        <div className="fixed top-0 w-full z-50">
            <div className="h-14 w-full px-4 flex items-center justify-between">
                {/* // start */}
                <div className="flex items-center justify-center">
                    <div className="h-10 w-10 p-2">
                        <img
                            src={menu_icon}
                            alt="logo"
                            className="w-full h-full"
                        />
                        {/* <MdMenu className="w-full h-full"></MdMenu> */}
                    </div>
                    <div className="flex p-4">
                        <div className="h-5 aspect-auto">
                            <img
                                src={logo_icon}
                                alt="logo"
                                className="w-full h-full"
                            />
                        </div>
                        <span className="-mt-2 mx-1 text-[10px] font-thin">
                            IN
                        </span>
                    </div>
                </div>
                {/* // center */}
                <div className="flex items-center flex-grow-0 flex-[728px]">
                    {/* search */}
                    <div className="flex flex-grow ml-10 p-1">
                        <form
                            action=""
                            className="h-10 flex-grow rounded-l-full "
                        >
                            <input
                                type="text"
                                className="text-base h-10 w-[calc(100%-2.5rem)] rounded-l-full ml-10  pl-4 pr-1 outline-none border border-dark-4 border-r-0 bg-dark-0"
                                placeholder="Search"
                            />
                        </form>
                        <div className="bg-overlay-0 h-10 w-16 rounded-r-full flex items-center justify-center border border-dark-4">
                            <div className="h-6 w-6">
                                <img src={search_icon} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="h-10 w-10 p-2 bg-dark-1 rounded-full ml-1">
                        <MdMic className="w-full h-full"></MdMic>
                    </div>
                </div>
                {/* // end */}
                <div className="flex items-center justify-end min-w-[225px]">
                    <div className="h-10 w-10 p-2 mr-2">
                        <MdMoreVert className="w-full h-full"></MdMoreVert>
                    </div>
                    <div className="border border-dark-4 fill-white rounded-full px-4 py-1.5 flex items-center justify-center">
                        <div className="w-6 h-6 mr-1.5 -ml-1.5 text-red-300">
                            <img
                                src={userAuth_icon}
                                alt=""
                                className="text-blue-300 fill-slate-500"
                                style={{
                                    fill: "white",
                                }}
                            />
                        </div>
                        <span className="font-medium tracking-wider text-[#3EA6FF]">
                            Sign in
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
