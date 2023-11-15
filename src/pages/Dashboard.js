import { useEffect } from "react";
import Navigation from "../components/Navigation";
import Sidebar from "../components/Sidebar";
import Timeline from "../components/Timeline";

export default function Dashboard() {
    useEffect(() => {
        document.title = "Instagram";
    });
    return (
        <div className="">
            <Navigation />
            <div className="grid grid-cols-3 gap-4 justify-between mx-auto max-w-screen-lg">
                <Timeline />
                <Sidebar />
            </div>
        </div>
    );
}
