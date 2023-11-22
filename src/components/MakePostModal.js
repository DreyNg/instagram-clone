import React, { useContext, useState } from "react";
import ReactDom from "react-dom";
import CurrentUserContext from "../context/CurrentUserContext";

const MakePostModal = ({ closeModal }) => {
    const { currentUser } = useContext(CurrentUserContext);
    const [inputValue, setInputValue] = useState("");
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };
    return ReactDom.createPortal(
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-60">
            <div className="flex flex-col h-[400px] w-[710px] rounded-md overflow-hidden">
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
                <div className="bg-ig-grey-bg flex flex-row h-full">
                    <div className="w-1/2 bg-red-500">upload section</div>
                    <div className="w-1/2 p-4 flex flex-col">
                        <div className=" h-10 items-center flex">
                            <div className=" h-7 w-7 cursor-pointer rounded-full overflow-hidden">
                                <img
                                    src={currentUser.profilePicture}
                                    className="w-full h-auto"
                                />
                            </div>
                            <div className="text-white ml-4 font-semibold text-sm">
                                {currentUser.username}
                            </div>
                        </div>
                        <input
                            type="text"
                            className="placeholder-ig-grey flex-grow text-sm pt-1 outline-none border-none bg-transparent"
                            placeholder="Write a caption..."
                            value={inputValue}
                            onChange={handleInputChange}
                            style={{
                                color: "white",
                            }}
                        />
                        <div className="">footer</div>
                    </div>
                </div>
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
