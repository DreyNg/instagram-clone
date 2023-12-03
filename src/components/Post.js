import { useContext, useState } from "react";
import {
    createComment,
    createPost,
    handleLikePost,
    handleUnlikePost,
} from "../services/firebase";
import { calculateTimeDifference } from "../services/helper";
import PostModal from "./PostModal";
import CurrentUserContext from "../context/CurrentUserContext";

export default function Post({
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
    const { currentUser } = useContext(CurrentUserContext);

    const [showFullCaption, setShowFullCaption] = useState(false);
    const [likeList, setLikeList] = useState(likes);
    const [commentText, setCommentText] = useState("");
    const handleInputChange = (e) => {
        setCommentText(e.target.value);
    };
    const toggleCaption = () => {
        setShowFullCaption(!showFullCaption);
    };

    // const captionText = "sssssss"; // Your caption text goes here
    const shouldTruncate = captionText.length > 20;
    const truncatedCaption = shouldTruncate
        ? captionText.slice(0, 20) + "..."
        : captionText;

    const displayedCaption = showFullCaption ? captionText : truncatedCaption;
    const displayMore = shouldTruncate && !showFullCaption;

    const formattedTimestamp = calculateTimeDifference(timestamp);

    const [openPostModal, setOpenPostModal] = useState(false);
    const handleOpenPostModal = () => {
        setOpenPostModal(true);
    };

    const handleClosePostModal = () => {
        setOpenPostModal(false);
    };
    const handleLikeButtonClick = async () => {
        // Make sure to create a new array and update the state instead of directly mutating the likeList array
        try {
            await handleLikePost(
                postId,
                currentUser.userId,
                currentUser.username,
                currentUser.profilePicture,
                currentUser.verified,
                likeList
            );
            setLikeList((prevLikes) => [...prevLikes, currentUser.userId]);
        } catch (error) {
            console.error("Error liking post", error);
            // alert(error);
            // Handle errors
        }
    };

    const handleUnlikeButtonClick = async () => {
        // Update the state by filtering out the current user's ID from likeList
        try {
            await handleUnlikePost(postId, currentUser.userId, likeList);
            setLikeList((prevLikes) =>
                prevLikes.filter((userId) => userId !== currentUser.userId)
            );
        } catch (error) {
            console.error("Error liking post", error);
            // alert(error);
            // Handle errors
        }
    };

    const handleCreateComment = async () => {
        if (commentText) {
            try {
                // // Handle the response as needed
                await createComment(
                    postId,
                    currentUser.userId,
                    currentUser.username,
                    currentUser.profilePicture,
                    currentUser.verified,
                    commentText
                );
                setCommentText("");
                commentList.push(commentText);
            } catch (error) {
                console.error("Error uploading image", error);
                alert(error);
                // Handle errors
            }
        } else {
            // Handle case when no file is selected
        }
    };

    return (
        <div className="mb-4 pb-4 border-b border-zinc-800">
            {/* header */}
            <div className="flex items-center h-14">
                {/* Ava */}
                <div className="p-1 flex-none cursor-pointer">
                    <div className="h-8 w-8 rounded-full overflow-hidden">
                        <img
                            src={avatar}
                            className="w-full h-auto"
                            alt={`Avatar of `}
                            onClick={handleCreateComment}
                        />
                    </div>
                </div>
                {/* UserName */}
                <div className="mx-2  flex items-center h-full flex-grow">
                    <div className="mr-1 text-white font-semibold text-sm cursor-pointer pb-1">
                        {username}
                    </div>
                    {verified && (
                        <svg
                            aria-label="Verified"
                            className="mr-1"
                            fill="rgb(0, 149, 246)"
                            height="12"
                            role="img"
                            viewBox="0 0 40 40"
                            width="12"
                        >
                            <title>Verified</title>
                            <path
                                d="M19.998 3.094 14.638 0l-2.972 5.15H5.432v6.354L0 14.64 3.094 20 0 25.359l5.432 3.137v5.905h5.975L14.638 40l5.36-3.094L25.358 40l3.232-5.6h6.162v-6.01L40 25.359 36.905 20 40 14.641l-5.248-3.03v-6.46h-6.419L25.358 0l-5.36 3.094Zm7.415 11.225 2.254 2.287-11.43 11.5-6.835-6.93 2.244-2.258 4.587 4.581 9.18-9.18Z"
                                fill-rule="evenodd"
                            ></path>
                        </svg>
                    )}

                    <div className="text-ig-grey cursor-pointer">•</div>
                    <div className="text-ig-grey mx-1  text-sm cursor-pointer ">
                        {formattedTimestamp}
                    </div>
                </div>
                <svg
                    aria-label="More options"
                    fill="white"
                    height="24"
                    role="img"
                    viewBox="0 0 24 24"
                    width="24"
                >
                    <title>More options</title>
                    <circle cx="12" cy="12" r="1.5"></circle>
                    <circle cx="6" cy="12" r="1.5"></circle>
                    <circle cx="18" cy="12" r="1.5"></circle>
                </svg>
            </div>

            {/* Image */}
            <div className=" rounded overflow-hidden">
                <img src={imageUrl} className="w-full h-auto" />
            </div>
            {/* comment */}
            <div className="">
                <div className="flex py-2">
                    <div className="flex flex-grow">
                        {likeList.includes(currentUser.userId) ? (
                            <svg
                                aria-label="Unlike"
                                class="mr-1 cursor-pointer"
                                fill="#ff3040"
                                height="24"
                                role="img"
                                viewBox="0 0 48 48"
                                width="24"
                                onClick={handleUnlikeButtonClick}
                            >
                                <title>Unlike</title>
                                <path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                            </svg>
                        ) : (
                            <svg
                                aria-label="Like"
                                class="mr-1 cursor-pointer"
                                fill="white"
                                height="24"
                                role="img"
                                viewBox="0 0 24 24"
                                width="24"
                                onClick={handleLikeButtonClick}
                            >
                                <title>Like</title>
                                <path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path>
                            </svg>
                        )}

                        <svg
                            aria-label="Comment"
                            class="mx-3 cursor-pointer"
                            fill="white"
                            height="24"
                            role="img"
                            viewBox="0 0 24 24"
                            width="24"
                            onClick={() => {
                                handleOpenPostModal();
                            }}
                        >
                            <title>Comment</title>
                            <path
                                d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z"
                                fill="none"
                                stroke="white"
                                stroke-linejoin="round"
                                stroke-width="2"
                            ></path>
                        </svg>
                        <svg
                            aria-label="Share Post"
                            class="mx-1 cursor-pointer"
                            fill="white"
                            height="24"
                            role="img"
                            viewBox="0 0 24 24"
                            width="24"
                        >
                            <title>Share Post</title>
                            <line
                                fill="none"
                                stroke="white"
                                stroke-linejoin="round"
                                stroke-width="2"
                                x1="22"
                                x2="9.218"
                                y1="3"
                                y2="10.083"
                            ></line>
                            <polygon
                                fill="none"
                                points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
                                stroke="white"
                                stroke-linejoin="round"
                                stroke-width="2"
                            ></polygon>
                        </svg>
                    </div>
                    <div>
                        <svg
                            aria-label="Save"
                            class="cursor-pointer"
                            fill="white"
                            height="24"
                            role="img"
                            viewBox="0 0 24 24"
                            width="24"
                        >
                            <title>Save</title>
                            <polygon
                                fill="none"
                                points="20 21 12 13.44 4 21 4 3 20 3 20 21"
                                stroke="white"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                            ></polygon>
                        </svg>
                    </div>
                </div>
                <div className="text-sm text-white py-1">
                    Liked by ismailolol and others
                </div>
                {captionText && (
                    <div
                        className="text-sm text-white mr-5 cursor-pointer"
                        style={{ overflowWrap: "break-word" }}
                        onClick={toggleCaption}
                    >
                        <span className="font-semibold">{username}</span>{" "}
                        {displayedCaption}
                        {displayMore && (
                            <span className="text-ig-grey ml-1">more</span>
                        )}
                    </div>
                )}
                {commentList.length > 1 && (
                    <div
                        className="text-sm text-ig-grey py-1 cursor-pointer"
                        onClick={() => {
                            handleOpenPostModal();
                        }}
                    >
                        {" "}
                        View all {commentList.length} comments
                    </div>
                )}
                {commentList.length == 1 && (
                    <div
                        className="text-sm text-ig-grey py-1 cursor-pointer"
                        onClick={() => {
                            handleOpenPostModal();
                        }}
                    >
                        {" "}
                        View 1 comment
                    </div>
                )}
                <div className="flex">
                    <input
                        type="text"
                        className="placeholder-ig-grey w-full text-sm pt-1 outline-none border-none bg-transparent"
                        placeholder="Add a comment..."
                        value={commentText}
                        onChange={handleInputChange}
                        style={{
                            color: "white",
                        }}
                    />
                    {commentText && (
                        <button
                            className="text-ig-blue mx-3 text-sm font-semibold"
                            onClick={handleCreateComment}
                        >
                            Post
                        </button>
                    )}
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
