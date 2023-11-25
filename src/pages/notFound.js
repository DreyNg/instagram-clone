import { useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import CurrentUserContext from "../context/CurrentUserContext";

export default function NotFound() {
    const { currentUser } = useContext(CurrentUserContext);

    const navigate = useNavigate();
    useEffect(() => {
        document.title = "Not Found • Insgragram";
    });

    return <h1>Not Found</h1>;
}
