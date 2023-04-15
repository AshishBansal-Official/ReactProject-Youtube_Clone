const Chip = ({ name }) => {
    return (
        <div className="px-3 h-8 py-1.5 bg-dark-3 rounded-lg object-contain min-w-fit select-none cursor-pointer hover:bg-overlay-2 transition duration-300">
            {name}
        </div>
    );
};

export default Chip;
