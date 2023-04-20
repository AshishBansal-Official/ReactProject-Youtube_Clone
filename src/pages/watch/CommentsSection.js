import { SVGRenderer } from "../../components/SVGRenderer";

import sort_icon from "../../images/watch/icons/sort_icon.svg";
import comments_user_icon from "../../images/watch/icons/comments_user_icon.png";

import Comment from "./Comment";

const CommentsSection = () => {
    return (
        <div>
            <div className="flex flex-col pb-8">
                <div className="flex pb-6 items-center">
                    <div className="pr-8 text-base">433 Comments</div>
                    <div className="flex">
                        <SVGRenderer small src={sort_icon} className="pr-2" />
                        <div className="font-medium">Sort by</div>
                    </div>
                </div>
                <div className="flex">
                    <img
                        src={comments_user_icon}
                        alt=""
                        className="rounded-full mr-4"
                    />
                    <div className="flex-grow mr-4">
                        <form className="group">
                            <input
                                type="text"
                                placeholder="Add a comment..."
                                className="bg-transparent outline-none mb-1 w-full"
                            />
                            <hr className="bg-overlay-1 border-overlay-1 group-focus-within:border-white group-focus-within:border border-b-"></hr>
                        </form>
                    </div>
                </div>
            </div>
            <div>
                <Comment />
                <Comment />
                <Comment />
                <Comment />
            </div>
        </div>
    );
};

export default CommentsSection;
