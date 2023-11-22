import React from "react";
import ReactDom from "react-dom";

const MakePostModal = ({ closeModal }) => {
    return ReactDom.createPortal(
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-60">
            <div className="flex flex-col h-[400px] w-[710px] rounded-md">
                <div className="flex bg-ig-grey-bg h-12 border-zinc-600 border-b items-center">
                    <div className="flex-none pl-5 mt-1">
                        <svg
                            aria-label="Back"
                            fill="white"
                            height="24"
                            role="img"
                            viewBox="0 0 24 24"
                            width="24"
                        >
                            <title>Back</title>
                            <line
                                fill="none"
                                stroke="white"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                x1="2.909"
                                x2="22.001"
                                y1="12.004"
                                y2="12.004"
                            ></line>
                            <polyline
                                fill="none"
                                points="9.276 4.726 2.001 12.004 9.276 19.274"
                                stroke="white"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                            ></polyline>
                        </svg>
                    </div>
                    <div className="flex-grow text-white text-center font-semibold">
                        Create new post
                    </div>
                    <div className="pr-5 text-ig-blue font-semibold">Share</div>
                </div>
                <div className="bg-ig-grey-bg h-full"></div>
                <button
                    className="text-white fixed top-3 right-8 text-xl"
                    onClick={closeModal}
                >
                    <svg
                        aria-label="Close"
                        class="x1lliihq x1n2onr6 x9bdzbf"
                        fill="white"
                        height="18"
                        role="img"
                        viewBox="0 0 24 24"
                        width="18"
                    >
                        <title>Close</title>
                        <polyline
                            fill="none"
                            points="20.643 3.357 12 12 3.353 20.647"
                            stroke="white"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="3"
                        ></polyline>
                        <line
                            fill="none"
                            stroke="white"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="3"
                            x1="20.649"
                            x2="3.354"
                            y1="20.649"
                            y2="3.354"
                        ></line>
                    </svg>
                </button>
            </div>
        </div>,
        document.getElementById("portal")
    );
};

export default MakePostModal;
