import { useContext } from "react";
import CurrentUserContext from "../context/CurrentUserContext";

export default function MycurrentUserCard() {
    const { currentUser } = useContext(CurrentUserContext);
    return (
        <div className="flex">
            {/* profile Pic */}
            <div className="h-[170px] w-[170px] mx-14 my-5 mr-20 rounded-full overflow-hidden">
                <img
                    src={currentUser.profilePicture}
                    className="w-full h-auto"
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
                    <div className="font-semibold"> {currentUser.fullname}</div>
                    <div className="my-1">{currentUser.bio}</div>
                </div>
            </div>
        </div>
    );
}
