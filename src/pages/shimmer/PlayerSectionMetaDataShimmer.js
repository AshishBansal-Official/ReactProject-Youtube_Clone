const PlayerSectionMetaDataShimmer = () => {
    return (
        <>
            <div className="flex flex-col mt-1 -ml-0.5 app-xs:mt-2.5 app-xs:ml-1 mb-6">
                <div className="mt-4">
                    <div className="mt-0.5 mb-2.5 h-5 w-[45%] bg-overlay-1 rounded-lg"></div>
                    <div className="flex items-center justify-between">
                        <div className="mt-0.5 h-5 w-[22%] bg-overlay-1 rounded-lg"></div>
                        <div className="flex mr-2 gap-5">
                            <div className="bg-overlay-1 rounded-full h-5 w-5"></div>
                            <div className="bg-overlay-1 rounded-full h-5 w-5"></div>
                            <div className="bg-overlay-1 rounded-full h-5 w-5"></div>
                            <div className="bg-overlay-1 rounded-full h-5 w-5"></div>
                            <div className="bg-overlay-1 rounded-full h-5 w-5"></div>
                        </div>
                    </div>
                </div>
                <hr className="border-overlay-1 mt-5 mb-3.5" />
                <div className="flex items-center justify-between">
                    <div className="flex items-center w-full">
                        <div className="bg-overlay-1 rounded-full h-12 w-12 mr-4"></div>
                        <div className="flex flex-col w-full gap-2.5">
                            <div className="mt-0.5 h-5 w-[30%] bg-overlay-1 rounded-lg"></div>
                            <div className="mt-0.5 h-5 w-[30%] bg-overlay-1 rounded-lg"></div>
                        </div>
                    </div>
                    <div className="bg-overlay-1 rounded-md h-9 w-[20%] mr-2"></div>
                </div>
            </div>
        </>
    );
};

export default PlayerSectionMetaDataShimmer;
