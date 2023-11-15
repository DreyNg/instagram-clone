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
            {/* Navigation - 1/10th of the screen width */}
            <div className="w-20">
                <Navigation />
            </div>
            {/* Timeline and Sidebar - 60% and 40% of the remaining screen width */}
            <div className="flex w-full">
                <div className="w-4/6">
                    <Timeline />
                </div>
                <div className="w-2/6">
                    <Sidebar />
                </div>
            </div>
        </div>
    );
}
