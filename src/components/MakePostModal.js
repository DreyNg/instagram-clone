import React from "react";

const MakePostModal = ({ closeModal }) => {
    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
            <div className="bg-white p-4 rounded-md">
                <p>This is the Make Post Modal</p>
                <button
                    className="bg-red-500 text-white px-3 py-1 rounded-md mt-4"
                    onClick={closeModal}
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default MakePostModal;
