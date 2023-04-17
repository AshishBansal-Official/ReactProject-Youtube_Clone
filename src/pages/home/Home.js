import Header from "./header/Header";
import Content from "./content/Content";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getPopularVideos } from "../../services/redux/slices/homeVideosSlice";

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPopularVideos());
    }, [dispatch]);

    return (
        <div className="flex flex-col">
            <Header></Header>
            <Content></Content>
        </div>
    );
};

export default Home;
