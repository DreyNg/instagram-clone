import React, { useContext, useEffect, useState } from "react";
import ReactDom from "react-dom";
import CurrentUserContext from "../context/CurrentUserContext";
import UserCard from "./UserCard";
import { getLikeList } from "../services/firebase";
import { handleFollowUser, handleUnfollowUser } from "../services/firebase";

const SettingModal = ({ closeModal }) => {
    // const { currentUser } = useContext(CurrentUserContext);

    return ReactDom.createPortal(
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-60">
            <div className="flex flex-col h-[150px] w-[300px] rounded-lg overflow-hidden">
                <div className="items-center justify-center text-gray-300 cursor-pointer hover:bg-zinc-700 flex bg-ig-grey-bg h-1/3 pb-1 border-zinc-600 border-b items-center">
                    Setting
                </div>
                <div
                    className="items-center justify-center text-gray-300 cursor-pointer hover:bg-zinc-700 flex bg-ig-grey-bg h-1/3 pb-1 border-zinc-600 border-b items-center"
                    onClick={() => {
                        localStorage.removeItem("userId");
                        window.location.reload();
                    }}
                >
                    Log out
                </div>
                <div
                    className="items-center justify-center text-gray-300 cursor-pointer hover:bg-zinc-700 flex bg-ig-grey-bg h-1/3 pb-1 border-zinc-600 border-b items-center"
                    onClick={closeModal}
                >
                    Cancel
                </div>
            </div>
        </div>,
        document.getElementById("portal")
    );
};

export default SettingModal;
