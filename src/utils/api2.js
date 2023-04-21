import axios from "axios";

const api2 = axios.create({
    baseURL: "https://youtube.googleapis.com/youtube/v3/",
    params: {
        key: process.env.REACT_APP_YOUTUBE_API_KEY2,
    },
});

export default api;
