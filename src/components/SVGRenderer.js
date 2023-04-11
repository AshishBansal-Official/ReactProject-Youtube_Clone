export const SVGRenderer = ({ src, className = "", size = 10, small }) => {
    size = small ? 6 : size;
    return (
        <div className={`h-${size} w-${size} p-${small ? 0 : 2} ${className} `}>
            <img src={src} alt="" className="w-full h-full" />
        </div>
    );
};
