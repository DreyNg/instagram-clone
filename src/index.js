import { createRoot } from "react-dom/client";

import App from "./App";

import FirebaseContext from "./context/firebase";
import { firebase, FieldValue } from "./lib/firebase";

const root = createRoot(document.getElementById("root")); // createRoot(container!) if you use TypeScript
root.render(
    <FirebaseContext.Provider value={{ firebase, FieldValue }}>
        <App />
    </FirebaseContext.Provider>
);
