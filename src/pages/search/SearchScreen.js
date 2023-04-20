import React, { useEffect } from "react";
import SearchVideoCard from "./SearchVideoCard";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getVideosBySearch } from "../../services/redux/slices/searchVideosSlice";

const SearchScreen = () => {
    const { query } = useParams();

    const dispatch = useDispatch();

    const { videos, loading } = useSelector((state) => state.searchVideos);

    useEffect(() => {
        dispatch(getVideosBySearch({ query: query }));
    }, [dispatch, query]);

    return (
        <div className="mb-4">
            {!loading &&
                videos?.map((video) => {
                    return <SearchVideoCard video={video} />;
                })}
        </div>
    );
};

export default SearchScreen;
