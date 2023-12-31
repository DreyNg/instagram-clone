import React, { useContext, useState } from "react";
import ReactDom from "react-dom";
import CurrentUserContext from "../context/CurrentUserContext";
import { createPost, uploadToImgur } from "../services/firebase";

const MakePostModal = ({ closeModal }) => {
    const { currentUser } = useContext(CurrentUserContext);
    const [postCaption, setPostCaption] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);

    const [loading, setLoading] = useState(false);
    const handleInputChange = (e) => {
        setPostCaption(e.target.value);
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];

        setSelectedFile(file);
    };

    const handleShareClick = async () => {
        if (selectedFile) {
            setLoading(true);
            try {
                // Handle the response as needed
                await createPost(
                    currentUser.userId,
                    postCaption,
                    selectedFile,
                    currentUser.verified,
                    currentUser.username,
                    currentUser.profilePicture
                );

                closeModal();
            } catch (error) {
                console.error("Error uploading image", error);
                alert(error);
                // Handle errors
            }
        } else {
            // Handle case when no file is selected
        }
    };
    return ReactDom.createPortal(
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-60">
            <div className="flex flex-col h-[400px] w-[710px] rounded-lg overflow-hidden">
                <div className="flex bg-ig-grey-bg h-12 pb-1 border-zinc-600 border-b items-center">
                    <div
                        className="flex-none pl-5 mt-1 cursor-pointer"
                        onClick={closeModal}
                    >
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
                    <div className="mr-4">
                        {loading ? (
                            <div role="status">
                                <svg
                                    aria-hidden="true"
                                    class=" inline w-5 h-5 text-gray-200 animate-spin dark:text-gray-600 fill-ig-blue"
                                    viewBox="0 0 100 101"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                        fill="currentFill"
                                    />
                                </svg>
                                <span class="sr-only">Loading...</span>
                            </div>
                        ) : (
                            <div
                                className=" text-ig-blue hover:text-blue-600 font-semibold cursor-pointer"
                                onClick={handleShareClick}
                            >
                                Share
                            </div>
                        )}
                    </div>
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
                                    className="text-center cursor-pointer justify-center text-sm mt-2 hover:bg-blue-600 bg-ig-blue py-1 pb-1 w-[180px] text-white rounded-lg font-medium"
                                >
                                    <input
                                        type="file"
                                        accept="image/*"
                                        id="fileInput"
                                        className="hidden "
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
                            value={postCaption}
                            onChange={handleInputChange}
                            maxlength="500"
                            style={{
                                color: "white",
                                resize: "none", // Disable resizing
                            }}
                        />

                        <div className="text-ig-grey text-xs">
                            {postCaption.length}/500
                        </div>
                    </div>
                </div>
            </div>
        </div>,
        document.getElementById("portal")
    );
};

export default MakePostModal;
