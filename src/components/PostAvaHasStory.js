import { useContext, useState } from "react";
import StoryModal from "./StoryModal";
import SeenStoriesContext from "../context/SeenStoriesContext";

export function PostAvaHasStory({ avatar, story }) {
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
        seenStory.add(story);
        // console.log(seenStory);
    };
    return (
        <div>
            {!seenStory.has(story) ? (
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
