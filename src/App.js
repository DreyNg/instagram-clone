import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as ROUTER from "./constants/route";

const Login = lazy(() => import("./pages/login"));

function App() {
    return (
        <Router>
            <Suspense fallback={<p>Loading ......</p>}>
                <Routes>
                    <Route path={ROUTER.LOGIN} element={<Login />} />
                </Routes>
            </Suspense>
        </Router>
    );
}

export default App;
