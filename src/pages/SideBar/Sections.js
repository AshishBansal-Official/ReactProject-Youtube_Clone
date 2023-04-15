import { SVGRenderer } from "../../components/SVGRenderer";
import SignInButton from "../../components/SignInButton";

import home_outline from "../../images/sidebar/icons/home_outline.svg";
import home_filled from "../../images/sidebar/icons/home_filled.svg";
import shorts_outline from "../../images/sidebar/icons/shorts_outline.svg";
import shorts_filled from "../../images/sidebar/icons/shorts_filled.svg";
import subscriptions_outline from "../../images/sidebar/icons/subscriptions_outline.svg";
import subscriptions_filled from "../../images/sidebar/icons/subscriptions_filled.svg";

import library_outline from "../../images/sidebar/icons/library_outline.svg";
import library_filled from "../../images/sidebar/icons/library_filled.svg";
import history_outline from "../../images/sidebar/icons/history_outline.svg";
import history_filled from "../../images/sidebar/icons/history_filled.svg";

// Explore section
import trending_outline from "../../images/sidebar/explore/icons/trending_outline.svg";
import trending_filled from "../../images/sidebar/explore/icons/trending_filled.svg";
import shopping_outline from "../../images/sidebar/explore/icons/shopping_outline.svg";
import shopping_filled from "../../images/sidebar/explore/icons/shopping_filled.svg";
import music_outline from "../../images/sidebar/explore/icons/music_outline.svg";
import music_filled from "../../images/sidebar/explore/icons/music_filled.svg";
import movies_outline from "../../images/sidebar/explore/icons/movies_outline.svg";
import movies_filled from "../../images/sidebar/explore/icons/movies_filled.svg";
import live_outline from "../../images/sidebar/explore/icons/live_outline.svg";
import live_filled from "../../images/sidebar/explore/icons/live_filled.svg";
import gaming_outline from "../../images/sidebar/explore/icons/gaming_outline.svg";
import gaming_filled from "../../images/sidebar/explore/icons/gaming_filled.svg";
import news_outline from "../../images/sidebar/explore/icons/news_outline.svg";
import news_filled from "../../images/sidebar/explore/icons/news_filled.svg";
import sports_outline from "../../images/sidebar/explore/icons/sports_outline.svg";
import sports_filled from "../../images/sidebar/explore/icons/sports_filled.svg";
import learning_outline from "../../images/sidebar/explore/icons/learning_outline.svg";
import learning_filled from "../../images/sidebar/explore/icons/learning_filled.svg";
import fashion_and_beauty_outline from "../../images/sidebar/explore/icons/fashion_and_beauty_outline.svg";
import fashion_and_beauty_filled from "../../images/sidebar/explore/icons/fashion_and_beauty_filled.svg";

import browse_channels_icon from "../../images/sidebar/icons/browse_channels_icon.svg";

// More from YouTube section
import youtube_premium_icon from "../../images/sidebar/more/icons/youtube_premium_icon.svg";
import youtube_music_icon from "../../images/sidebar/more/icons/youtube_music_icon.svg";
import youtube_kids_icon from "../../images/sidebar/more/icons/youtube_kids_icon.svg";

import settings_icon from "../../images/sidebar/icons/settings_icon.svg";
import report_history_icon from "../../images/sidebar/icons/report_history_icon.svg";
import help_icon from "../../images/sidebar/icons/help_icon.svg";
import send_feedback_icon from "../../images/sidebar/icons/send_feedback_icon.svg";

const sectionsList = [
    {
        title: "",
        hasSections: true,
        sections: [
            {
                name: "Home",
                icon: home_outline,
                active_icon: home_filled,
            },
            {
                name: "Shorts",
                icon: shorts_outline,
                active_icon: shorts_filled,
            },
            {
                name: "Subscriptions",
                icon: subscriptions_outline,
                active_icon: subscriptions_filled,
            },
        ],
    },
    {
        title: "",
        hasSections: true,
        sections: [
            {
                name: "Library",
                icon: library_outline,
                active_icon: library_filled,
            },
            {
                name: "History",
                icon: history_outline,
                active_icon: history_filled,
            },
        ],
    },
    {
        title: "",
        hasSections: false,
        component: (
            <div className="px-4">
                <span>Sign in to like videos, comment, and subscribe.</span>
                <SignInButton className={"mt-3 w-fit"} />
            </div>
        ),
        sections: [],
    },
    {
        title: "Explore",
        hasSections: true,
        sections: [
            {
                name: "Trending",
                icon: trending_outline,
                active_icon: trending_filled,
            },
            {
                name: "Shopping",
                icon: shopping_outline,
                active_icon: shopping_filled,
            },
            {
                name: "Music",
                icon: music_outline,
                active_icon: music_filled,
            },
            {
                name: "Movies",
                icon: movies_outline,
                active_icon: movies_filled,
            },
            {
                name: "Live",
                icon: live_outline,
                active_icon: live_filled,
            },
            {
                name: "Gaming",
                icon: gaming_outline,
                active_icon: gaming_filled,
            },
            {
                name: "News",
                icon: news_outline,
                active_icon: news_filled,
            },
            {
                name: "Sports",
                icon: sports_outline,
                active_icon: sports_filled,
            },
            {
                name: "Learning",
                icon: learning_outline,
                active_icon: learning_filled,
            },
            {
                name: "Fashion & Beauty",
                icon: fashion_and_beauty_outline,
                active_icon: fashion_and_beauty_filled,
            },
        ],
    },
    {
        title: "",
        hasSections: true,
        sections: [
            {
                name: "Browse Channels",
                icon: browse_channels_icon,
            },
        ],
    },
    {
        title: "More from YouTube",
        hasSections: true,
        sections: [
            {
                name: "Youtube Premium",
                icon: youtube_premium_icon,
            },
            {
                name: "Youtube Music",
                icon: youtube_music_icon,
            },
            {
                name: "Youtube Kids",
                icon: youtube_kids_icon,
            },
        ],
    },
    {
        title: "",
        hasSections: true,
        sections: [
            {
                name: "Settings",
                icon: settings_icon,
            },
            {
                name: "Report history",
                icon: report_history_icon,
            },
            {
                name: "Help",
                icon: help_icon,
            },
            {
                name: "Send feedback",
                icon: send_feedback_icon,
            },
        ],
    },
];
const Sections = () => {
    return (
        <div className="w-full">
            {sectionsList.map((section, index) => {
                return (
                    <div key={index} className="">
                        {section.hasSections ? (
                            <div className="p-3 border-b-[1.5px] border-b-overlay-2">
                                {section.title && (
                                    <div className="text-base font-normal px-3 pt-1.5 pb-1">
                                        {section.title}
                                    </div>
                                )}
                                {section?.sections?.map((tile) => {
                                    return (
                                        <div
                                            key={tile.name}
                                            className="flex items-center justify-start px-1 rounded-lg"
                                        >
                                            <SVGRenderer
                                                src={tile.icon}
                                                className="mr-4"
                                            />
                                            <span>{tile.name}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        ) : (
                            <div
                                key="section.name"
                                className="p-4 border-b-[1.5px] border-b-overlay-2"
                            >
                                {section.component}
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default Sections;
