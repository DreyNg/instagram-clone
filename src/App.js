import { Suspense, lazy, useContext, useState, useEffect } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
    redirect,
} from "react-router-dom";
import * as ROUTER from "./constants/route";
import CurrentUserContext from "./context/CurrentUserContext";
import FirebaseContext from "./context/firebase";
import StoriesContext from "./context/StoriesContext";
import { getStories, getUserById } from "./services/firebase";
import SeenStoriesContext from "./context/SeenStoriesContext";

const Login = lazy(() => import("./pages/Login"));
const SignUp = lazy(() => import("./pages/SignUp"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const ProfilePage = lazy(() => import("./pages/ProfilePage"));
const Setting = lazy(() => import("./pages/Setting"));

function App() {
    const { firebase } = useContext(FirebaseContext);
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const userId = localStorage.getItem("userId");

    useEffect(() => {
        let unsubscribe;
        const fetchUserFromFirestore = async () => {
            if (firebase) {
                try {
                    if (userId) {
                        const userRef = firebase
                            .firestore()
                            .collection("users")
                            .where("userId", "==", userId);

                        const querySnapshot = await userRef.get();
                        if (!querySnapshot.empty) {
                            querySnapshot.forEach((doc) => {
                                setCurrentUser({
                                    firestoreId: doc.id,
                                    ...doc.data(),
                                });
                            });
                        }
                        unsubscribe = userRef.onSnapshot((snapshot) => {
                            snapshot.docChanges().forEach((change) => {
                                if (change.type === "modified") {
                                    setCurrentUser({
                                        firestoreId: change.doc.id,
                                        ...change.doc.data(),
                                    });
                                }
                            });
                        });
                    }
                } catch (error) {
                    // Handle error if fetching user fails
                    console.error("Error fetching user:", error);
                } finally {
                    setLoading(false); // Set loading to false after fetching
                }
            }
        };

        fetchUserFromFirestore();

        return () => {
            // if (unsubscribe) {
            //     unsubscribe();
            // }
        };
    }, [firebase]);

    const [stories, setStories] = useState([]);
    const [seenStory, setSeenStory] = useState(new Set());
    useEffect(() => {
        const fetchStories = async () => {
            try {
                setStories(await getStories(currentUser));
            } catch (error) {
                console.error("Error fetching suggestions:", error);
            }
        };

        if (currentUser) {
            fetchStories();
        }
    }, [currentUser]);
    if (loading) {
        return <p>Loading ...</p>;
    }

    return (
        <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
            <StoriesContext.Provider value={{ stories }}>
                <SeenStoriesContext.Provider
                    value={{ seenStory, setSeenStory }}
                >
                    <Router>
                        <Suspense fallback={<p>Loading ......</p>}>
                            <Routes>
                                <Route
                                    path={ROUTER.LOGIN}
                                    element={
                                        currentUser ? (
                                            <Navigate to={ROUTER.DASHBOARD} />
                                        ) : (
                                            <Suspense
                                                fallback={<p>Loading ......</p>}
                                            >
                                                <Login />
                                            </Suspense>
                                        )
                                    }
                                />
                                <Route
                                    path={ROUTER.SIGNUP}
                                    element={
                                        currentUser ? (
                                            <Navigate to={ROUTER.DASHBOARD} />
                                        ) : (
                                            <Suspense
                                                fallback={<p>Loading ......</p>}
                                            >
                                                <SignUp />
                                            </Suspense>
                                        )
                                    }
                                />
                                <Route
                                    path={ROUTER.PROFILE}
                                    element={
                                        currentUser ? (
                                            <ProfilePage />
                                        ) : (
                                            <Navigate to={ROUTER.LOGIN} />
                                        )
                                    }
                                />
                                <Route
                                    path={ROUTER.SETTING}
                                    element={
                                        currentUser ? (
                                            <Setting />
                                        ) : (
                                            <Navigate to={ROUTER.LOGIN} />
                                        )
                                    }
                                />

                                <Route
                                    path={ROUTER.DASHBOARD}
                                    element={
                                        currentUser ? (
                                            <Dashboard />
                                        ) : (
                                            <Navigate to={ROUTER.LOGIN} />
                                        )
                                    }
                                />
                                <Route path="*" element={<NotFound />} />
                            </Routes>
                        </Suspense>
                    </Router>
                </SeenStoriesContext.Provider>
            </StoriesContext.Provider>
        </CurrentUserContext.Provider>
    );
}

export default App;
