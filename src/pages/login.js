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
            <div className="flex w-3/6">
                <img
                    src="/images/iphone-with-profile.png"
                    alt="iphone with Ins"
                />
            </div>
            <div className="flex w-3/6">
                <div className="flex flex-col items-center bg-white p-4 border rounded">
                    <img
                        src="/images/logo.png"
                        alt="instagram logo"
                        className="mt-8"
                    />
                    <form className="mt-8 w-64 flex flex-col">
                        <input
                            aria-label="Enter your email address"
                            type="text"
                            placeholder="Email address"
                            class="text-xs w-full mb-2 rounded border bg-gray-100 border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none"
                        />
                        <input
                            aria-label="Enter your email address"
                            type="password"
                            placeholder="Password"
                            class="text-xs w-full mb-4 rounded border bg-gray-100 border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none"
                        />
                        <button>login</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
