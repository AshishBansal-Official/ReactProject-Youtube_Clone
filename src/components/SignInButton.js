import { SVGRenderer } from "./SVGRenderer";
import userAuth_icon from "../images/header/icons/user_auth_icon.svg";

const SignInButton = ({ className }) => {
    return (
        <div
            className={`border border-overlay-2 rounded-full px-4 py-[0.32rem] flex items-center justify-center ${className}`}
        >
            <SVGRenderer src={userAuth_icon} className="mr-1.5 -ml-1.5" small />
            <span className="font-medium tracking-wide text-[#3EA6FF]">
                Sign in
            </span>
        </div>
    );
};

export default SignInButton;
