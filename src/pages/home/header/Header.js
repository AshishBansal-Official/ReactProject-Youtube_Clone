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
        <div className="flex gap-3 py-3 mx-6 overflow-x-scroll tracking-[0.01rem] scrollbar-none">
            {chips.map((chip) => {
                return <Chip key={chip} name={chip}></Chip>;
            })}
        </div>
    );
};

export default Header;
