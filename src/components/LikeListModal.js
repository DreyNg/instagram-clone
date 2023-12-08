import React, { useContext, useEffect, useState } from "react";
import ReactDom from "react-dom";
import CurrentUserContext from "../context/CurrentUserContext";
import UserCard from "./UserCard";
import { getLikeList } from "../services/firebase";
import { handleFollowUser, handleUnfollowUser } from "../services/firebase";

const LikeListModal = ({ closeModal, postId }) => {
    const { currentUser } = useContext(CurrentUserContext);
    const [likeList, setLikeList] = useState([]);

    useEffect(() => {
        async function fetchLikes() {
            try {
                setLikeList(
                    await getLikeList(
                        postId,
                        currentUser.following,
                        currentUser.userId
                    )
                );
            } catch (error) {
                alert(error);
            }
        }

        if (currentUser) {
            fetchLikes();
        }
    }, []);
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
                    {likeList[0] &&
                        likeList[0].length > 0 &&
                        likeList[0].map((e, innerIndex) => (
                            <UserCard
                                key={innerIndex}
                                avatarSrc={e.profilePicture}
                                username={e.username}
                                userId={e.userId}
                                subtitle={e.fullname}
                            />
                        ))}
                    {likeList[1] &&
                        likeList[1].length > 0 &&
                        likeList[1].map((e, innerIndex) => (
                            <UserCard
                                key={innerIndex}
                                avatarSrc={e.profilePicture}
                                username={e.username}
                                userId={e.userId}
                                buttonFn1={() =>
                                    handleUnfollowUser(
                                        currentUser.userId,
                                        e.userId
                                    )
                                }
                                buttonFn2={() =>
                                    handleFollowUser(
                                        currentUser.userId,
                                        e.userId
                                    )
                                }
                                subtitle={e.fullname}
                                buttonFirst={(onClick) => (
                                    <button
                                        className="text-white bg-[#383434] py-2 px-6 rounded-lg mr-3 text-xs font-semibold cursor-pointer"
                                        onClick={onClick}
                                    >
                                        Following
                                    </button>
                                )}
                                buttonAfter={(onClick) => (
                                    <button
                                        className="text-white bg-ig-blue py-2 px-6 rounded-lg mr-3 text-xs font-semibold cursor-pointer"
                                        onClick={onClick}
                                    >
                                        Follow
                                    </button>
                                )}
                            />
                        ))}
                    {likeList[2] &&
                        likeList[2].length > 0 &&
                        likeList[2].map((e, innerIndex) => (
                            <UserCard
                                key={innerIndex}
                                avatarSrc={e.profilePicture}
                                username={e.username}
                                userId={e.userId}
                                subtitle={e.fullname}
                                buttonFn1={() =>
                                    handleFollowUser(
                                        currentUser.userId,
                                        e.userId
                                    )
                                }
                                buttonFn2={() =>
                                    handleUnfollowUser(
                                        currentUser.userId,
                                        e.userId
                                    )
                                }
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
                        ))}
                </div>
            </div>
        </div>,
        document.getElementById("portal")
    );
};

export default LikeListModal;
