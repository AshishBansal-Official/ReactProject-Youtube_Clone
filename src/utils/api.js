import axios from "axios";

const api = axios.create({
    baseURL: "https://youtube.googleapis.com/youtube/v3/",
    params: {
        key: process.env.REACT_APP_YOUTUBE_API_KEY,
    },
});

export default api;
