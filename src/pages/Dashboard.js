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
            {/* Navigation  */}
            <div className="w-20">
                <Navigation />
            </div>
            {/* Timeline and Sidebar */}
            <div className="flex w-full px-16">
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
