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
                        <UserCard
                            avatarSrc="https://math-media.byjusfutureschool.com/bfs-math/2022/07/04185628/Asset-1-8-300x300.png"
                            username="abc.ng"
                            subtitle="Followed by timothyhiew + 10 people"
                            followText="Follow"
                        />
                        <UserCard
                            avatarSrc="https://upload.wikimedia.org/wikipedia/commons/a/a5/Regular_polygon_4_annotated.svg"
                            username="Ngan"
                            subtitle="Followed by nganthropocene"
                            followText="Follow"
                        />
                        <UserCard
                            avatarSrc="https://www.spotlightstores.com/medias/BP80445610-oak.jpg-SPOTWF-productHero?context=bWFzdGVyfGltYWdlc3w4NTUzOHxpbWFnZS9qcGVnfGltYWdlcy9oNjkvaDI3LzEzNjU2MzkyMzY4MTU4L0JQODA0NDU2MTAtb2FrLmpwZ19TUE9UV0ZfcHJvZHVjdEhlcm98Y2Q5YmU2ZWE5NjczOGFmNDMxNTQ4ZDZkMDZjYjI4YmE5NWI1ZTk5OWJhOTVkYzQ2ZDk0NzQ3OGQxYjZlNTU5OQ"
                            username="Jerome"
                            subtitle="Followed by jerome.ngx"
                            followText="Follow"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
