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
        <div className="h-full">
            <div className="h-full flex flex-col ">
                <div className="relative h-24 flex items-center justify-between mb-4 mt-4">
                    <button className="absolute left-0" onClick={scrollLeft}>
                        &lt;
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
                    <button className="absolute right-0" onClick={scrollRight}>
                        &gt;
                    </button>
                </div>
                <div className="bg-red-500 flex-1">This is timeline</div>
            </div>
        </div>
    );
}
