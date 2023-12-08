import { useContext, useState } from "react";
import StoryModal from "./StoryModal";
import SeenStoriesContext from "../context/SeenStoriesContext";

export function ProfileAvaHasStory({ avatar, story }) {
    const [openStoryModal, setOpenStoryModal] = useState(false);
    const { seenStory, setSeenStory } = useContext(SeenStoriesContext);

    const handleOpenStoryModal = () => {
        handleViewedStory();
        setOpenStoryModal(true);
    };
    const handleCloseStoryModal = () => {
        setOpenStoryModal(false);
    };
    const handleViewedStory = () => {
        setSeenStory(new Set([...seenStory, story]));
    };
    return (
        <div className="mx-14 my-5 mr-20 ">
            {!seenStory.has(story) ? (
                <div
                    class="bg-gradient-to-tr from-yellow-500 to-fuchsia-700 p-[3px] rounded-full cursor-pointer"
                    onClick={handleOpenStoryModal}
                >
                    <a class=" bg-black block rounded-full p-[5px] ">
                        <div className="h-[170px] w-[170px] rounded-full overflow-hidden">
                            <img src={avatar} className="w-full h-auto" />
                        </div>
                    </a>
                </div>
            ) : (
                <div
                    class="bg-ig-grey p-[1px] rounded-full cursor-pointer"
                    onClick={handleOpenStoryModal}
                >
                    <a class=" bg-black block rounded-full p-[5px] ">
                        <div className="h-[170px] w-[170px] rounded-full overflow-hidden">
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
