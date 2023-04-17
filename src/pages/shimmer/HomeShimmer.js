import VideoCardsShimmer from "./VideoCardsShimmer";
import { SVGRenderer } from "../../components/SVGRenderer";
import menu_icon_disabled from "../../images/header/icons/menu_icon_disabled.svg";

const HomeShimmer = () => {
    return (
        <div className="h-full">
            <div className="fixed top-0 w-full z-40 bg-app-bg">
                <div className="h-[var(--header-height)] w-full px-4 flex items-center justify-between">
                    {/* // start */}
                    <div className="flex items-center justify-center shrink-0">
                        <SVGRenderer
                            small
                            src={menu_icon_disabled}
                            className="p-2"
                        />
                    </div>
                    {/* // end */}
                    <div
                        className={`flex items-center justify-end min-w-[220px] gap-4`}
                    >
                        <div className="h-8 w-8 rounded-full bg-overlay-1"></div>
                        <div className="h-8 w-8 rounded-full bg-overlay-1"></div>
                        <div className="h-8 w-8 rounded-full bg-overlay-1"></div>
                        <div className="h-8 w-8 rounded-full bg-overlay-1"></div>
                    </div>
                </div>
            </div>
            <div
                className={`mt-[calc(var(--header-height)+5rem)] app-md:ml-[var(--min-sidebar-width)] app-sm:ml-0 overflow-x-hidden ml-[var(--sidebar-width)]`}
            >
                <VideoCardsShimmer cards={20}></VideoCardsShimmer>
            </div>
        </div>
    );
};

export default HomeShimmer;
