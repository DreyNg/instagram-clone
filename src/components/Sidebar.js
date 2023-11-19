import React, { useState, useEffect } from "react";
import UserCard from "./UserCard";
import { CurrentUserContext } from "../context/CurrentUserContext";
import { useContext } from "react";
import { getUserSuggestion } from "../services/firebase";

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

    console.log(suggestions);
    return (
        <div className="h-full pt-3 pl-20">
            <div className="h-full flex flex-col">
                {/* Profile card */}

                <div className="w-full py-2 flex items-center">
                    <UserCard
                        avatarSrc={currentUser.profilePicture}
                        username={currentUser.username}
                        subtitle={currentUser.fullname}
                        followText="Switch"
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
                        {/* Suggestion cards */}
                        {suggestions.map((user) => (
                            <UserCard
                                avatarSrc={user.profilePicture}
                                username={user.username}
                                subtitle={user.fullname}
                                followText="Follow"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
