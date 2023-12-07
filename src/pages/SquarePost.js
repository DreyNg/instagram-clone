import { useContext, useState } from "react";

import { calculateTimeDifference } from "../services/helper";
import PostModal from "../components/PostModal";

export default function SquarePost({
    captionText,
    avatar,
    username,
    verified,
    imageUrl,
    timestamp,
    commentList,
    postId,
    likes,
}) {
    const [likeList, setLikeList] = useState(likes);

    const formattedTimestamp = calculateTimeDifference(timestamp);

    const [openPostModal, setOpenPostModal] = useState(false);
    const handleOpenPostModal = () => {
        setOpenPostModal(true);
    };

    const handleClosePostModal = () => {
        setOpenPostModal(false);
        console.log(openPostModal);
    };

    return (
        <div className="w-full h-full">
            <div
                className="relative w-full h-full"
                onClick={handleOpenPostModal}
            >
                <img src={imageUrl} className="w-full h-full object-cover" />
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-0 opacity-0 transition-opacity duration-300 flex items-center justify-center text-white text-center hover:bg-opacity-70 hover:opacity-100">
                    <div className="flex">
                        <div className="flex font-semibold">
                            <svg
                                aria-label="Unlike"
                                class="mr-2 "
                                fill="white"
                                height="22"
                                role="img"
                                viewBox="0 0 48 48"
                                width="22"
                            >
                                <title>Unlike</title>
                                <path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                            </svg>{" "}
                            {likes.length}
                        </div>
                        <div className="flex font-semibold">
                            <svg
                                aria-label="Comment"
                                class="ml-6 mr-2"
                                fill="white"
                                height="22"
                                role="img"
                                viewBox="0 0 24 24"
                                width="22"
                            >
                                <title>Comment</title>
                                <path
                                    d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z"
                                    fill="white"
                                    stroke="white"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                ></path>
                            </svg>
                            {commentList.length}
                        </div>
                    </div>
                </div>
            </div>
            {openPostModal && (
                <PostModal
                    closeModal={handleClosePostModal}
                    imageUrl={imageUrl}
                    avatar={avatar}
                    username={username}
                    verified={verified}
                    formattedTimestamp={formattedTimestamp}
                    captionText={captionText}
                    postId={postId}
                    likeList={likeList}
                    setLikeList={setLikeList}
                />
            )}
        </div>
    );
}
