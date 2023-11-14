import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as ROUTER from "./constants/route";

const Login = lazy(() => import("./pages/login"));
const SignUp = lazy(() => import("./pages/signup"));

function App() {
    return (
        <Router>
            <Suspense fallback={<p>Loading ......</p>}>
                <Routes>
                    <Route path={ROUTER.LOGIN} element={<Login />} />
                    <Route path={ROUTER.SIGNUP} element={<SignUp />} />
                </Routes>
            </Suspense>
        </Router>
    );
}

export default App;
