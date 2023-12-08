import { useContext, useState } from "react";
import StoryModal from "./StoryModal";
import SeenStoriesContext from "../context/SeenStoriesContext";

export default function StoryHolder({ story, index }) {
    const [openStoryModal, setOpenStoryModal] = useState(false);
    const { seenStory, setSeenStory } = useContext(SeenStoriesContext);
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
        setSeenStory(new Set([...seenStory, story]));
    };
    return (
        <div>
            <div
                key={index}
                className="cursor-pointer m-3 flex items-center flex-col"
                onClick={handleOpenStoryModal}
            >
                {!seenStory.has(story) ? (
                    <div class="bg-gradient-to-tr from-yellow-500 to-fuchsia-700 p-[2.2px] rounded-full">
                        <a class=" bg-black block rounded-full p-[2px] ">
                            <div className="h-14 w-14 rounded-full overflow-hidden">
                                <img
                                    src={story.userAva}
                                    className="w-full h-auto"
                                />
                            </div>
                        </a>
                    </div>
                ) : (
                    <div class="bg-ig-grey p-[1px] rounded-full">
                        <a class=" bg-black block rounded-full p-[2.5px] ">
                            <div className="h-14 w-14 rounded-full overflow-hidden">
                                <img
                                    src={story.userAva}
                                    className="w-full h-auto"
                                />
                            </div>
                        </a>
                    </div>
                )}
                <div className="text-xs text-white mt-2">
                    {story.userUsername}
                </div>
            </div>
            {openStoryModal && (
                <StoryModal
                    closeModal={handleCloseStoryModal}
                    username={story.userUsername}
                    avatar={story.userAva}
                    timestamp={story.timestamp}
                    verified={story.verified}
                    imgUrl={story.imageUrl}
                />
            )}
        </div>
    );
}
