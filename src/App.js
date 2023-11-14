import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as ROUTER from "./constants/route";

const Login = lazy(() => import("./pages/Login"));
const SignUp = lazy(() => import("./pages/SignUp"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
    return (
        <Router>
            <Suspense fallback={<p>Loading ......</p>}>
                <Routes>
                    <Route path={ROUTER.LOGIN} element={<Login />} />
                    <Route path={ROUTER.SIGNUP} element={<SignUp />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Suspense>
        </Router>
    );
}

export default App;
