import Header from "./header/Header";
import Content from "./content/Content";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getPopularVideos } from "../../services/redux/slices/homeVideosSlice";
import { useSelector } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
import VideoCardsShimmer from "../shimmer/VideoCardsShimmer";
import { getVideosByCategory } from "../../services/redux/slices/homeVideosSlice";

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        dispatch(getPopularVideos());
    }, [dispatch]);

    const videos = useSelector((store) => store.homeVideos.videos);

    const [activeCategory, setActiveCategory] = useState("All");

    const handleClick = (activeCategory) => {
        setActiveCategory(activeCategory);
        window.scrollTo({ top: 0, behavior: "smooth" });
        dispatch(getVideosByCategory({ activeCategory: activeCategory }));
    };

    const fetchData = () => {
        if (activeCategory === "All") {
            dispatch(getPopularVideos());
        } else {
            dispatch(getVideosByCategory({ activeCategory: activeCategory }));
        }
    };

    return (
        <div className="flex flex-col">
            <Header
                activeCategory={activeCategory}
                handleClick={handleClick}
            ></Header>
            <InfiniteScroll
                dataLength={videos.length}
                next={() => fetchData()}
                hasMore={true}
                loader={<VideoCardsShimmer />}
            >
                <Content
                    videos={videos}
                    activeCategory={activeCategory}
                ></Content>
            </InfiniteScroll>
        </div>
    );
};

export default Home;
