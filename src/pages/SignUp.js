import { Link, useNavigate } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import FirebaseContext from "../context/firebase";
import * as ROUTER from "../constants/route";
import { doesUserExist } from "../services/firebase";
import { BLANK_PROFILE_IMAGE } from "../constants/constants";

export default function SignUp() {
    const { firebase } = useContext(FirebaseContext);
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [fullname, setFullname] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        document.title = "Sign up • Insgragram";
    }, []);

    const [error, setError] = useState("");
    const isInvalid =
        password === "" || email === "" || username === "" || fullname === "";

    const handleSignup = async (e) => {
        e.preventDefault();

        if (!(await doesUserExist(username))) {
            try {
                // create auth to login
                const createdUser = await firebase
                    .auth()
                    .createUserWithEmailAndPassword(email, password);

                // createdUser.user.updateProfile({
                //     displayName: username,
                // });

                // create instance on firestore
                await firebase
                    .firestore()
                    .collection("users")
                    .doc(createdUser.user.uid)
                    .set({
                        username: username.toLowerCase(),
                        email: email.toLowerCase(),
                        fullname: fullname.toLowerCase(),
                        profilePicture: BLANK_PROFILE_IMAGE,
                        // TODO: serverTimestamp()
                        dateCreated: new Date(),
                        followers: [],
                        following: [],
                        userId: createdUser.user.uid,
                        verified: false,
                        posts: [],
                    });

                navigate(ROUTER.DASHBOARD);
            } catch (error) {
                setPassword("");
                setEmail("");
                setUsername("");
                setFullname("");
                setError(error.message);
            }
        } else {
            setError("This username is already taken");
        }
    };

    return (
        <div className=" bg-gray-50 flex flex-col items-center">
            <div className="bg-white border rounded border-gray-300 w-80 py-8 flex items-center flex-col m-3">
                <img
                    src="https://i.imgur.com/YYy6mGM.png"
                    alt="instagram logo"
                    className="mt-5 cursor-pointer"
                />
                {error ? (
                    <p className="text-center m-1 text-xs text-red-500">
                        {error}
                    </p>
                ) : (
                    <div className="text-center py-2 px-6 text-gray-500 font-semibold">
                        Sign up to see photos and videos from your friends.
                    </div>
                )}
                <button className="w-64 mt-2 p-1 border rounded flex items-center justify-center bg-ig-blue">
                    <img
                        src="https://i.imgur.com/qxMLdI0.png"
                        className="h-6 w-6"
                    />
                    <span className="ml-1 text-xs text-white font-semibold">
                        Log in with Facebook
                    </span>
                </button>

                <div className="flex justify-evenly space-x-2 w-64 my-4">
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
                        value={email}
                        onChange={({ target }) => setEmail(target.value)}
                        className="text-xs w-full mb-2 rounded border bg-gray-100 border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none"
                    />
                    <input
                        aria-label="Enter your full name"
                        type="text"
                        placeholder="Full Name"
                        value={fullname}
                        onChange={({ target }) => setFullname(target.value)}
                        className="text-xs w-full mb-2 rounded border bg-gray-100 border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none"
                    />
                    <input
                        aria-label="Enter your username"
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={({ target }) => setUsername(target.value)}
                        className="text-xs w-full mb-2 rounded border bg-gray-100 border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none"
                    />
                    <input
                        aria-label="Enter your password"
                        type="password"
                        value={password}
                        placeholder="Password"
                        onChange={({ target }) => setPassword(target.value)}
                        className="text-xs w-full mb-2 rounded border bg-gray-100 border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none"
                    />
                    <div className="flex my-1">
                        <p className="text-gray-500 text-xs text-center">
                            People who use our service may have uploaded your
                            contact information to Instagram.
                            <a className="  text-ig-blue ml-1 cursor-pointer">
                                Learn More
                            </a>
                        </p>
                    </div>
                    <div className="flex m-1">
                        <p className="text-gray-500 text-xs text-center">
                            By signing up, you agree to our
                            <a className="text-ig-blue ml-1 cursor-pointer">
                                Terms
                            </a>
                            ,
                            <a className="text-ig-blue ml-1 cursor-pointer">
                                Privacy Policy
                            </a>{" "}
                            and
                            <a className="text-ig-blue ml-1 cursor-pointer">
                                Cookie Policy
                            </a>
                        </p>
                    </div>

                    <button
                        disabled={isInvalid}
                        className={`text-sm text-center bg-ig-blue text-white py-1 rounded font-medium mt-3
                            ${isInvalid && "opacity-50"}`}
                    >
                        Sign Up
                    </button>
                </form>
            </div>
            <div className="bg-white rounded border border-gray-300 text-center w-80 py-4">
                <span className="text-sm">Have an account? </span>

                <Link
                    className="text-ig-blue text-sm font-semibold"
                    to={ROUTER.LOGIN}
                >
                    Log In
                </Link>
            </div>
            <div className=" text-center w-80 m-1">
                Get the app.
                <div className="flex justify-center mt-2 mb-4">
                    <img
                        src="https://i.imgur.com/9luhufo.png"
                        className="cursor-pointer h-12 mr-0.5"
                    />
                    <img
                        src="https://i.imgur.com/HDSctnV.png"
                        className="cursor-pointer h-12 ml-0.5"
                    />
                </div>
            </div>
        </div>
    );
}
