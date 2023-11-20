import { useRef } from "react";

export default function Timeline() {
    const scrollContainerRef = useRef(null);

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: -200,
                behavior: "smooth",
            });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: 200,
                behavior: "smooth",
            });
        }
    };

    return (
        <div className="h-full">
            <div className="bg-green-500 h-full flex flex-col">
                <div className="bg-orange-500 relative h-24 flex items-center justify-between">
                    <button className="absolute left-0" onClick={scrollLeft}>
                        &lt;
                    </button>
                    <div
                        ref={scrollContainerRef}
                        className="overflow-hidden flex scroll-container"
                    >
                        {/* Your avatar and username components go here */}
                        {/* Example placeholders */}
                        {Array.from({ length: 15 }, (_, index) => (
                            <div
                                key={index}
                                className="bg-blue-500 flex justify-center items-center flex-col"
                            >
                                <img
                                    className="h-11 w-11 rounded-full"
                                    src="https://www.kidsmathgamesonline.com/images/pictures/shapes/square.jpg"
                                    alt={`avatar-${index}`}
                                />
                                <div>username</div>
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
