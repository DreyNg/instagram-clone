import { useRef, useState } from "react";
import StoryModal from "./StoryModal";

export default function StorySlider() {
    const scrollContainerRef = useRef(null);

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: -800,
                behavior: "smooth",
            });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: 800,
                behavior: "smooth",
            });
        }
    };

    const [openStoryModal, setOpenStoryModal] = useState(false);
    const handleOpenStoryModal = () => {
        setOpenStoryModal(true);
    };

    const handleCloseStoryModal = () => {
        setOpenStoryModal(false);
    };
    return (
        <div>
            <div className="relative h-24 flex items-center justify-between mb-2 mt-4">
                <button className="absolute left-5 pb-3" onClick={scrollLeft}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-7 w-7"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="none"
                    >
                        <circle cx="12" cy="12" r="11" fill="#fff" />
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M14 9l-4 3 4 3"
                            stroke="rgba(0, 0, 0, 0.2)"
                        />
                    </svg>
                </button>
                <div
                    ref={scrollContainerRef}
                    className="overflow-hidden flex scroll-container "
                >
                    {/* story */}
                    {Array.from({ length: 15 }, (_, index) => (
                        <div
                            key={index}
                            className="cursor-pointer m-3 flex items-center flex-col"
                            onClick={handleOpenStoryModal}
                        >
                            <div class="bg-gradient-to-tr from-yellow-500 to-fuchsia-700 p-[2.2px] rounded-full">
                                <a class=" bg-black block rounded-full p-[2.5px] ">
                                    <div className="h-14 w-14 rounded-full overflow-hidden">
                                        <img
                                            src={
                                                "http://placekitten.com/200/300"
                                            }
                                            className="w-full h-auto"
                                        />
                                    </div>
                                </a>
                            </div>
                            <div className="text-xs text-white">username</div>
                        </div>
                    ))}
                    {/* ... Repeat your avatar and username components as needed */}
                </div>
                <button className="absolute right-2 pb-3" onClick={scrollRight}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-7 w-7"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="none"
                    >
                        <circle cx="12" cy="12" r="11" fill="#fff" />
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 9l3 3-3 3"
                            stroke="rgba(0, 0, 0, 0.2)"
                        />
                    </svg>
                </button>
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
                />
            )}
        </div>
    );
}
