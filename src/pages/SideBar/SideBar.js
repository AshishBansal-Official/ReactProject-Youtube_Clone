import SideBarHeader from "./SideBarHeader";
import Sections from "./Sections";
import Footer from "./Footer";

const SideBar = ({ showHeader = false }) => {
    return (
        <div
            className={`fixed z-30 w-[var(--sidebar-width)]  bg-app-bg ${
                showHeader
                    ? " h-screen top-0 "
                    : " h-[calc(100vh-var(--header-height))] top-[var(--header-height)] app-md:hidden"
            }`}
        >
            <div className="w-full h-full overflow-y-scroll scrollbar">
                {showHeader && <SideBarHeader />}
                <Sections></Sections>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default SideBar;
