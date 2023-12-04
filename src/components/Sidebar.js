import React, { useState, useEffect } from "react";
import UserCard from "./UserCard";
import CurrentUserContext from "../context/CurrentUserContext";
import { useContext } from "react";
import { getUserSuggestion } from "../services/firebase";
import { handleFollowUser, handleUnfollowUser } from "../services/firebase";

export default function Sidebar() {
    const { currentUser } = useContext(CurrentUserContext);
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        const fetchUserSuggestions = async () => {
            try {
                const suggestedUsers = await getUserSuggestion(currentUser);
                setSuggestions(suggestedUsers);
            } catch (error) {
                console.error("Error fetching suggestions:", error);
            }
        };

        if (currentUser) {
            fetchUserSuggestions();
        }
    }, []);

    return (
        <div className="h-full pt-3 pl-20">
            <div className="h-full flex flex-col">
                {/* Profile card */}

                <div className="w-full py-2 flex items-center">
                    <UserCard
                        avatarSrc={currentUser.profilePicture}
                        username={currentUser.username}
                        subtitle={currentUser.fullname}
                        buttonFn1={() => {}}
                        buttonFn2={() => {}}
                        buttonFirst={(onClick) => (
                            <button
                                className="flex-none text-ig-blue mx-2 text-xs font-semibold cursor-pointer"
                                onClick={onClick}
                            >
                                Switch
                            </button>
                        )}
                        buttonAfter={(onClick) => (
                            <button
                                className="flex-none text-ig-blue mx-2 text-xs font-semibold cursor-pointer"
                                onClick={onClick}
                            >
                                Switch
                            </button>
                        )}
                    />
                </div>
                {/* Suggestion feed */}
                <div className="flex-1">
                    <div className="flex my-2">
                        <div className="flex-grow font-semibold text-sm text-ig-grey">
                            Suggested for you
                        </div>
                        <div className="text-sm text-white font-semibold text-xs cursor-pointer mx-2">
                            See All
                        </div>
                    </div>
                    <div>
                        <div>
                            {/* Suggestion cards */}
                            {Object.entries(suggestions).map(([key, value]) => (
                                <div key={key}>
                                    {value.map((user, index) => (
                                        <UserCard
                                            key={index} // Ensure to set a unique key for each component in the list
                                            avatarSrc={user.profilePicture}
                                            username={user.username}
                                            subtitle={key}
                                            buttonFn1={() =>
                                                handleFollowUser(
                                                    currentUser.userId,
                                                    user.userId
                                                )
                                            }
                                            buttonFn2={() =>
                                                handleUnfollowUser(
                                                    currentUser.userId,
                                                    user.userId
                                                )
                                            }
                                            buttonFirst={(onClick) => (
                                                <button
                                                    className="flex-none text-ig-blue mx-2 text-xs font-semibold cursor-pointer"
                                                    onClick={onClick}
                                                >
                                                    Follow
                                                </button>
                                            )}
                                            buttonAfter={(onClick) => (
                                                <button
                                                    className="flex-none text-ig-blue mx-2 text-xs font-semibold cursor-pointer"
                                                    onClick={onClick}
                                                >
                                                    Unfollow
                                                </button>
                                            )}
                                            userId={user.userId}
                                        />
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
