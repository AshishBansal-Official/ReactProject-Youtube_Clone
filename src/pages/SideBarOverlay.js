import SideBar from "./SideBar/SideBar";
import { useContext, useEffect } from "react";
import OverlayContext from "../utils/contexts/OverlayContext";

const SideBarOverlay = () => {
    const { showOverlay, setShowOverlay } = useContext(OverlayContext);

    useEffect(() => {
        document.body.style.overflowY = showOverlay ? "hidden" : "scroll";
    }, [showOverlay]);

    return (
        <div
            className={`fixed w-screen h-screen bg-black/50 z-[100] flex inset-0 app-min-md:hidden ${
                showOverlay ? "" : "hidden"
            }`}
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
