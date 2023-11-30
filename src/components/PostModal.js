import React, { useContext } from "react";
import ReactDOM from "react-dom";
import CurrentUserContext from "../context/CurrentUserContext";
import { createPost, uploadToImgur } from "../services/firebase";

const PostModal = ({ closeModal }) => {
    const { currentUser } = useContext(CurrentUserContext);

    return ReactDOM.createPortal(
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-60">
            <div className="flex h-[520px] bg-ig-blue overflow-hidden">
                <div className="bg-red-500 h-full flex items-center justify-center">
                    <img
                        src="https://images.pexels.com/photos/1459505/pexels-photo-1459505.jpeg?cs=srgb&dl=pexels-felix-mittermeier-1459505.jpg&fm=jpg"
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="bg-green-500 h-full w-[485px] flex items-center justify-center">
                    Caption
                </div>
            </div>
        </div>,
        document.getElementById("portal")
    );
};

export default PostModal;
