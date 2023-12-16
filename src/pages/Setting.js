import { useEffect } from "react";
import Navigation from "../components/Navigation";

export default function Setting() {
    useEffect(() => {
        document.title = "Setting";
    }, []);

    return (
        <div className="flex h-screen bg-black">
            {/* Navigation */}
            <div className="fixed top-0 left-0 w-20 h-screen overflow-y-auto">
                <Navigation />
            </div>
        </div>
    );
}
