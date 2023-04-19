import { SVGRenderer } from "../../components/SVGRenderer";
import more_vert_icon from "../../images/header/icons/more_vert_icon.svg";
import save_icon from "../../images/watch/icons/save_icon.svg";
import share_icon from "../../images/watch/icons/share_icon.svg";
import like_icon from "../../images/watch/icons/like_icon.svg";
import dislike_icon from "../../images/watch/icons/dislike_icon.svg";

const PlayerSectionMetaData = () => {
    return (
        <div className="flex flex-col mt-3 -ml-0.5 app-xs:mt-2.5 app-xs:ml-1 mb-6">
            {/* Top */}
            <div className="mt-0.5 text-lg tracking-wide font-semibold ">
                Top 5 Biggest Dump Trucks in the World 2023
            </div>
            {/* Center */}
            <div className="flex w-full app-xs:flex-col">
                <div className="flex items-center min-w-[calc(50%-0.375rem)] mt-2 mr-3">
                    <div className="flex items-start">
                        <div className="h-10 aspect-square rounded-full  mr-3 bg-overlay-2">
                            {true ? (
                                ""
                            ) : (
                                <img
                                    src={"shdfh"}
                                    alt=""
                                    className="h-full w-full rounded-full"
                                />
                            )}
                        </div>
                        <div className="flex flex-col">
                            <div className="text-base -mt-[0.1rem] font-medium line-clamp-1">
                                DigNDoze
                            </div>
                            <div className="text-text-secondary mt-[0.0.5rem] text-xs">
                                6.66K subscribers
                            </div>
                        </div>
                    </div>
                    <div className="mx-7 px-4 py-2 rounded-full bg-text-primary hover:bg-text-secondary select-none text-app-bg cursor-pointer font-medium">
                        Subscribe
                    </div>
                </div>
                <div className="select-none mt-1.5 flex gap-2 items-center justify-end app-xs:justify-start app-xs:mt-3 min-w-[calc(50%-0.375rem)] ">
                    <div className="flex items-center gap-1.5 bg-overlay-1 hover:bg-overlay-2 cursor-pointer pr-4 pl-2.5 py-1.5 rounded-full">
                        <SVGRenderer small src={like_icon} />
                        <span>4.4K</span>
                        <div className="border self-stretch ml-2 mr-1.5 border-overlay-1"></div>
                        <SVGRenderer small src={dislike_icon} />
                    </div>
                    <div className="flex items-center gap-1.5 bg-overlay-1 hover:bg-overlay-2 cursor-pointer pr-4 pl-2.5 py-1.5 rounded-full">
                        <SVGRenderer small src={share_icon} />
                        <span>Share</span>
                    </div>
                    <div className="app-xs:flex [@media(min-width:1254px)]:flex hidden items-center gap-1.5 bg-overlay-1 hover:bg-overlay-2 cursor-pointer pr-4 pl-2.5 py-1.5 rounded-full">
                        <SVGRenderer small src={save_icon} />
                        <span>Save</span>
                    </div>
                    <SVGRenderer
                        src={more_vert_icon}
                        small={true}
                        className="rotate-90 bg-overlay-1 hover:bg-overlay-2 cursor-pointer rounded-full p-1.5"
                    />
                </div>
            </div>
            {/* Bottom */}
            <div className="mt-3 rounded-lg w-full bg-overlay-1">
                <div className="p-3">
                    <div className="flex">
                        <div className="mr-1.5">651K views</div>
                        <div className="mr-1.5">5 months ago</div>
                        <div className="text-text-secondary">UNITED STATES</div>
                    </div>
                    <div className="text-app-blue">#hashtag</div>
                    <br />
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sed delectus laboriosam aspernatur doloremque
                        necessitatibus laborum quas, magnam eaque reprehenderit
                        quasi quae, a itaque sint inventore incidunt, sequi
                        fugiat fuga tempore!
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlayerSectionMetaData;
