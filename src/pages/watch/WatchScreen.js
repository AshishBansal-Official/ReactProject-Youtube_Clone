import { useContext, useEffect } from "react";
import IsWatchScreenContext from "../../utils/contexts/IsWatchScreenContext";
import PlayerSection from "./PlayerSection";
import CommentsSection from "./CommentsSection";
import RelatedVideosSection from "./RelatedVideosSection";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getVideoById } from "../../services/redux/slices/selectVideoSlice";

const WatchScreen = () => {
    const { setIsWatchScreen } = useContext(IsWatchScreenContext);
    const { id } = useParams();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getVideoById({ id: id }));
    }, [dispatch, id]);

    useEffect(() => {
        setIsWatchScreen(true);
        return () => {
            setIsWatchScreen(false);
        };
    }, [setIsWatchScreen]);

    return (
        <div className="flex justify-center w-full">
            <div className="max-w-[110rem] w-full">
                <div className="w-full h-full flex justify-center ">
                    <div className="flex flex-col ml-6 mt-6 mb-2 mr-6 w-full max-w-[calc(calc(100vh-216px)*16/9)] min-w-[26.8rem]  lg:min-w-[40rem] app-min-md:min-w-[53.33rem]">
                        <PlayerSection id={id} />
                        <RelatedVideosSection className="lg:hidden" />
                        <CommentsSection id={id} />
                    </div>
                    <div className="mt-6 mr-6 min-w-[18.75rem] basis-[25rem] lg:block hidden">
                        <RelatedVideosSection />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WatchScreen;