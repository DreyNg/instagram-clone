import React, { useContext } from "react";
import ReactDOM from "react-dom";
import CurrentUserContext from "../context/CurrentUserContext";
import { createPost, uploadToImgur } from "../services/firebase";

const PostModal = ({ closeModal, imageUrl }) => {
    const { currentUser } = useContext(CurrentUserContext);

    return ReactDOM.createPortal(
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-60">
            <div className="flex h-[520px] w-[970px] overflow-hidden">
                <div className="bg-red-500 h-full max-w-[485px] flex items-center justify-center">
                    <img src={imageUrl} className="h-fit w-fit object-cover" />
                </div>
                <div className="bg-green-500 h-full w-[485px] flex flex-col">
                    <div className="h-16 bg-black  border-b border-zinc-800">
                        u
                    </div>

                    <div className="bg-black flex-grow">cm</div>

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
