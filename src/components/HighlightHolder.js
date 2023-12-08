import { useContext, useState } from "react";
import StoryModal from "./StoryModal";
import SeenStoriesContext from "../context/SeenStoriesContext";

export default function HighlightHolder({ highlight, index }) {
    const [openStoryModal, setOpenStoryModal] = useState(false);
    const handleOpenStoryModal = () => {
        setOpenStoryModal(true);
    };

    const handleCloseStoryModal = () => {
        setOpenStoryModal(false);
    };

    return (
        <div>
            <div
                key={index}
                className=" m-3 mx-5 flex items-center flex-col cursor-pointer"
                onClick={handleOpenStoryModal}
            >
                <div class="bg-ig-grey p-[0.5px] rounded-full">
                    <a class=" bg-black block rounded-full p-[2.5px] ">
                        <div className="h-20 w-20 rounded-full overflow-hidden">
                            <img
                                src={highlight.userAva}
                                className="w-full h-auto"
                            />
                        </div>
                    </a>
                </div>
                <div className="text-sm font-semibold text-white mt-2">
                    {highlight.userUsername}
                </div>
            </div>
            {openStoryModal && (
                <StoryModal
                    closeModal={handleCloseStoryModal}
                    username={highlight.userUsername}
                    avatar={highlight.userAva}
                    timestamp={highlight.timestamp}
                    verified={highlight.verified}
                    imgUrl={highlight.imageUrl}
                />
            )}
        </div>
    );
}
