import { SVGRenderer } from "./SVGRenderer";
import userAuth_icon from "../images/header/icons/user_auth_icon.svg";
import { useDispatch } from "react-redux";
import { loginUser } from "../services/redux/slices/authSlice";

const SignInButton = ({ className }) => {
    const dispatch = useDispatch();
    return (
        <div
            className={`border border-overlay-2 rounded-full px-4 py-[0.32rem] flex items-center justify-center ${className} hover:bg-app-blue/30 hover:border-transparent cursor-pointer`}
            onClick={() => {
                dispatch(loginUser());
            }}
        >
            <SVGRenderer src={userAuth_icon} className="mr-1.5 -ml-1.5" small />
            <span className="font-medium tracking-wide text-app-blue select-none whitespace-nowrap">
                Sign in
            </span>
        </div>
    );
};

export default SignInButton;
