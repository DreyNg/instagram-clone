import React, { useContext, useState } from "react";
import { handleFollowUser, handleUnfollowUser } from "../services/firebase";
import CurrentUserContext from "../context/CurrentUserContext";

const UserCard = ({
    avatarSrc,
    username,
    subtitle,
    userId,
    buttonFirst,
    buttonFn1,
    buttonFn2,
    buttonAfter,
}) => {
    const { currentUser } = useContext(CurrentUserContext);
    const [isClicked, setIsClicked] = useState(false);

    const handleButtonClick = () => {
        if (!isClicked) {
            buttonFn1(currentUser.userId, userId);
        } else {
            buttonFn2(currentUser.userId, userId);
        }
        setIsClicked(!isClicked);
    };

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
                <div className="text-white font-semibold text-sm cursor-pointer">
                    {username}
                </div>
                <div className="text-ig-grey text-xs">{subtitle}</div>
            </div>
            {!isClicked
                ? typeof buttonFirst === "function" &&
                  buttonFirst(handleButtonClick)
                : typeof buttonAfter === "function" &&
                  buttonAfter(handleButtonClick)}
        </div>
    );
};

export default UserCard;
