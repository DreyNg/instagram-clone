import { useContext, useState, forwardRef, useImperativeHandle } from "react";
import CurrentUserContext from "../context/CurrentUserContext";
import {
    getReplies,
    handleLikeComment,
    handleUnlikeComment,
} from "../services/firebase";
import ReplyComment from "./ReplyComment";
import { calculateTimeDifference, userHasStory } from "../services/helper";
import { Link } from "react-router-dom";
import StoriesContext from "../context/StoriesContext";
import { PostAvaHasStory } from "./PostAvaHasStory";

const CommentPost = (
    {
        username,
        verified,
        commentContent,
        avatar,
        likeCounts,
        commentId,
        _replies,
        timestamp,
        handleClickReply,
    },
    ref
) => {
    const replies = _replies;
    const [likeList, setLikeList] = useState(likeCounts);
    const { currentUser } = useContext(CurrentUserContext);
    const handleLikeButtonClick = async () => {
        // Make sure to create a new array and update the state instead of directly mutating the likeList array
        try {
            await handleLikeComment(commentId, currentUser.userId);
            setLikeList((prevLikes) => [...prevLikes, currentUser.userId]);
        } catch (error) {
            console.error("Error liking post", error);
            // alert(error);
            // Handle errors
        }
    };

    const handleAddReply = (reply) => {
        if (replyList.length) {
            setReplyList([reply, ...replyList]);
        }
        replies.push(reply);
    };

    const handleClickReplyChild = () => {
        handleClickReply(username, commentId);
    };

    useImperativeHandle(ref, () => ({
        callChildFunction(reply) {
            handleAddReply(reply);
        },
    }));

    const handleUnlikeButtonClick = async () => {
        // Update the state by filtering out the current user's ID from likeList
        try {
            await handleUnlikeComment(commentId, currentUser.userId);
            setLikeList((prevLikes) =>
                prevLikes.filter((userId) => userId !== currentUser.userId)
            );
        } catch (error) {
            console.error("Error liking post", error);
        }
    };

    const [showReplyToggle, setShowReplyToggle] = useState(true);
    const [replyList, setReplyList] = useState([]);
    const handleClickShowReply = async () => {
        setShowReplyToggle(!showReplyToggle);

        if (replyList.length === 0 && replies.length > 0) {
            setReplyList(await getReplies(commentId));
        }
    };
    const { stories } = useContext(StoriesContext);

    const hasStory = userHasStory(username, stories);
    return (
        <div className="">
            {/* Comment content */}
            <div className="flex flex-row">
                {/* Ava */}
                <div className="pr-3 flex-none cursor-pointer">
                    {hasStory ? (
                        <PostAvaHasStory avatar={avatar} story={hasStory} />
                    ) : (
                        <div className="h-8 w-8 rounded-full overflow-hidden">
                            <img
                                src={avatar}
                                className="w-full h-auto"
                                alt={`Avatar of `}
                            />
                        </div>
                    )}
                </div>
                {/* CMT content */}
                <div className="text-white flex-grow overflow-hidden flex flex-col">
                    {/*  CMT content */}
                    <p className="text-sm mb-1 break-words">
                        <span class="inline-flex items-baseline text-sm font-semibold">
                            <Link to={`/p/${username}`}>
                                <span className="mr-1">{username}</span>
                            </Link>
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
                        </span>
                        {/* {commentContent} */}
                        {commentContent}
                    </p>
                    {/* CMT time, like counts */}
                    <div className="text-xs text-ig-grey flex">
                        <div className="mr-3">{timestamp}</div>
                        {likeList.length != 0 && (
                            <div className="mr-3 font-semibold">
                                {likeList.length} likes
                            </div>
                        )}
                        <div
                            className="mr-3 font-semibold cursor-pointer"
                            onClick={handleClickReplyChild}
                        >
                            Reply
                        </div>
                    </div>
                </div>
                {/* heart */}
                <div className="pl-2 m-1">
                    {!likeList.includes(currentUser.userId) ? (
                        <svg
                            className="cursor-pointer"
                            aria-label="Like"
                            fill="white"
                            height="12"
                            role="img"
                            viewBox="0 0 24 24"
                            width="12"
                            onClick={handleLikeButtonClick}
                        >
                            <title>Like</title>
                            <path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path>
                        </svg>
                    ) : (
                        <svg
                            className="cursor-pointer"
                            aria-label="Unlike"
                            fill="#ff3040"
                            height="12"
                            role="img"
                            viewBox="0 0 48 48"
                            width="12"
                            onClick={handleUnlikeButtonClick}
                        >
                            <title>Unlike</title>
                            <path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                        </svg>
                    )}
                </div>
            </div>
            {/* replies */}
            {replies.length > 0 ? (
                <div className="text-xs ml-12 py-4 text-ig-grey flex flex-col">
                    <button
                        className="flex flex-row cursor-pointer"
                        onClick={handleClickShowReply}
                    >
                        <div className="text-xs pr-4">━━━━━━ </div>
                        <div className="font-semibold">
                            {showReplyToggle
                                ? `View replies (${replies.length})`
                                : "Hide replies"}
                            {/*  */}
                            {/*  */}
                        </div>
                    </button>
                    {!showReplyToggle &&
                        replyList.map((reply) => (
                            <ReplyComment
                                username={reply.username}
                                verified={reply.verified}
                                commentContent={reply.replyText}
                                avatar={reply.profilePicture}
                                likeCounts={reply.likeCounts}
                                commentId={reply.commentId}
                                timestamp={calculateTimeDifference(
                                    reply.timestamp
                                )}
                                replyId={reply.replyId}
                                handleClickReply={handleClickReply}
                            />
                        ))}
                </div>
            ) : (
                <div className="pb-6"></div>
            )}
        </div>
    );
};

export default forwardRef(CommentPost);
