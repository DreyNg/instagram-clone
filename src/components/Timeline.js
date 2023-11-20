import { useRef } from "react";

export default function Timeline() {
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

    return (
        <div className="h-full ">
            <div className="h-full flex flex-col ">
                <div className="relative h-24 flex items-center justify-between mb-4 mt-4">
                    <button
                        className="absolute left-5 pb-3"
                        onClick={scrollLeft}
                    >
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
                        {/* Your avatar and username components go here */}
                        {/* Example placeholders */}
                        {Array.from({ length: 15 }, (_, index) => (
                            <div
                                key={index}
                                className=" m-3 flex items-center flex-col"
                            >
                                <img
                                    className="h-13 w-13 m-2 rounded-full"
                                    src="https://www.kidsmathgamesonline.com/images/pictures/shapes/square.jpg"
                                    alt={`avatar-${index}`}
                                />
                                <div className="text-xs text-white">
                                    username
                                </div>
                            </div>
                        ))}
                        {/* ... Repeat your avatar and username components as needed */}
                    </div>
                    <button
                        className="absolute right-2 pb-3"
                        onClick={scrollRight}
                    >
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
                <div className="bg-red-500 flex-1 flex flex-col justify-center px-20 ">
                    <div className="bg-blue-500 w-full ">
                        <div className="bg-green-500 h-12">head</div>
                        <div className="bg-orange-500">
                            <img src="https://i.pinimg.com/1200x/8d/b9/9e/8db99e91cfbd85574ce47305e5924f6b.jpg" />
                        </div>
                        <div className="bg-gray-500">comment</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
