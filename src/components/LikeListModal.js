import React, { useContext, useState } from "react";
import ReactDom from "react-dom";
import CurrentUserContext from "../context/CurrentUserContext";
import UserCard from "./UserCard";

const LikeListModal = ({ closeModal }) => {
    const { currentUser } = useContext(CurrentUserContext);
    return ReactDom.createPortal(
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-60">
            <div className="flex flex-col h-[80%] w-[35%] rounded-lg overflow-hidden">
                <div className="flex bg-ig-grey-bg h-[10%] pb-1 border-zinc-600 border-b items-center">
                    <div
                        className="absolute pl-5 mt-1 cursor-pointer"
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
                        Likes
                    </div>
                </div>
                <div className="p-2 bg-ig-grey-bg flex flex-col overflow-auto  h-full ">
                    <UserCard
                        avatarSrc={
                            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
                        }
                        username={"user.username"}
                        subtitle={"key"}
                        userId={"user.userId"}
                        buttonFn1={() => {}}
                        buttonFn2={() => {}}
                        buttonFirst={(onClick) => (
                            <button
                                className="text-white bg-ig-blue py-2 px-6 rounded-lg mr-3 text-xs font-semibold cursor-pointer"
                                onClick={onClick}
                            >
                                Follow
                            </button>
                        )}
                        buttonAfter={(onClick) => (
                            <button
                                className="text-white bg-[#383434] py-2 px-6 rounded-lg mr-3 text-xs font-semibold cursor-pointer"
                                onClick={onClick}
                            >
                                Following
                            </button>
                        )}
                    />
                </div>
            </div>
        </div>,
        document.getElementById("portal")
    );
};

export default LikeListModal;
