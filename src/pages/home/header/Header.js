import Chip from "./Chip";

const chips = [
    "All",
    "Music",
    "Arijit Singh",
    "Live",
    "Bollywood Music",
    "Tamil Cinema",
    "Dramedy",
    "Gaming",
    "News",
    "Mantras",
    "History",
    "Gadgets",
    "NEET",
    "Cars",
    "Eating",
    "Recently Uploaded",
];

const Header = () => {
    return (
        <div
            className={
                "fixed bg-app-bg flex gap-3 py-3 px-6 overflow-x-scroll tracking-[0.01rem] scrollbar-none app-header"
            }
        >
            {chips.map((chip) => {
                return <Chip key={chip} name={chip}></Chip>;
            })}
        </div>
    );
};

export default Header;
