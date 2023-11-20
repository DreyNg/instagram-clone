import { useEffect } from "react";
import Navigation from "../components/Navigation";
import Sidebar from "../components/Sidebar";
import Timeline from "../components/Timeline";

export default function Dashboard() {
    useEffect(() => {
        document.title = "Instagram";
    }, []);

    return (
        <div className="flex h-screen">
            {/* Navigation */}
            <div className="fixed top-0 left-0 w-20 h-screen overflow-y-auto">
                <Navigation />
            </div>
            {/* Timeline and Sidebar */}
            <div className="pl-36 flex w-full px-16 bg-black overflow-auto flex scroll-container">
                <div className="w-3/5">
                    <Timeline />
                </div>
                <div className="w-2/5">
                    <Sidebar />
                </div>
            </div>
        </div>
    );
}
