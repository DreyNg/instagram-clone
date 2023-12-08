import { useContext, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import CurrentUserContext from "../context/CurrentUserContext";
import Navigation from "../components/Navigation";
import { convertNewLinesToBr, restoreNewLines } from "../services/helper";
import { getAllPostFromUserId } from "../services/firebase";

export default function MyProfile() {
    const { currentUser } = useContext(CurrentUserContext);
    const { username } = useParams();

    useEffect(() => {
        document.title = `(@${username}) • Insgragram`;
    });
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

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchFeed = async () => {
            try {
                setPosts(await getAllPostFromUserId(currentUser.userId));
            } catch (error) {
                console.error("Error fetching suggestions:", error);
            }
        };

        if (currentUser) {
            fetchFeed();
        }
    }, [currentUser]);

    return (
        <div className="bg-black h-screen px-28 flex flex-col overflow-y-auto">
            <div className="fixed top-0 left-0 w-20 h-screen overflow-y-auto">
                <Navigation />
            </div>
            {/* rest */}
            <div className="ml-20 my-10  h-60">
                {/* User Card */}
                <div className="flex">
                    {/* profile Pic */}
                    <div className="h-[170px] w-[170px] mx-14 my-5 mr-20 rounded-full overflow-hidden">
                        <img
                            src={currentUser.profilePicture}
                            className="w-full h-auto"
                            alt={`Avatar of ${username}`}
                        />
                    </div>
                    {/* Info tag */}
                    <div className=" flex flex-col text-white">
                        <div className="flex flex-row mb-1">
                            <div className="text-xl mt-[3px]">
                                {currentUser.username}
                            </div>
                            {currentUser.verified && (
                                <svg
                                    aria-label="Verified"
                                    className="ml-4 mr-1 mt-2"
                                    fill="rgb(0, 149, 246)"
                                    height="18"
                                    role="img"
                                    viewBox="0 0 40 40"
                                    width="18"
                                >
                                    <title>Verified</title>
                                    <path
                                        d="M19.998 3.094 14.638 0l-2.972 5.15H5.432v6.354L0 14.64 3.094 20 0 25.359l5.432 3.137v5.905h5.975L14.638 40l5.36-3.094L25.358 40l3.232-5.6h6.162v-6.01L40 25.359 36.905 20 40 14.641l-5.248-3.03v-6.46h-6.419L25.358 0l-5.36 3.094Zm7.415 11.225 2.254 2.287-11.43 11.5-6.835-6.93 2.244-2.258 4.587 4.581 9.18-9.18Z"
                                        fill-rule="evenodd"
                                    ></path>
                                </svg>
                            )}
                            <button className="text-white bg-[#383434] ml-4 py-2 px-4 rounded-lg mr-2 text-sm font-semibold cursor-pointer">
                                Edit profile
                            </button>
                            <button className="text-white bg-[#383434] py-2 px-4 rounded-lg mr-2 text-sm font-semibold cursor-pointer">
                                View archive
                            </button>
                            <svg
                                aria-label="Options"
                                class="mt-[5px] ml-1"
                                fill="currentColor"
                                height="24"
                                role="img"
                                viewBox="0 0 24 24"
                                width="24"
                            >
                                <title>Options</title>
                                <circle
                                    cx="12"
                                    cy="12"
                                    fill="none"
                                    r="8.635"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                ></circle>
                                <path
                                    d="M14.232 3.656a1.269 1.269 0 0 1-.796-.66L12.93 2h-1.86l-.505.996a1.269 1.269 0 0 1-.796.66m-.001 16.688a1.269 1.269 0 0 1 .796.66l.505.996h1.862l.505-.996a1.269 1.269 0 0 1 .796-.66M3.656 9.768a1.269 1.269 0 0 1-.66.796L2 11.07v1.862l.996.505a1.269 1.269 0 0 1 .66.796m16.688-.001a1.269 1.269 0 0 1 .66-.796L22 12.93v-1.86l-.996-.505a1.269 1.269 0 0 1-.66-.796M7.678 4.522a1.269 1.269 0 0 1-1.03.096l-1.06-.348L4.27 5.587l.348 1.062a1.269 1.269 0 0 1-.096 1.03m11.8 11.799a1.269 1.269 0 0 1 1.03-.096l1.06.348 1.318-1.317-.348-1.062a1.269 1.269 0 0 1 .096-1.03m-14.956.001a1.269 1.269 0 0 1 .096 1.03l-.348 1.06 1.317 1.318 1.062-.348a1.269 1.269 0 0 1 1.03.096m11.799-11.8a1.269 1.269 0 0 1-.096-1.03l.348-1.06-1.317-1.318-1.062.348a1.269 1.269 0 0 1-1.03-.096"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                ></path>
                            </svg>
                        </div>
                        <div className="flex text-lg my-1">
                            <div className="mr-4">
                                <span className="font-semibold">
                                    {currentUser.posts.length}
                                </span>{" "}
                                posts
                            </div>
                            <div className="mx-4">
                                <span className="font-semibold">
                                    {" "}
                                    {currentUser.followers.length}
                                </span>{" "}
                                followers
                            </div>
                            <div className="mx-4">
                                <span className="font-semibold">
                                    {" "}
                                    {currentUser.following.length}
                                </span>{" "}
                                following
                            </div>
                        </div>
                        <div className="my-1">
                            <div className="font-semibold">
                                {" "}
                                {currentUser.fullname}
                            </div>
                            <div className="my-1">{currentUser.bio}</div>
                        </div>
                    </div>
                </div>
                {/* story */}

                <div className="  relative h-[220px] border-zinc-600 border-b flex items-center justify-between ">
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
                        {Array.from({ length: 3 }, (_, index) => (
                            <div
                                key={index}
                                className=" m-3 flex items-center flex-col"
                            >
                                <img
                                    className="h-20 w-20 m-2 rounded-full"
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
                {/* feed */}
                <div className=" h-[2000px]">
                    <div className=" h-12 text-white flex items-center justify-center">
                        <div className="cursor-pointer h-full flex mx-5 items-center font-semibold text-xs border-t border-12 border-white">
                            <svg
                                aria-label=""
                                class="mx-1"
                                fill="currentColor"
                                height="12"
                                role="img"
                                viewBox="0 0 24 24"
                                width="12"
                            >
                                <title></title>
                                <rect
                                    fill="none"
                                    height="18"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    width="18"
                                    x="3"
                                    y="3"
                                ></rect>
                                <line
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    x1="9.015"
                                    x2="9.015"
                                    y1="3"
                                    y2="21"
                                ></line>
                                <line
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    x1="14.985"
                                    x2="14.985"
                                    y1="3"
                                    y2="21"
                                ></line>
                                <line
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    x1="21"
                                    x2="3"
                                    y1="9.015"
                                    y2="9.015"
                                ></line>
                                <line
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    x1="21"
                                    x2="3"
                                    y1="14.985"
                                    y2="14.985"
                                ></line>
                            </svg>
                            POSTS
                        </div>
                        <div className="flex cursor-pointer mx-5 items-center text-ig-grey font-semibold text-xs">
                            <svg
                                aria-label=""
                                class="mx-1"
                                fill="currentColor"
                                height="12"
                                role="img"
                                viewBox="0 0 24 24"
                                width="12"
                            >
                                <title></title>
                                <line
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    x1="2.049"
                                    x2="21.95"
                                    y1="7.002"
                                    y2="7.002"
                                ></line>
                                <line
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    x1="13.504"
                                    x2="16.362"
                                    y1="2.001"
                                    y2="7.002"
                                ></line>
                                <line
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    x1="7.207"
                                    x2="10.002"
                                    y1="2.11"
                                    y2="7.002"
                                ></line>
                                <path
                                    d="M2 12.001v3.449c0 2.849.698 4.006 1.606 4.945.94.908 2.098 1.607 4.946 1.607h6.896c2.848 0 4.006-.699 4.946-1.607.908-.939 1.606-2.096 1.606-4.945V8.552c0-2.848-.698-4.006-1.606-4.945C19.454 2.699 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.546 2 5.704 2 8.552Z"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                ></path>
                                <path
                                    d="M9.763 17.664a.908.908 0 0 1-.454-.787V11.63a.909.909 0 0 1 1.364-.788l4.545 2.624a.909.909 0 0 1 0 1.575l-4.545 2.624a.91.91 0 0 1-.91 0Z"
                                    fill-rule="evenodd"
                                ></path>
                            </svg>
                            REELS
                        </div>
                        <div className="flex cursor-pointer  mx-5 items-center text-ig-grey font-semibold text-xs">
                            <svg
                                aria-label=""
                                class="mx-1"
                                fill="currentColor"
                                height="12"
                                role="img"
                                viewBox="0 0 24 24"
                                width="12"
                            >
                                <title></title>
                                <polygon
                                    fill="none"
                                    points="20 21 12 13.44 4 21 4 3 20 3 20 21"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                ></polygon>
                            </svg>
                            SAVED
                        </div>
                        <div className="flex cursor-pointer mx-5 items-center text-ig-grey font-semibold text-xs">
                            <svg
                                aria-label=""
                                class="mx-1"
                                fill="currentColor"
                                height="12"
                                role="img"
                                viewBox="0 0 24 24"
                                width="12"
                            >
                                <title></title>
                                <path
                                    d="M10.201 3.797 12 1.997l1.799 1.8a1.59 1.59 0 0 0 1.124.465h5.259A1.818 1.818 0 0 1 22 6.08v14.104a1.818 1.818 0 0 1-1.818 1.818H3.818A1.818 1.818 0 0 1 2 20.184V6.08a1.818 1.818 0 0 1 1.818-1.818h5.26a1.59 1.59 0 0 0 1.123-.465Z"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                ></path>
                                <path
                                    d="M18.598 22.002V21.4a3.949 3.949 0 0 0-3.948-3.949H9.495A3.949 3.949 0 0 0 5.546 21.4v.603"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                ></path>
                                <circle
                                    cx="12.072"
                                    cy="11.075"
                                    fill="none"
                                    r="3.556"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                ></circle>
                            </svg>
                            TAGGED
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-1">
                        {posts.map((post, index) => (
                            <div
                                key={post.postId}
                                className="w-full h-[300px] overflow-hidden relative"
                            >
                                <div className="w-full h-full">
                                    <div className="relative w-full h-full">
                                        <img
                                            src={post.imageUrl}
                                            className="w-full h-full object-cover"
                                            alt={`Avatar ${index}`}
                                        />
                                        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-0 opacity-0 transition-opacity duration-300 flex items-center justify-center text-white text-center hover:bg-opacity-70 hover:opacity-100">
                                            <div className="flex">
                                                <div className="flex font-semibold">
                                                    <svg
                                                        aria-label="Unlike"
                                                        class="mr-2 "
                                                        fill="white"
                                                        height="22"
                                                        role="img"
                                                        viewBox="0 0 48 48"
                                                        width="22"
                                                    >
                                                        <title>Unlike</title>
                                                        <path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                                                    </svg>{" "}
                                                    {post.likes.length}
                                                </div>
                                                <div className="flex font-semibold">
                                                    <svg
                                                        aria-label="Comment"
                                                        class="ml-6 mr-2"
                                                        fill="white"
                                                        height="22"
                                                        role="img"
                                                        viewBox="0 0 24 24"
                                                        width="22"
                                                    >
                                                        <title>Comment</title>
                                                        <path
                                                            d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z"
                                                            fill="white"
                                                            stroke="white"
                                                            stroke-linejoin="round"
                                                            stroke-width="2"
                                                        ></path>
                                                    </svg>
                                                    {post.comments.length}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
