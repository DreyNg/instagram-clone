import React from "react";
import ReactDom from "react-dom";
import { Link } from "react-router-dom";

const StoryModal = ({
    closeModal,
    username,
    avatar,
    timestamp,
    verified,
    imgUrl,
}) => {
    return ReactDom.createPortal(
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-60">
            {/* close button */}
            <div
                className="absolute top-0 right-0 m-4 mr-9 cursor-pointer"
                onClick={() => closeModal()}
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
            <div className="flex flex-col h-[95%] w-[25%] rounded-lg overflow-hidden bg-black">
                <div className="flex absolute items-center px-3 mt-3">
                    <Link to={`/p/${username}`}>
                        <div className="h-10 w-10 rounded-full overflow-hidden flex items-center justify-center ">
                            <img
                                src={avatar}
                                className="w-full h-auto"
                                alt={`Avatar of ${username}`}
                            />
                        </div>
                    </Link>
                    <Link to={`/p/${username}`}>
                        <div className="mx-2 text-white text-sm font-semibold">
                            {username}
                        </div>
                    </Link>
                    <div className="">
                        {verified && (
                            <svg
                                aria-label="Verified"
                                fill="white"
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

                    <div className="mx-2 text-ig-grey text-sm font-semibold">
                        {timestamp}
                    </div>
                </div>
                <div className="flex items-center justify-center h-full">
                    <img className="max-h-full" src={imgUrl} />
                </div>
            </div>
        </div>,
        document.getElementById("portal")
    );
};

export default StoryModal;
