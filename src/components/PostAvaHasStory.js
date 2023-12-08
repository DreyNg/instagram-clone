import { useState } from "react";
import StoryModal from "./StoryModal";

export function PostAvaHasStory({ avatar, story }) {
    const [openStoryModal, setOpenStoryModal] = useState(false);
    const handleOpenStoryModal = () => {
        handleViewedStory();
        setOpenStoryModal(true);
    };
    const handleCloseStoryModal = () => {
        setOpenStoryModal(false);
    };
    const [notSeen, setNotSeen] = useState(true);
    const handleViewedStory = () => {
        setNotSeen(false);
    };
    console.log("inside");
    return (
        <div>
            {notSeen ? (
                <div
                    class="bg-gradient-to-tr from-yellow-500 to-fuchsia-700 p-[2px] rounded-full"
                    onClick={handleOpenStoryModal}
                >
                    <a class=" bg-black block rounded-full p-[2px] ">
                        <div className="h-8 w-8 rounded-full overflow-hidden">
                            <img src={avatar} className="w-full h-auto" />
                        </div>
                    </a>
                </div>
            ) : (
                <div
                    class="bg-ig-grey p-[1px] rounded-full"
                    onClick={handleOpenStoryModal}
                >
                    <a class=" bg-black block rounded-full p-[2.5px] ">
                        <div className="h-8 w-8 rounded-full overflow-hidden">
                            <img src={avatar} className="w-full h-auto" />
                        </div>
                    </a>
                </div>
            )}
            {openStoryModal && (
                <StoryModal
                    closeModal={handleCloseStoryModal}
                    username={story.userUsername}
                    avatar={avatar}
                    timestamp={story.timestamp}
                    verified={story.verified}
                    imgUrl={story.imageUrl}
                />
            )}
        </div>
    );
}
