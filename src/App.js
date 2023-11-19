import { Suspense, lazy, useContext, useState, useEffect } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import * as ROUTER from "./constants/route";
import CurrentUserContext from "./context/CurrentUserContext";
import FirebaseContext from "./context/firebase";

const Login = lazy(() => import("./pages/Login"));
const SignUp = lazy(() => import("./pages/SignUp"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Dashboard = lazy(() => import("./pages/Dashboard"));

function App() {
    const { firebase } = useContext(FirebaseContext);
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const userId = localStorage.getItem("userId");
    // localStorage.removeItem("userId");

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
                                setCurrentUser({ uid: doc.id, ...doc.data() });
                            });
                        }
                        unsubscribe = userRef.onSnapshot((snapshot) => {
                            snapshot.docChanges().forEach((change) => {
                                if (change.type === "modified") {
                                    setCurrentUser({
                                        uid: change.doc.id,
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
            if (unsubscribe) {
                unsubscribe();
            }
        };
    }, [firebase]);

    if (loading) {
        return <p>Loading ...</p>; // Show loading state until user data is fetched
    }

    return (
        <CurrentUserContext.Provider value={{ currentUser }}>
            <Router>
                <Suspense fallback={<p>Loading ......</p>}>
                    <Routes>
                        <Route path={ROUTER.LOGIN} element={<Login />} />
                        <Route path={ROUTER.SIGNUP} element={<SignUp />} />
                        <Route
                            path={ROUTER.DASHBOARD}
                            element={
                                userId ? (
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
        </CurrentUserContext.Provider>
    );
}

export default App;
