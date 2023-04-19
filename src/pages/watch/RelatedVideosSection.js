import RelatedVideoCard from "./RelatedVideoCard";

const RelatedVideosSection = ({ className }) => {
    return (
        <div className={className}>
            {Array.from({ length: 20 }).map((_, index) => {
                return <RelatedVideoCard key={index} />;
            })}
        </div>
    );
};

export default RelatedVideosSection;
