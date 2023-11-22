import React from "react";
import ReactDom from "react-dom";

const MakePostModal = ({ closeModal }) => {
    return ReactDom.createPortal(
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
            <div className="bg-red-500 p-4 h-[460px] w-96 rounded-md">
                <p>This is the Make Post Modal</p>
                <button
                    className="bg-red-500 text-white px-3 py-1 rounded-md mt-4"
                    onClick={closeModal}
                >
                    Close
                </button>
            </div>
            {/* <div className="bg-ig-grey h-96 w-96 round-md">
                <div></div>
                <div></div>
            </div> */}
        </div>,
        document.getElementById("portal")
    );
};

export default MakePostModal;
