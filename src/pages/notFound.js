import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function NotFound() {
    const navigate = useNavigate();

    // useEffect(() => {
    //     document.title("Not Found • Instagram");
    // });

    return <h1>Not Found</h1>;
}
