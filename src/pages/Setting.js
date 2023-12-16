import { useContext, useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import CurrentUserContext from "../context/CurrentUserContext";

export default function Setting() {
    const { currentUser } = useContext(CurrentUserContext);
    useEffect(() => {
        document.title = "Setting";
    }, []);

    const [username, setUsername] = useState(currentUser.username);
    const [fullname, setFullname] = useState(currentUser.fullname);
    const [bio, setBio] = useState(currentUser.bio);

    return (
        <div className="flex h-screen bg-black">
            {/* Navigation */}
            <div className="fixed top-0 left-0 w-20 h-screen overflow-y-auto">
                <Navigation />
            </div>

            <div className="pl-36 flex flex-col w-full px-16 bg-black overflow-auto flex scroll-container ">
                {/* card  */}
                <div className="flex ml-20 my-10 h-48 ">
                    <div className="h-[170px] w-[170px] mx-14 my-5 mr-20 rounded-full overflow-hidden">
                        <img
                            src={currentUser.profilePicture}
                            className="w-full h-auto"
                        />
                    </div>
                    <div className=" flex flex-col text-white">
                        <div className="flex flex-row mb-1">
                            <div className="text-xl mt-[3px]">{username}</div>
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

                            <button className="text-white bg-ig-blue py-2 px-6 rounded-lg mr-3 ml-4 text-sm font-semibold cursor-pointer">
                                Follow
                            </button>

                            <button className="text-white bg-[#383434] py-2 px-4 rounded-lg mr-2 text-sm font-semibold cursor-pointer">
                                Message
                            </button>
                            <button className="px-2 rounded-lg mr-1 bg-[#383434]">
                                <svg
                                    aria-label="Similar accounts"
                                    class="x1lliihq x1n2onr6 x5n08af"
                                    fill="currentColor"
                                    height="16"
                                    role="img"
                                    viewBox="0 0 24 24"
                                    width="16"
                                >
                                    <title>Similar accounts</title>
                                    <path
                                        d="M19.006 8.252a3.5 3.5 0 1 1-3.499-3.5 3.5 3.5 0 0 1 3.5 3.5Z"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-miterlimit="10"
                                        stroke-width="2"
                                    ></path>
                                    <path
                                        d="M22 19.5v-.447a4.05 4.05 0 0 0-4.05-4.049h-4.906a4.05 4.05 0 0 0-4.049 4.049v.447"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                    ></path>
                                    <line
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-miterlimit="10"
                                        stroke-width="2"
                                        x1="5.001"
                                        x2="5.001"
                                        y1="7.998"
                                        y2="14.003"
                                    ></line>
                                    <line
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-miterlimit="10"
                                        stroke-width="2"
                                        x1="8.004"
                                        x2="2.003"
                                        y1="11"
                                        y2="11"
                                    ></line>
                                </svg>
                            </button>
                            <svg
                                aria-label="Options"
                                class="x1lliihq x1n2onr6 x5n08af"
                                fill="currentColor"
                                height="32"
                                role="img"
                                viewBox="0 0 24 24"
                                width="32"
                            >
                                <title>Options</title>
                                <circle cx="12" cy="12" r="1.5"></circle>
                                <circle cx="6" cy="12" r="1.5"></circle>
                                <circle cx="18" cy="12" r="1.5"></circle>
                            </svg>
                        </div>
                        <div className="flex text-lg my-3">
                            <div className="mr-6">
                                <span className="font-semibold">
                                    {currentUser.posts.length}
                                </span>{" "}
                                posts
                            </div>
                            <div className="mx-6">
                                <span className="font-semibold">
                                    {" "}
                                    {currentUser.followers.length}
                                </span>{" "}
                                followers
                            </div>
                            <div className="mx-6">
                                <span className="font-semibold">
                                    {" "}
                                    {currentUser.following.length}
                                </span>{" "}
                                following
                            </div>
                        </div>
                        <div className="my-1">
                            <div className="font-semibold"> {fullname}</div>
                            <div className="my-1">{bio}</div>
                        </div>

                        <div className="text-ig-grey text-xs"></div>
                    </div>
                </div>
                <div className="border-zinc-600 border-b"></div>

                {/* setting */}
                <div className="my-10">
                    <div className="flex flex-col">
                        <div className="text-white">username</div>
                        <div className="flex">
                            <input
                                aria-label="Username"
                                type="text"
                                value={username}
                                placeholder="Email address"
                                onChange={({ target }) =>
                                    setUsername(target.value)
                                }
                                className="text-xs w-full mb-2 rounded border bg-gray-100 border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none"
                            />
                            <button className="text-white bg-ig-blue py-2 px-6 rounded-lg mr-3 ml-4 text-sm font-semibold cursor-pointer">
                                Follow
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
