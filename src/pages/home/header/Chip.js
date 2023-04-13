const Chip = ({ name }) => {
    return (
        <div className="px-3 py-1.5 bg-dark-3 rounded-lg object-contain min-w-fit">
            {name}
        </div>
    );
};

export default Chip;
