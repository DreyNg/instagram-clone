import { useContext } from "react";
import FollowingUsersContext from "../context/FollowingUsersContext";

export default function Timeline() {
    const { followingUsers } = useContext(FollowingUsersContext);
    console.log("s", followingUsers);
    return (
        <div className="h-full ">
            <div className="bg-green-500 h-full flex flex-col">
                <div className="bg-orange-500 w-full h-24">This is story</div>
                <div className="bg-red-500 flex-1">This is timeline</div>
            </div>
        </div>
    );
}
