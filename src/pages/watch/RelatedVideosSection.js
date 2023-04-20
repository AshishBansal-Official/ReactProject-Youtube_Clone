import { useDispatch, useSelector } from "react-redux";
import RelatedVideoCard from "./RelatedVideoCard";
import { getRelatedVideos } from "../../services/redux/slices/relatedVideosSlice";
import { useEffect } from "react";

const RelatedVideosSection = ({ id, className }) => {
    const dispatch = useDispatch();

    const { loading, relatedVideos } = useSelector(
        (state) => state.relatedVideos
    );

    useEffect(() => {
        dispatch(getRelatedVideos({ id: id }));
    }, [dispatch, id]);

    const fetchData = () => {
        dispatch(getRelatedVideos({ id: id }));
    };

    return (
        <div className={className}>
            <div>
                {relatedVideos?.map((video, i) => {
                    return <RelatedVideoCard key={i} video={video} />;
                })}

                {!loading && (
                    <div
                        className="text-app-blue border border-overlay-2 flex items-center justify-center rounded-full py-2 hover:bg-app-blue/30 hover:border-transparent cursor-pointer"
                        onClick={fetchData}
                    >
                        Show More Videos
                    </div>
                )}
            </div>
        </div>
    );
};

export default RelatedVideosSection;
