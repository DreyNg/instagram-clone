import React, { useContext } from "react";
import ReactDOM from "react-dom";
import CurrentUserContext from "../context/CurrentUserContext";
import { createPost, uploadToImgur } from "../services/firebase";

const PostModal = ({ closeModal }) => {
    const { currentUser } = useContext(CurrentUserContext);

    const picture = `
    https://thumbs.dreamstime.com/b/vertical-panorama-country-road-9905521.jpg
    `;
    // const picture = `
    // https://images.unsplash.com/photo-1587387119725-9d6bac0f22fb?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG9yaXpvbnRhbHxlbnwwfHwwfHx8MA%3D%3D
    // `;

    return ReactDOM.createPortal(
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-60">
            <div className="flex h-[520px] w-[970px] overflow-hidden">
                <div className="bg-red-500 h-full max-w-[485px] flex items-center justify-center">
                    <img src={picture} className="h-fit w-fit object-cover" />
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
