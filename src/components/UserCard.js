import React from "react";

const UserCard = ({ avatarSrc, username, subtitle, followText }) => {
    return (
        <div className="w-full py-2 flex items-center">
            <div className="p-1 rounded-lg flex-none cursor-pointer">
                <img
                    src={avatarSrc}
                    className="h-11 w-11 rounded-full"
                    alt={`Avatar of ${username}`}
                />
            </div>
            <div className="mx-2 flex-grow">
                <div className="text-white font-semibold text-sm">
                    {username}
                </div>
                <div className="text-ig-grey text-xs">{subtitle}</div>
            </div>
            <div className="flex-none text-ig-blue mx-2 text-xs font-semibold cursor-pointer">
                {followText}
            </div>
        </div>
    );
};

export default UserCard;
