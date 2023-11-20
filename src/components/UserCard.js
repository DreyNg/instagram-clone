import React, { useContext } from "react";
import { handleFollowUser, handleUnfollowUser } from "../services/firebase";
import CurrentUserContext from "../context/CurrentUserContext";

const UserCard = ({ avatarSrc, username, subtitle, followText, userId }) => {
    const { currentUser } = useContext(CurrentUserContext);
    return (
        <div className="w-full py-2 flex items-center">
            <div className="p-1 rounded-lg flex-none cursor-pointer">
                <div className="h-11 w-11 rounded-full overflow-hidden">
                    <img
                        src={avatarSrc}
                        className="w-full h-auto"
                        alt={`Avatar of ${username}`}
                    />
                </div>
            </div>
            <div className="mx-2 flex-grow">
                <div
                    className="text-white font-semibold text-sm cursor-pointer"
                    onClick={() => {
                        handleUnfollowUser(currentUser.userId, userId);
                    }}
                >
                    {username}
                </div>
                <div className="text-ig-grey text-xs">{subtitle}</div>
            </div>
            <button
                className="flex-none text-ig-blue mx-2 text-xs font-semibold cursor-pointer"
                onClick={() => {
                    handleFollowUser(currentUser.userId, userId);
                }}
            >
                {followText}
            </button>
        </div>
    );
};

export default UserCard;
