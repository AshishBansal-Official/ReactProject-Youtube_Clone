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
            {loading ? (
                <>
                    {Array.from({ length: 25 }).map((_, index) => {
                        return (
                            <div key={index} className="flex mb-2">
                                <div className="flex-shrink-0 flex-grow-0 w-[10.5rem] aspect-video bg-overlay-1 mr-2 rounded-lg"></div>
                                <div className="flex flex-col mr-6 w-full gap-3 mt-1">
                                    <div className="w-[100%] bg-overlay-1 h-3 rounded-sm"></div>
                                    <span className="w-[60%] bg-overlay-1 h-3 rounded-sm"></span>
                                </div>
                            </div>
                        );
                    })}
                </>
            ) : (
                <div>
                    {relatedVideos?.map((video, i) => {
                        return <RelatedVideoCard key={i} video={video} />;
                    })}

                    {!loading && (
                        <div
                            className="text-app-blue border  mb-6 border-overlay-2 flex items-center justify-center rounded-full py-2 hover:bg-app-blue/30 hover:border-transparent cursor-pointer"
                            onClick={fetchData}
                        >
                            Show More Videos
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default RelatedVideosSection;
