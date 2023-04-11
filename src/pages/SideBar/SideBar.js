import Sections from "./Sections";
import Footer from "./Footer";

const SideBar = () => {
    return (
        <div className="fixed mt-[var(--header-height)] z-50 w-[var(--sidebar-width)] h-full">
            <Sections></Sections>
            <Footer></Footer>
        </div>
    );
};

export default SideBar;
