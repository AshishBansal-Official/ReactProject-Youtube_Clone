export const SVGRenderer = ({
    src,
    className = "",
    size = 6,
    small,
    p = 2,
    onClick = () => {},
}) => {
    const s = `${(size * 4).toString()}px`;
    return (
        <div
            className={`${small ? "" : `p-${p}`} ${className}`}
            onClick={onClick}
        >
            <img src={src} alt="" height={s} width={s} />
        </div>
    );
};
