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
                <div className="flex-1 flex justify-center">
                    <div className="w-[480px] ">
                        {/* header */}
                        <div className="flex items-center h-12">
                            {/* Ava */}
                            <div className="p-1 flex-none cursor-pointer">
                                <div className="h-8 w-8 rounded-full overflow-hidden">
                                    <img
                                        src="https://i.pinimg.com/1200x/8d/b9/9e/8db99e91cfbd85574ce47305e5924f6b.jpg"
                                        className="w-full h-auto"
                                        alt={`Avatar of `}
                                    />
                                </div>
                            </div>
                            {/* UserName */}
                            <div className="mx-2  flex items-center h-full flex-grow">
                                <div className="text-white font-semibold text-sm cursor-pointer pb-1">
                                    whatsonmelb
                                </div>
                                <svg
                                    aria-label="Verified"
                                    class="mx-1"
                                    fill="rgb(0, 149, 246)"
                                    height="12"
                                    role="img"
                                    viewBox="0 0 40 40"
                                    width="12"
                                >
                                    <title>Verified</title>
                                    <path
                                        d="M19.998 3.094 14.638 0l-2.972 5.15H5.432v6.354L0 14.64 3.094 20 0 25.359l5.432 3.137v5.905h5.975L14.638 40l5.36-3.094L25.358 40l3.232-5.6h6.162v-6.01L40 25.359 36.905 20 40 14.641l-5.248-3.03v-6.46h-6.419L25.358 0l-5.36 3.094Zm7.415 11.225 2.254 2.287-11.43 11.5-6.835-6.93 2.244-2.258 4.587 4.581 9.18-9.18Z"
                                        fill-rule="evenodd"
                                    ></path>
                                </svg>
                                <title>Verified</title>
                                <path
                                    d="M19.998 3.094 14.638 0l-2.972 5.15H5.432v6.354L0 14.64 3.094 20 0 25.359l5.432 3.137v5.905h5.975L14.638 40l5.36-3.094L25.358 40l3.232-5.6h6.162v-6.01L40 25.359 36.905 20 40 14.641l-5.248-3.03v-6.46h-6.419L25.358 0l-5.36 3.094Zm7.415 11.225 2.254 2.287-11.43 11.5-6.835-6.93 2.244-2.258 4.587 4.581 9.18-9.18Z"
                                    fill-rule="evenodd"
                                ></path>
                                <div className="text-ig-grey cursor-pointer">
                                    •
                                </div>
                                <div className="text-ig-grey mx-1  text-sm cursor-pointer ">
                                    22h
                                </div>
                            </div>
                            <svg
                                aria-label="More options"
                                fill="white"
                                height="24"
                                role="img"
                                viewBox="0 0 24 24"
                                width="24"
                            >
                                <title>More options</title>
                                <circle cx="12" cy="12" r="1.5"></circle>
                                <circle cx="6" cy="12" r="1.5"></circle>
                                <circle cx="18" cy="12" r="1.5"></circle>
                            </svg>
                        </div>

                        {/* Image */}
                        <div className=" rounded overflow-hidden">
                            <img
                                src="https://i.pinimg.com/1200x/8d/b9/9e/8db99e91cfbd85574ce47305e5924f6b.jpg"
                                className="w-full h-auto"
                            />
                        </div>
                        {/* comment */}
                        <div className="bg-gray-500">comment</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
