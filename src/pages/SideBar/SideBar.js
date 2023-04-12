import Sections from "./Sections";
import Footer from "./Footer";

const SideBar = () => {
    return (
        <div className="fixed z-40 w-[var(--sidebar-width)] h-[calc(100vh-var(--header-height))] top-[var(--header-height)] bg-app-bg">
            <div className="w-full h-full overflow-y-scroll scrollbar">
                <Sections></Sections>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default SideBar;
