import { useState } from "react";

export function PostAvaHasStory({ avatar }) {
    const [notSeen, setNotSeen] = useState(true);
    const handleViewedStory = () => {
        setNotSeen(false);
    };
    console.log("inside");
    return (
        <div>
            {notSeen ? (
                <div class="bg-gradient-to-tr from-yellow-500 to-fuchsia-700 p-[2.2px] rounded-full">
                    <a class=" bg-black block rounded-full p-[2.5px] ">
                        <div className="h-8 w-8 rounded-full overflow-hidden">
                            <img src={avatar} className="w-full h-auto" />
                        </div>
                    </a>
                </div>
            ) : (
                <div class="bg-ig-grey p-[1px] rounded-full">
                    <a class=" bg-black block rounded-full p-[2.5px] ">
                        <div className="h-8 w-8 rounded-full overflow-hidden">
                            <img src={avatar} className="w-full h-auto" />
                        </div>
                    </a>
                </div>
            )}
        </div>
    );
}
