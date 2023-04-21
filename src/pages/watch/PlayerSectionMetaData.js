import { SVGRenderer } from "../../components/SVGRenderer";
import more_vert_icon from "../../images/header/icons/more_vert_icon.svg";
import save_icon from "../../images/watch/icons/save_icon.svg";
import share_icon from "../../images/watch/icons/share_icon.svg";
import like_icon from "../../images/watch/icons/like_icon.svg";
import dislike_icon from "../../images/watch/icons/dislike_icon.svg";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import numeral from "numeral";
import moment from "moment/moment";
import { getChannelDetails } from "../../services/redux/slices/channelDetailsSlice";
import { LazyLoadImage } from "react-lazy-load-image-component";

const PlayerSectionMetaData = ({ id }) => {
    const [showContent, setShowContent] = useState(false);
    const [hide, setHide] = useState(false);

    const dispatch = useDispatch();

    const { video, loading } = useSelector((state) => state.selectVideo);
    const channel = useSelector((state) => state.channelDetails.channel);

    useEffect(() => {
        if (video?.snippet?.channelId) {
            dispatch(
                getChannelDetails({ channelId: video?.snippet?.channelId })
            );
        }
    }, [dispatch, video]);

    return (
        <>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <div className="flex flex-col mt-3 -ml-0.5 app-xs:mt-2.5 app-xs:ml-1 mb-6">
                    {/* Top */}
                    <div className="mt-0.5 text-lg tracking-wide font-semibold ">
                        {video?.snippet?.title}
                    </div>
                    {/* Center */}
                    <div className="flex w-full app-xs:flex-col">
                        <div className="flex items-center min-w-[calc(50%-0.375rem)] mt-2 mr-3">
                            <div className="flex items-start">
                                <div className="h-10 aspect-square rounded-full  mr-3 bg-overlay-2">
                                    {hide ? (
                                        ""
                                    ) : (
                                        <LazyLoadImage
                                            src={
                                                channel?.snippet?.thumbnails
                                                    ?.default?.url
                                            }
                                            alt=""
                                            className="h-full w-full rounded-full"
                                            onError={() => setHide(true)}
                                        />
                                    )}
                                </div>
                                <div className="flex flex-col">
                                    <div className="text-base -mt-[0.1rem] font-medium line-clamp-1">
                                        {video?.snippet?.channelTitle}
                                    </div>
                                    <div className="text-text-secondary mt-[0.0.5rem] text-xs">
                                        {numeral(
                                            channel?.statistics?.subscriberCount
                                        ).format("0.a")}{" "}
                                        subscribers
                                    </div>
                                </div>
                            </div>
                            <div className="mx-7 px-4 py-2 rounded-full bg-text-primary hover:bg-text-secondary select-none text-app-bg cursor-pointer font-medium">
                                Subscribe
                            </div>
                        </div>
                        <div className="select-none mt-1.5 flex gap-2 items-center justify-end app-xs:justify-start app-xs:mt-3 min-w-[calc(50%-0.375rem)] ">
                            <div className="flex items-center gap-1.5 bg-overlay-1 hover:bg-overlay-2 cursor-pointer pr-4 pl-2.5 py-1.5 rounded-full">
                                <SVGRenderer small src={like_icon} />
                                <span>
                                    {numeral(
                                        video?.statistics?.likeCount
                                    ).format("0.a")}
                                </span>
                                <div className="border self-stretch ml-2 mr-1.5 border-overlay-1"></div>
                                <SVGRenderer small src={dislike_icon} />
                            </div>
                            <div className="flex items-center gap-1.5 bg-overlay-1 hover:bg-overlay-2 cursor-pointer pr-4 pl-2.5 py-1.5 rounded-full">
                                <SVGRenderer small src={share_icon} />
                                <span>Share</span>
                            </div>
                            <div className="app-xxs:hidden app-xs:flex [@media(min-width:1254px)]:flex hidden items-center gap-1.5 bg-overlay-1 hover:bg-overlay-2 cursor-pointer pr-4 pl-2.5 py-1.5 rounded-full">
                                <SVGRenderer small src={save_icon} />
                                <span>Save</span>
                            </div>
                            <SVGRenderer
                                src={more_vert_icon}
                                small={true}
                                className="rotate-90 bg-overlay-1 hover:bg-overlay-2 cursor-pointer rounded-full p-1.5"
                            />
                        </div>
                    </div>
                    {/* Bottom */}
                    <div
                        className={`relative mt-3 rounded-lg w-full bg-overlay-1`}
                    >
                        {!showContent && (
                            <div
                                className="absolute bottom-3 right-3 font-semibold bg-[#272727] px-1 cursor-pointer select-none"
                                onClick={() => setShowContent(true)}
                            >
                                Show More
                            </div>
                        )}
                        <div className="p-3">
                            <div className="flex">
                                <div className="mr-1.5">
                                    {numeral(
                                        video?.statistics?.viewCount
                                    ).format("0.a")}{" "}
                                    views
                                </div>
                                <div className="mr-1.5">
                                    {moment(
                                        video?.snippet?.publishedAt
                                    ).fromNow()}
                                </div>
                                {/* <div className="text-text-secondary">
                                    UNITED STATES
                                </div> */}
                            </div>
                            <div className="text-app-blue">#hashtag</div>
                            <br />
                            <div
                                className={`overflow-y-hidden  overflow-x-hidden ${
                                    showContent
                                        ? ""
                                        : "max-h-5 overflow-y-hidden"
                                }`}
                            >
                                <div>{video?.snippet?.description}</div>
                                <div
                                    className="font-semibold cursor-pointer select-none"
                                    onClick={() => {
                                        setShowContent(false);
                                    }}
                                >
                                    Show Less
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default PlayerSectionMetaData;
