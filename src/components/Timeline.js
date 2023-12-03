import { useEffect, useRef, useState } from "react";
import Post from "./Post";
import { getFeed } from "../services/firebase";
import CurrentUserContext from "../context/CurrentUserContext";
import { useContext } from "react";

export default function Timeline() {
    const { currentUser } = useContext(CurrentUserContext);
    const [posts, setPosts] = useState([]);

    const scrollContainerRef = useRef(null);

    useEffect(() => {
        const fetchFeed = async () => {
            try {
                setPosts(await getFeed(currentUser));
            } catch (error) {
                console.error("Error fetching suggestions:", error);
            }
        };

        if (currentUser) {
            fetchFeed();
        }
    }, []);
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
    return (
        <div className="h-full ">
            <div className="h-full flex flex-col ">
                <div className="relative h-24 flex items-center justify-between mb-4 mt-4">
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
                    <div
                        ref={scrollContainerRef}
                        className="overflow-hidden flex scroll-container "
                    >
                        {/* story */}
                        {Array.from({ length: 15 }, (_, index) => (
                            <div
                                key={index}
                                className=" m-3 flex items-center flex-col"
                            >
                                <img
                                    className="h-13 w-13 m-2 rounded-full"
                                    src="https://www.kidsmathgamesonline.com/images/pictures/shapes/square.jpg"
                                    alt={`avatar-${index}`}
                                />
                                <div className="text-xs text-white">
                                    username
                                </div>
                            </div>
                        ))}
                        {/* ... Repeat your avatar and username components as needed */}
                    </div>
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
                </div>
                <div className="flex-1 flex justify-center">
                    <div className="w-[480px]">
                        {/* Posts */}
                        {posts.map((post, index) => (
                            <div key={index}>
                                <Post
                                    captionText={post.caption}
                                    avatar={post.userAva}
                                    username={post.userUsername}
                                    verified={post.verified}
                                    imageUrl={post.imageUrl}
                                    timestamp={post.timestamp}
                                    commentList={post.comments}
                                    postId={post.postId}
                                    likeList={post.likes}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
