import { SVGRenderer } from "../../components/SVGRenderer";
import menu_icon from "../../images/header/icons/menu_icon.svg";
import logo_icon from "../../images/header/icons/logo_icon.svg";
import { useContext } from "react";
import SideBarContext from "../../utils/contexts/SideBarContext";
import OverlayContext from "../../utils/contexts/OverlayContext";

const SideBarHeader = () => {
    const { setShowSideBar } = useContext(SideBarContext);
    const { setShowOverlay } = useContext(OverlayContext);

    return (
        <div>
            <div className="h-[var(--header-height)] bg-app-bg flex items-center pl-4">
                <SVGRenderer
                    small
                    src={menu_icon}
                    className="rounded-full hover:bg-overlay-1 active:bg-overlay-2 cursor-pointer p-2"
                    onClick={() => {
                        document.body.clientWidth > 1352
                            ? setShowSideBar((showSideBar) => {
                                  return !showSideBar;
                              })
                            : setShowOverlay((showOverlay) => !showOverlay);
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
        </div>
    );
};

export default SideBarHeader;
