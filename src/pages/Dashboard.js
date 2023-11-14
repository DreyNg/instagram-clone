import { useEffect } from "react";

export default function Dashboard() {
    useEffect(() => {
        document.title = "Instagram";
    });
    return <h1> DASHBOARD</h1>;
}
