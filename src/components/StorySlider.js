import { useContext, useEffect, useRef, useState } from "react";
import StoryModal from "./StoryModal";
import { getStories } from "../services/firebase";
import CurrentUserContext from "../context/CurrentUserContext";
import StoryHolder from "./StoryHolder";
import StoriesContext from "../context/StoriesContext";

export default function StorySlider() {
    const { currentUser } = useContext(CurrentUserContext);

    const scrollContainerRef = useRef(null);

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: -800,
                behavior: "smooth",
            });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: 800,
                behavior: "smooth",
            });
        }
    };

    const { stories } = useContext(StoriesContext);

    return stories ? (
        <div>
            <div className="relative h-24 flex items-center justify-between mb-2 mt-4">
                {stories.length >= 8 && (
                    <button
                        className="absolute left-5 pb-3"
                        onClick={scrollLeft}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-7 w-7"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="none"
                        >
                            <circle cx="12" cy="12" r="11" fill="#fff" />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M14 9l-4 3 4 3"
                                stroke="rgba(0, 0, 0, 0.2)"
                            />
                        </svg>
                    </button>
                )}
                <div
                    ref={scrollContainerRef}
                    className="overflow-hidden flex scroll-container "
                >
                    {/* story */}
                    {stories &&
                        stories.map((story, index) => (
                            <StoryHolder story={story} index={index} />
                        ))}
                    {/* ... Repeat your avatar and username components as needed */}
                </div>
                {stories.length >= 8 && (
                    <button
                        className="absolute right-2 pb-3"
                        onClick={scrollRight}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-7 w-7"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="none"
                        >
                            <circle cx="12" cy="12" r="11" fill="#fff" />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 9l3 3-3 3"
                                stroke="rgba(0, 0, 0, 0.2)"
                            />
                        </svg>
                    </button>
                )}
            </div>
        </div>
    ) : (
        <div>
            <div className="relative h-24 flex mb-2 mt-4">
                <div className="overflow-hidden flex scroll-container text-white items-center justify-center">
                    No Stories to display
                </div>
            </div>
        </div>
    );
}
