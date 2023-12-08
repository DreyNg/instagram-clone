import { useState } from "react";
import StoryModal from "./StoryModal";

export default function StoryHolder({ story, index }) {
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
    console.log(notSeen);
    return (
        <div>
            <div
                key={index}
                className="cursor-pointer m-3 flex items-center flex-col"
                onClick={handleOpenStoryModal}
            >
                {notSeen ? (
                    <div class="bg-gradient-to-tr from-yellow-500 to-fuchsia-700 p-[2.2px] rounded-full">
                        <a class=" bg-black block rounded-full p-[2.5px] ">
                            <div className="h-14 w-14 rounded-full overflow-hidden">
                                <img
                                    src={story.userAva}
                                    className="w-full h-auto"
                                />
                            </div>
                        </a>
                    </div>
                ) : (
                    <div class="bg-white p-[2px] rounded-full">
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
                    username={"asdasd.asd"}
                    avatar={
                        "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg"
                    }
                    timestamp={"9h"}
                    verified={true}
                    imgUrl={
                        "https://blog.hubspot.com/hs-fs/hubfs/instagram-story-dimensions.png?width=350&name=instagram-story-dimensions.png"
                    }
                />
            )}
        </div>
    );
}
