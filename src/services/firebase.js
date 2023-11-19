import { firebase, FieldValue } from "../lib/firebase";

export async function doesUserExist(username) {
    const querySnapshot = await firebase
        .firestore()
        .collection("users")
        .where("username", "==", username.toLowerCase())
        .get();

    return querySnapshot.size ? true : false;
}

export async function getUserById(uid) {
    const querySnapshot = await firebase
        .firestore()
        .collection("users")
        .where("userId", "==", uid)
        .get();

    if (!querySnapshot.empty) {
        // Accessing the first document's data (assuming userId is unique)
        const userData = querySnapshot.docs[0].data();

        // Return user data or specific fields as needed
        return userData;
    } else {
        // If no user found
        throw new Error("uid does not exist");
    }
}

export async function getUserSuggestion(user) {
    const following = user.following;
    const followers = user.followers;

    // follows no one:
    if (following.length === 0) {
        try {
            const snapshot = await firebase
                .firestore()
                .collection("users")
                .where("userId", "!=", user.userId)
                .orderBy("userId") // Order by userId for consistent pagination
                .limit(3)
                .get();

            const suggestedUsers = [];
            snapshot.forEach((doc) => {
                suggestedUsers.push(doc.data());
            });
            return suggestedUsers;
        } catch (error) {
            console.error("Error getting random users:", error);
            return [];
        }
    }

    // write getUserSuggestion function where it returns 5 user's userId
    // How it works is:
    // first grab 5 random (can be duplicate, as long as it is random, its okay, for example, if there are only 4 people in following, random 5 times in that array, can have duplicate) current userId from user.following
    // then for each random userId, fetch one random userId from the random userId's following (can not be the curren tUserId)
    // repeat 5 times until i have an array of 5 unique suggestion userId
}
