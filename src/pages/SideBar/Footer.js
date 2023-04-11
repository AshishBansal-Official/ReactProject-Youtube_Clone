const Footer = () => {
    const contentPrimary = [
        "About",
        "Press",
        "Copyright",
        "Contact us",
        "Creators",
        "Advertise",
        "Developers",
    ];
    const contentSecondary = [
        "Terms",
        "Privacy",
        "Policy & Safety",
        "How Youtube Clone Works",
        "Test new features",
    ];
    return (
        <div className="text-text-secondary leading-[1.125rem]">
            <div className="pt-4 px-6 flex flex-wrap">
                {contentPrimary.map((content, index) => {
                    return (
                        <span
                            key={index}
                            className="mr-2 text-[0.8125rem] font-medium"
                        >
                            {content}
                        </span>
                    );
                })}
            </div>
            <div className="pt-3 px-6 flex flex-wrap">
                {contentSecondary.map((content, index) => {
                    return (
                        <span
                            key={index}
                            className="mr-2 text-[0.8rem] font-medium"
                        >
                            {content}
                        </span>
                    );
                })}
            </div>
            <div className="py-4 px-6 text-text-disabled text-xs">
                &copy; 2023 Ashish Bansal
            </div>
        </div>
    );
};

export default Footer;
