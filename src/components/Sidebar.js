import React from "react";
import UserCard from "./UserCard";

export default function Sidebar() {
    return (
        <div className="bg-black h-full pt-5">
            <div className="h-full mx-8 flex flex-col">
                {/* Your other content */}
                <div className="flex-1">
                    <div className="flex my-2">
                        <div className="flex-grow font-semibold text-sm text-ig-grey">
                            Suggested for you
                        </div>
                        <div className="text-sm text-white font-semibold text-sm cursor-pointer mx-2">
                            See All
                        </div>
                    </div>
                    <div>
                        {/* Use the UserCard component */}
                        <UserCard
                            avatarSrc="https://static.vecteezy.com/system/resources/previews/009/273/280/non_2x/concept-of-loneliness-and-disappointment-in-love-sad-man-sitting-element-of-the-picture-is-decorated-by-nasa-free-photo.jpg"
                            username="abc.ng"
                            subtitle="Followed by timothyhiew + 10"
                            followText="Follow"
                        />
                        <UserCard
                            avatarSrc="https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg"
                            username="Ngan"
                            subtitle="Followed by nganthropocene"
                            followText="Follow"
                        />
                        <UserCard
                            avatarSrc="https://i.guim.co.uk/img/media/63de40b99577af9b867a9c57555a432632ba760b/0_266_5616_3370/master/5616.jpg?width=1200&quality=85&auto=format&fit=max&s=59ecca4b78e0bcb76a1f47dd3ab9ead7"
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
