import React, { useContext, useState } from "react";
import ReactDom from "react-dom";
import CurrentUserContext from "../context/CurrentUserContext";

const MakePostModal = ({ closeModal }) => {
    const { currentUser } = useContext(CurrentUserContext);
    const [inputValue, setInputValue] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);
    };
    return ReactDom.createPortal(
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-60">
            <div className="flex flex-col h-[400px] w-[710px] rounded-lg overflow-hidden">
                <div className="flex bg-ig-grey-bg h-12 pb-1 border-zinc-600 border-b items-center">
                    <div className="flex-none pl-5 mt-1">
                        <svg
                            aria-label="Back"
                            fill="white"
                            height="20"
                            role="img"
                            viewBox="0 0 24 24"
                            width="20"
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
                <div className="bg-ig-grey-bg flex overflow-hidden flex-row h-full ">
                    <div className="w-1/2 bg-ig-grey-bg items-center justify-center border-r border-zinc-600  flex flex-col">
                        {selectedFile ? (
                            <div className="overflow-hidden">
                                <img
                                    src={URL.createObjectURL(selectedFile)}
                                    alt="Selected"
                                    className="w-full h-auto"
                                />
                            </div>
                        ) : (
                            <div className="items-center justify-center flex flex-col">
                                <svg
                                    aria-label="Icon to represent media such as images or videos"
                                    class="x1lliihq x1n2onr6 x5n08af"
                                    fill="white"
                                    height="77"
                                    role="img"
                                    viewBox="0 0 97.6 77.3"
                                    width="96"
                                >
                                    <title>
                                        Icon to represent media such as images
                                        or videos
                                    </title>
                                    <path
                                        d="M16.3 24h.3c2.8-.2 4.9-2.6 4.8-5.4-.2-2.8-2.6-4.9-5.4-4.8s-4.9 2.6-4.8 5.4c.1 2.7 2.4 4.8 5.1 4.8zm-2.4-7.2c.5-.6 1.3-1 2.1-1h.2c1.7 0 3.1 1.4 3.1 3.1 0 1.7-1.4 3.1-3.1 3.1-1.7 0-3.1-1.4-3.1-3.1 0-.8.3-1.5.8-2.1z"
                                        fill="white"
                                    ></path>
                                    <path
                                        d="M84.7 18.4 58 16.9l-.2-3c-.3-5.7-5.2-10.1-11-9.8L12.9 6c-5.7.3-10.1 5.3-9.8 11L5 51v.8c.7 5.2 5.1 9.1 10.3 9.1h.6l21.7-1.2v.6c-.3 5.7 4 10.7 9.8 11l34 2h.6c5.5 0 10.1-4.3 10.4-9.8l2-34c.4-5.8-4-10.7-9.7-11.1zM7.2 10.8C8.7 9.1 10.8 8.1 13 8l34-1.9c4.6-.3 8.6 3.3 8.9 7.9l.2 2.8-5.3-.3c-5.7-.3-10.7 4-11 9.8l-.6 9.5-9.5 10.7c-.2.3-.6.4-1 .5-.4 0-.7-.1-1-.4l-7.8-7c-1.4-1.3-3.5-1.1-4.8.3L7 49 5.2 17c-.2-2.3.6-4.5 2-6.2zm8.7 48c-4.3.2-8.1-2.8-8.8-7.1l9.4-10.5c.2-.3.6-.4 1-.5.4 0 .7.1 1 .4l7.8 7c.7.6 1.6.9 2.5.9.9 0 1.7-.5 2.3-1.1l7.8-8.8-1.1 18.6-21.9 1.1zm76.5-29.5-2 34c-.3 4.6-4.3 8.2-8.9 7.9l-34-2c-4.6-.3-8.2-4.3-7.9-8.9l2-34c.3-4.4 3.9-7.9 8.4-7.9h.5l34 2c4.7.3 8.2 4.3 7.9 8.9z"
                                        fill="white"
                                    ></path>
                                    <path
                                        d="M78.2 41.6 61.3 30.5c-2.1-1.4-4.9-.8-6.2 1.3-.4.7-.7 1.4-.7 2.2l-1.2 20.1c-.1 2.5 1.7 4.6 4.2 4.8h.3c.7 0 1.4-.2 2-.5l18-9c2.2-1.1 3.1-3.8 2-6-.4-.7-.9-1.3-1.5-1.8zm-1.4 6-18 9c-.4.2-.8.3-1.3.3-.4 0-.9-.2-1.2-.4-.7-.5-1.2-1.3-1.1-2.2l1.2-20.1c.1-.9.6-1.7 1.4-2.1.8-.4 1.7-.3 2.5.1L77 43.3c1.2.8 1.5 2.3.7 3.4-.2.4-.5.7-.9.9z"
                                        fill="white"
                                    ></path>
                                </svg>
                                <div className="text-white text-xl my-3">
                                    Drag photos here
                                </div>
                                <label
                                    htmlFor="fileInput"
                                    className="text-center cursor-pointer justify-center text-sm mt-2 bg-ig-blue py-1 pb-1 w-[180px] text-white rounded-lg font-medium"
                                >
                                    <input
                                        type="file"
                                        accept="image/*"
                                        id="fileInput"
                                        className="hidden"
                                        onChange={handleFileChange}
                                    />
                                    Select from computer
                                </label>
                            </div>
                        )}
                    </div>
                    <div className="w-1/2 p-4 flex flex-col">
                        <div className=" h-10 items-center flex">
                            <div className=" h-8 w-8 cursor-pointer rounded-full overflow-hidden">
                                <img
                                    src={currentUser.profilePicture}
                                    className="w-full h-auto"
                                />
                            </div>
                            <div className="text-white ml-4 font-semibold">
                                {currentUser.username}
                            </div>
                        </div>
                        <textarea
                            type="text"
                            className="placeholder-ig-grey mt-2 h-full pt-1 overflow-auto outline-none border-none bg-transparent"
                            placeholder="Write a caption..."
                            value={inputValue}
                            onChange={handleInputChange}
                            maxlength="500"
                            style={{
                                color: "white",
                                resize: "none", // Disable resizing
                            }}
                        />

                        <div className="text-ig-grey text-xs">
                            {inputValue.length}/500
                        </div>
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
