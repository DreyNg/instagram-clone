import { useEffect, useRef, useState } from "react";
import Post from "./Post";
import { getFeed } from "../services/firebase";
import CurrentUserContext from "../context/CurrentUserContext";
import { useContext } from "react";
import StorySlider from "./StorySlider";

export default function Timeline() {
    const { currentUser } = useContext(CurrentUserContext);
    const [posts, setPosts] = useState([]);

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

    return (
        <div className="h-full ">
            <div className="h-full flex flex-col ">
                {/* Story */}
                <StorySlider />
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
                                    likes={post.likes}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
