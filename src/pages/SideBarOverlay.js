import SideBar from "./SideBar/SideBar";
import { useContext, useEffect } from "react";
import OverlayContext from "../utils/contexts/OverlayContext";
import IsWatchScreenContext from "../utils/contexts/IsWatchScreenContext";

const SideBarOverlay = () => {
    const { showOverlay, setShowOverlay } = useContext(OverlayContext);
    const { isWatchScreen } = useContext(IsWatchScreenContext);

    useEffect(() => {
        document.body.style.overflowY = showOverlay ? "hidden" : "scroll";
    }, [showOverlay]);

    return (
        <div
            className={`fixed w-screen h-screen bg-black/50 z-[100] flex inset-0  ${
                isWatchScreen
                    ? showOverlay
                        ? ""
                        : "hidden"
                    : showOverlay
                    ? "app-min-md:hidden"
                    : "hidden app-min-md:hidden"
            } `}
        >
            <SideBar showHeader={true}></SideBar>
            <div
                className="w-full h-full"
                onClick={() => setShowOverlay(false)}
            ></div>
        </div>
    );
};

export default SideBarOverlay;
