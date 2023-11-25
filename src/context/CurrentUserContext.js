// // CurrentUserContext.js

// import React, { createContext, useState, useEffect, useContext } from "react";
// import { getUserById } from "../services/firebase";
// import FirebaseContext from "./firebase";

// const CurrentUserContext = createContext();

// const CurrentUserProvider = ({ children }) => {
//     const [currentUser, setCurrentUser] = useState(null);
//     const { firebase } = useContext(FirebaseContext);

//     useEffect(() => {
//         let unsubscribe;
//         const fetchUserFromFirestore = async () => {
//             if (firebase) {
//                 try {
//                     const userId = localStorage.getItem("userId");

//                     if (userId) {
//                         const userRef = firebase
//                             .firestore()
//                             .collection("users")
//                             .where("userId", "==", userId);

//                         const querySnapshot = await userRef.get();
//                         if (!querySnapshot.empty) {
//                             querySnapshot.forEach((doc) => {
//                                 setCurrentUser({ uid: doc.id, ...doc.data() });
//                             });
//                         } else {
//                             setCurrentUser(null);
//                         }
//                     }
//                 } catch (error) {
//                     // Handle error if fetching user fails
//                     console.error("Error fetching user:", error);
//                 }
//             }
//         };

//         fetchUserFromFirestore();

//         return () => {
//             if (unsubscribe) {
//                 unsubscribe();
//             }
//         };
//     }, [firebase]);

//     const updateCurrentUser = async (user) => {
//         setCurrentUser(user);
//         localStorage.setItem("currentUser", JSON.stringify(user));

//         // Update the user data in Firestore
//         if (firebase) {
//             const userRef = firebase
//                 .firestore()
//                 .collection("users")
//                 .doc(user.uid);
//             try {
//                 await userRef.set(user);
//             } catch (error) {
//                 console.error("Error updating user:", error);
//             }
//         }
//     };

//     return (
//         <CurrentUserContext.Provider value={{ currentUser, updateCurrentUser }}>
//             {children}
//         </CurrentUserContext.Provider>
//     );
// };

// export { CurrentUserProvider, CurrentUserContext };

import { createContext } from "react";

const CurrentUserContext = createContext(null);

export default CurrentUserContext;
