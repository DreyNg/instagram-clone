import React, { useContext } from "react";
import ReactDOM from "react-dom";
import CurrentUserContext from "../context/CurrentUserContext";
import { createPost, uploadToImgur } from "../services/firebase";

const PostModal = ({ closeModal, imageUrl }) => {
    const { currentUser } = useContext(CurrentUserContext);

    // const imageUrl = `
    // https://thumbs.dreamstime.com/b/vertical-panorama-country-road-9905521.jpg
    // `;
    // // const imageUrl = `
    // // https://images.unsplash.com/photo-1587387119725-9d6bac0f22fb?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG9yaXpvbnRhbHxlbnwwfHwwfHx8MA%3D%3D
    // // `;
    console.log(imageUrl);

    return ReactDOM.createPortal(
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-60">
            <div className="flex h-[520px] w-[970px] overflow-hidden">
                <div className="bg-red-500 h-full max-w-[485px] flex items-center justify-center">
                    <img src={imageUrl} className="h-fit w-fit object-cover" />
                </div>
                <div className="bg-green-500 h-full w-[485px] flex items-center justify-center">
                    Caption
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
