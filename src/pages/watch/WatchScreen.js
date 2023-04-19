import { useContext, useEffect } from "react";
import IsWatchScreenContext from "../../utils/contexts/IsWatchScreenContext";
import PlayerSection from "./PlayerSection";
import CommentsSection from "./CommentsSection";
import RelatedVideosSection from "./RelatedVideosSection";

const WatchScreen = () => {
    const { setIsWatchScreen } = useContext(IsWatchScreenContext);

    useEffect(() => {
        setIsWatchScreen(true);
        return () => {
            setIsWatchScreen(false);
        };
    });

    return (
        <div className="flex justify-center w-full">
            <div className="max-w-[110rem] w-full">
                <div className="w-full h-full flex justify-center ">
                    <div className="flex flex-col ml-6 mt-6 mb-2 mr-6 w-full max-w-[calc(calc(100vh-216px)*16/9)] min-w-[26.8rem]  lg:min-w-[40rem] app-min-md:min-w-[53.33rem]">
                        <PlayerSection />
                        <RelatedVideosSection className="lg:hidden" />
                        <CommentsSection />
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
