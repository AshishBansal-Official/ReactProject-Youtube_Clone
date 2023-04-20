import { useState } from "react";
import { SVGRenderer } from "../../components/SVGRenderer";

import like_icon from "../../images/watch/icons/like_icon.svg";
import dislike_icon from "../../images/watch/icons/dislike_icon.svg";
import comments_reply_show_icon from "../../images/watch/icons/comments_reply_show_icon.svg";

const Comment = () => {
    const [hide, setHide] = useState(false);

    return (
        <div className="flex flex-col mb-4 items-start">
            <div className="flex">
                <div className="h-10 aspect-square rounded-full mr-4 bg-overlay-2">
                    {hide ? (
                        ""
                    ) : (
                        <img
                            src={""}
                            alt=""
                            className="h-full w-full rounded-full"
                            onError={() => setHide(true)}
                        />
                    )}
                </div>
                <div>
                    <div className="flex items-center mb-0.5 -mt-[0.2rem]">
                        <div className="mr-1 text-[0.8125rem] font-semibold">
                            GJK music
                        </div>
                        <div className="text-text-secondary text-xs">
                            1 month ago
                        </div>
                    </div>
                    <div>
                        Arijit Singh is not just a word, it's emotion for
                        millions of people across the world{" "}
                    </div>
                    <div className="flex items-center justify-start mt-1.5 -ml-2">
                        <SVGRenderer
                            small
                            src={like_icon}
                            className="ml-0 p-1 cursor-pointer rounded-full hover:bg-overlay-2"
                        />
                        <div className="text-xs text-text-secondary mr-2">
                            112
                        </div>
                        <SVGRenderer
                            small
                            src={dislike_icon}
                            className="ml-0 p-1 cursor-pointer rounded-full hover:bg-overlay-2"
                        />
                        <div className="text-xs font-semibold ml-2 hover:bg-overlay-2 cursor-pointer py-2 px-3 rounded-full">
                            Reply
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="flex items-center pl-3 pr-4 py-1.5 ml-11 select-none cursor-pointer text-app-blue hover:bg-app-blue/30 rounded-full">
                    <SVGRenderer small src={comments_reply_show_icon} />
                    <div className="pl-1.5">3 replies</div>
                </div>
            </div>
        </div>
    );
};

export default Comment;
