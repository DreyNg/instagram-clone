import { useNavigate } from "react-router-dom";
import { useState } from "react";

import * as ROUTER from "../constants/route";

export default function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("");
    const inValid = email === "" || password == "";

    const handleLogin = () => {};
    return (
        <div className="container flex mx-auto max-w-screen-md items-center h-screen">
            <div className="flex w-3/5">
                <img
                    src="/images/iphone-with-profile.png"
                    alt="iphone with Ins"
                />
            </div>
            <div className="flex w-3/5">
                <p>i will be the form</p>
                <button onClick={() => navigate(ROUTER.DASHBOARD)}>
                    I am a button
                </button>
            </div>
        </div>
    );
}
