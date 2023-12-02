import React, { useContext } from "react";
import ReactDOM from "react-dom";
import CurrentUserContext from "../context/CurrentUserContext";
import { createPost, uploadToImgur } from "../services/firebase";
import CommentPost from "./CommentPost";

const PostModal = ({
    closeModal,
    imageUrl,
    username,
    avatar,
    verified,
    formattedTimestamp,
}) => {
    const { currentUser } = useContext(CurrentUserContext);

    return ReactDOM.createPortal(
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-green-500 bg-opacity-60">
            <div className="items-center justify-center flex h-[90%] w-[80%] overflow-hidden">
                <div className="bg-black h-full max-w-[50%] flex items-center justify-center">
                    <img src={imageUrl} className="h-fit w-fit object-cover" />
                </div>
                <div className="h-full w-[50%] flex flex-col">
                    {/* header */}
                    <div className="px-2 h-16 bg-black border-b border-zinc-800 flex items-center ">
                        {/* Ava */}
                        <div className="p-1 flex-none cursor-pointer">
                            <div className="h-8 w-8 rounded-full overflow-hidden">
                                <img
                                    src={avatar}
                                    className="w-full h-auto"
                                    alt={`Avatar of `}
                                    // onClick={createPost}
                                />
                            </div>
                        </div>
                        {/* UserName */}
                        <div className="mx-3 flex items-center h-full flex-grow">
                            <div className="mr-2 text-white font-semibold text-sm cursor-pointer pb-1">
                                {username}
                            </div>
                            {verified && (
                                <svg
                                    aria-label="Verified"
                                    className="mr-1"
                                    fill="rgb(0, 149, 246)"
                                    height="12"
                                    role="img"
                                    viewBox="0 0 40 40"
                                    width="12"
                                >
                                    <title>Verified</title>
                                    <path
                                        d="M19.998 3.094 14.638 0l-2.972 5.15H5.432v6.354L0 14.64 3.094 20 0 25.359l5.432 3.137v5.905h5.975L14.638 40l5.36-3.094L25.358 40l3.232-5.6h6.162v-6.01L40 25.359 36.905 20 40 14.641l-5.248-3.03v-6.46h-6.419L25.358 0l-5.36 3.094Zm7.415 11.225 2.254 2.287-11.43 11.5-6.835-6.93 2.244-2.258 4.587 4.581 9.18-9.18Z"
                                        fill-rule="evenodd"
                                    ></path>
                                </svg>
                            )}
                        </div>
                        <svg
                            aria-label="More options"
                            fill="white"
                            height="24"
                            role="img"
                            viewBox="0 0 24 24"
                            width="24"
                        >
                            <title>More options</title>
                            <circle cx="12" cy="12" r="1.5"></circle>
                            <circle cx="6" cy="12" r="1.5"></circle>
                            <circle cx="18" cy="12" r="1.5"></circle>
                        </svg>
                    </div>

                    {/* comment section */}
                    <div className="bg-red-500 flex-grow p-2">
                        {/* comment section */}
                        <div className="bg-black mb-4">
                            {/* Comment content */}
                            <div className="flex flex-row">
                                {/* Ava */}
                                <div className="pr-3 flex-none cursor-pointer">
                                    <div className="h-8 w-8 rounded-full overflow-hidden">
                                        <img
                                            src={avatar}
                                            className="w-full h-auto"
                                            alt={`Avatar of `}
                                            // onClick={createPost}
                                        />
                                    </div>
                                </div>
                                {/* CMT content */}
                                <div className="text-white flex-grow overflow-hidden flex flex-col">
                                    {/*  CMT content */}
                                    <p className="text-sm mb-1">
                                        <span class="inline-flex items-baseline text-sm font-semibold">
                                            <span className="mr-1">
                                                Drey.ng
                                            </span>
                                            {verified && (
                                                <svg
                                                    aria-label="Verified"
                                                    className="mr-1"
                                                    fill="rgb(0, 149, 246)"
                                                    height="12"
                                                    role="img"
                                                    viewBox="0 0 40 40"
                                                    width="12"
                                                >
                                                    <title>Verified</title>
                                                    <path
                                                        d="M19.998 3.094 14.638 0l-2.972 5.15H5.432v6.354L0 14.64 3.094 20 0 25.359l5.432 3.137v5.905h5.975L14.638 40l5.36-3.094L25.358 40l3.232-5.6h6.162v-6.01L40 25.359 36.905 20 40 14.641l-5.248-3.03v-6.46h-6.419L25.358 0l-5.36 3.094Zm7.415 11.225 2.254 2.287-11.43 11.5-6.835-6.93 2.244-2.258 4.587 4.581 9.18-9.18Z"
                                                        fill-rule="evenodd"
                                                    ></path>
                                                </svg>
                                            )}
                                        </span>
                                        {/* aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa */}
                                        caption
                                    </p>
                                    {/* CMT time, like counts */}
                                    <div className="text-xs text-ig-grey flex">
                                        <div className="mr-3">9h</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <CommentPost
                            username={"username1"}
                            avatar={
                                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYAbdxO5KlG7ClKFO0oCNNefItucipE9Siz-FKYzTqoevtbdFDjUzGNSnwIyKZuX-OZJw&usqp=CAU"
                            }
                            verified={true}
                            commentContent={
                                "co2mmenttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt"
                            }
                        />
                    </div>

                    <div className="bg-black h-20 border-t border-zinc-800"></div>
                    <div className="bg-black h-14 border-t border-zinc-800"></div>
                </div>
            </div>
            <div
                className="absolute top-0 right-0 m-4 mr-9 cursor-pointer"
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
                        fill="white"
                        points="20.643 3.357 12 12 3.353 20.647"
                        stroke="white"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                    ></polyline>
                    <line
                        fill="white"
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
            </div>
        </div>,
        document.getElementById("portal")
    );
};

export default PostModal;
