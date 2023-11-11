import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import FirebaseContext from "../context/firebase";
import * as ROUTER from "../constants/route";

export default function SignUp() {
    const { firebase } = useContext(FirebaseContext);
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [fullname, setFullname] = useState("");

    const [error, setError] = useState("");
    const isInvalid =
        password === "" || email === "" || username === "" || fullname === "";

    const handleSignup = async (e) => {
        e.preventDefault();
    };

    return (
        <div className=" bg-gray-50 flex flex-col items-center">
            <div className="bg-white border rounded border-gray-300 w-80 py-8 flex items-center flex-col m-3">
                <img
                    src="/images/logo.png"
                    alt="instagram logo"
                    className="mt-5"
                />
                {error ? (
                    <p className="text-center m-1 text-xs text-red-500">
                        {error}
                    </p>
                ) : (
                    <div className="text-center p-2 text-gray-500 font-semibold">
                        Sign up to see photos and videos from your friends.
                    </div>
                )}
                <button className="w-64 p-2 border rounded flex justify-center bg-blue-500">
                    <img src="/images/fb-small-logo.png" />
                    <span className="ml-2 text-xs text-white font-semibold">
                        Log in with Facebook
                    </span>
                </button>
                {/* <button
                    className="w-64 text-sm text-center bg-blue-500 text-white py-1 rounded font-medium 
                            "
                >
                    <img src="/images/fb-small-logo.png" />
                    <p>Log In with Facebook</p>
                </button> */}
                <div className="flex justify-evenly space-x-2 w-64 mt-4">
                    <span className="bg-gray-300 h-px flex-grow t-2 relative top-2"></span>
                    <span className="flex-none uppercase text-xs text-gray-400 font-semibold">
                        or
                    </span>
                    <span className="bg-gray-300 h-px flex-grow t-2 relative top-2"></span>
                </div>
                <form
                    className="w-64 flex flex-col"
                    onSubmit={handleSignup}
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
                        aria-label="Enter your full name"
                        type="text"
                        placeholder="Full Name"
                        onChange={({ target }) => setFullname(target.value)}
                        className="text-xs w-full mb-2 rounded border bg-gray-100 border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none"
                    />
                    <input
                        aria-label="Enter your username"
                        type="text"
                        placeholder="Username"
                        onChange={({ target }) => setUsername(target.value)}
                        className="text-xs w-full mb-2 rounded border bg-gray-100 border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none"
                    />
                    <input
                        aria-label="Enter your password"
                        type="password"
                        placeholder="Password"
                        onChange={({ target }) => setPassword(target.value)}
                        className="text-xs w-full mb-4 rounded border bg-gray-100 border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none"
                    />
                    <div className="flex">
                        <p className="text-gray-500 text-xs text-center">
                            People who use our service may have uploaded your
                            contact information to Instagram.
                            <a className="  text-blue-500 ml-1 cursor-pointer">
                                Learn More
                            </a>
                        </p>
                    </div>
                    <div className="flex">
                        <p className="text-gray-500 text-xs text-center">
                            By signing up, you agree to our
                            <a className="text-blue-500 ml-1 cursor-pointer">
                                Terms
                            </a>
                            ,
                            <a className="text-blue-500 ml-1 cursor-pointer">
                                Privacy Policy
                            </a>{" "}
                            and
                            <a className="text-blue-500 ml-1 cursor-pointer">
                                Cookie Policy
                            </a>
                        </p>
                    </div>

                    <button
                        disabled={isInvalid}
                        className={`text-sm text-center bg-blue-500 text-white py-1 rounded font-medium 
                            ${isInvalid && "opacity-50"}`}
                    >
                        Sign Up
                    </button>
                </form>
            </div>
            <div className="bg-white rounded border border-gray-300 text-center w-80 py-4">
                <span className="text-sm">Have an account? </span>

                <Link
                    className="text-blue-500 text-sm font-semibold"
                    to={ROUTER.LOGIN}
                >
                    Log In
                </Link>
            </div>
            <div className=" text-center w-80 m-1">
                Get the app.
                <div className="flex justify-center mt-2">
                    <img src="/images/playStore.png" className="h-12 mr-0.5" />
                    <img src="/images/appStore.png" className="h-12 ml-0.5" />
                </div>
            </div>
        </div>
    );
}
