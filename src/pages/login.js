import { useNavigate } from "react-router-dom";
import { useState } from "react";

import * as ROUTER from "../constants/route";

export default function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("");
    const isInvalid = password === "" || email === "";

    const handleLogin = () => {};
    return (
        <div className="container flex mx-auto max-w-screen-md items-center h-screen">
            <div className="flex w-3/6">
                <img
                    src="/images/iphone-with-profile.png"
                    alt="iphone with Ins"
                />
            </div>
            <div class="h-screen bg-gray-50 w-3/6 flex flex-col justify-center items-center">
                <div class="bg-white border rounded border-gray-300 w-80 py-8 flex items-center flex-col mb-3">
                    <img
                        src="/images/logo.png"
                        alt="instagram logo"
                        className="mt-5"
                    />
                    <form
                        className="mt-8 w-64 flex flex-col"
                        onSubmit={handleLogin}
                        method="POST"
                    >
                        <input
                            aria-label="Enter your email address"
                            type="text"
                            placeholder="Email address"
                            onChange={({ target }) => setEmail(target.value)}
                            class="text-xs w-full mb-2 rounded border bg-gray-100 border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none"
                        />
                        <input
                            aria-label="Enter your email address"
                            type="password"
                            placeholder="Password"
                            onChange={({ target }) => setPassword(target.value)}
                            class="text-xs w-full mb-4 rounded border bg-gray-100 border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none"
                        />
                        <button
                            disabled={isInvalid}
                            class={`text-sm text-center bg-blue-500 text-white py-1 rounded font-medium 
                            ${isInvalid && "opacity-50"}`}
                        >
                            Log In
                        </button>
                    </form>
                    <div class="flex justify-evenly space-x-2 w-64 mt-4">
                        <span class="bg-gray-300 h-px flex-grow t-2 relative top-2"></span>
                        <span class="flex-none uppercase text-xs text-gray-400 font-semibold">
                            or
                        </span>
                        <span class="bg-gray-300 h-px flex-grow t-2 relative top-2"></span>
                    </div>
                    <button className="flex mt-6">
                        <img src="/images/fb-small-logo.png" />
                        <span class="ml-2 text-xs text-blue-900 font-semibold">
                            Log in with Facebook
                        </span>
                    </button>
                    <a class="text-xs text-blue-900 mt-4 cursor-pointer -mb-4">
                        Forgot password?
                    </a>
                </div>
                <div class="bg-white rounded border border-gray-300 text-center w-80 py-4">
                    <span class="text-sm">Don't have an account? </span>
                    <button class="text-blue-500 text-sm font-semibold">
                        Sign up
                    </button>
                </div>
                <div class=" text-center w-80 m-1">
                    Get the app.
                    <div className="flex justify-center mt-2">
                        <img
                            src="/images/playStore.png"
                            className="h-12 mr-0.5"
                        />
                        <img
                            src="/images/appStore.png"
                            className="h-12 ml-0.5"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
