// CurrentUserContext.js

import React, { createContext, useState, useEffect } from "react";

const CurrentUserContext = createContext();

const CurrentUserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        // Retrieve currentUser from localStorage on mount
        const storedUser = JSON.parse(localStorage.getItem("currentUser"));
        if (storedUser) {
            setCurrentUser(storedUser);
        }
    }, []);

    const updateCurrentUser = (user) => {
        setCurrentUser(user);
        localStorage.setItem("currentUser", JSON.stringify(user));
    };

    return (
        <CurrentUserContext.Provider value={{ currentUser, updateCurrentUser }}>
            {children}
        </CurrentUserContext.Provider>
    );
};

export { CurrentUserProvider, CurrentUserContext };
