import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import FirebaseContext from "../context/firebase";
import * as ROUTER from "../constants/route";

export default function Login() {
    const { firebase } = useContext(FirebaseContext);
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("");
    const isInvalid = password === "" || email === "";

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password);
            navigate(ROUTER.DASHBOARD);
        } catch (error) {
            setPassword("");
            setEmail("");
            setError(error.message);
        }
    };

    return (
        <div className="container flex mx-auto max-w-screen-md items-center h-screen">
            <div className="flex w-3/6">
                <img
                    src="/images/iphone-with-profile.png"
                    alt="iphone with Ins"
                />
            </div>
            <div className="h-screen bg-gray-50 w-3/6 flex flex-col justify-center items-center">
                <div className="bg-white border rounded border-gray-300 w-80 py-8 flex items-center flex-col mb-3">
                    <img
                        src="/images/logo.png"
                        alt="instagram logo"
                        className="mt-5 cursor-pointer"
                    />
                    {error ? (
                        <p className="text-center m-1 text-xs text-red-500">
                            {error}
                        </p>
                    ) : (
                        <div className="m-5 w-full"></div>
                    )}
                    <form
                        className="w-64 flex flex-col"
                        onSubmit={handleLogin}
                        method="POST"
                    >
                        <input
                            aria-label="Enter your email address"
                            type="text"
                            placeholder="Email address"
                            onChange={({ target }) => setEmail(target.value)}
                            className="text-xs w-full mb-2 rounded border bg-gray-100 border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none"
                        />
                        <input
                            aria-label="Enter your password"
                            type="password"
                            placeholder="Password"
                            onChange={({ target }) => setPassword(target.value)}
                            className="text-xs w-full mb-4 rounded border bg-gray-100 border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none"
                        />
                        <button
                            disabled={isInvalid}
                            className={`text-sm text-center bg-blue-500 text-white py-1 rounded font-medium 
                            ${isInvalid && "opacity-50"}`}
                        >
                            Log In
                        </button>
                    </form>
                    <div className="flex justify-evenly space-x-2 w-64 mt-4">
                        <span className="bg-gray-300 h-px flex-grow t-2 relative top-2"></span>
                        <span className="flex-none uppercase text-xs text-gray-400 font-semibold">
                            or
                        </span>
                        <span className="bg-gray-300 h-px flex-grow t-2 relative top-2"></span>
                    </div>
                    <button className="flex mt-6">
                        <img src="/images/fb-small-logo.png" />
                        <span className="ml-2 text-xs text-blue-900 font-semibold">
                            Log in with Facebook
                        </span>
                    </button>
                    <a className="text-xs text-blue-900 mt-4 cursor-pointer -mb-4">
                        Forgot password?
                    </a>
                </div>
                <div className="bg-white rounded border border-gray-300 text-center w-80 py-4">
                    <span className="text-sm">Don't have an account? </span>

                    <Link
                        className="text-blue-500 text-sm font-semibold"
                        to={ROUTER.SIGNUP}
                    >
                        Sign Up
                    </Link>
                </div>
                <div className=" text-center w-80 m-1">
                    Get the app.
                    <div className="flex justify-center mt-2">
                        <img
                            src="/images/playStore.png"
                            className="h-12 mr-0.5 cursor-pointer"
                        />
                        <img
                            src="/images/appStore.png"
                            className="h-12 ml-0.5 cursor-pointer"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
