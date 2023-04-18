const Chip = ({ name, onClick, active }) => {
    return (
        <div
            onClick={onClick}
            className={`px-3 h-8 py-1.5 rounded-lg object-contain min-w-fit select-none cursor-pointer  transition duration-300 ${
                active
                    ? "bg-text-primary text-dark-3"
                    : "bg-dark-3 hover:bg-overlay-2"
            }`}
        >
            {name}
        </div>
    );
};

export default Chip;
