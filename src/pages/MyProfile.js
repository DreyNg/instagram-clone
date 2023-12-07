import { useContext } from "react";
import { useParams } from "react-router-dom";
import CurrentUserContext from "../context/CurrentUserContext";
import Navigation from "../components/Navigation";

export default function MyProfile() {
    const { currentUser } = useContext(CurrentUserContext);
    const { username } = useParams();

    return (
        <div className="bg-black h-screen px-28 flex flex-col">
            <div className="fixed top-0 left-0 w-20 h-screen overflow-y-auto">
                <Navigation />
            </div>
            {/* rest */}
            <div className="ml-20 my-10 bg-red-500 h-60">
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
                        <div className="flex flex-row">
                            <div className="text-xl mt-[3px]">
                                {currentUser.username}
                            </div>
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
                        <div className="">fl count</div>
                        <div className=""> desc</div>
                    </div>
                </div>
                {/* story */}
                <div className=""></div>
                {/* feed */}
                <div className=""></div>
            </div>
        </div>
    );
}
