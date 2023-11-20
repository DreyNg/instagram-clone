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

export async function handleFollowUser(followingUserId, followedUserId) {
    if (followingUserId === followedUserId) return;

    try {
        // Append followedUserId into currentUser's following
        const followingUser = await getUserById(followingUserId);
        let currentFollowingArray = followingUser.following;

        if (!currentFollowingArray.includes(followedUserId)) {
            currentFollowingArray.push(followedUserId);

            // Get the reference for the document matching the followingUserId
            const currentUserQuery = firebase
                .firestore()
                .collection("users")
                .where("userId", "==", followingUserId);

            const snapshot = await currentUserQuery.get();

            if (snapshot.empty) {
                console.error("No matching document");
                return;
            }

            snapshot.forEach(async (doc) => {
                try {
                    // Get the reference of the document and update it
                    const currentUserRef = firebase
                        .firestore()
                        .collection("users")
                        .doc(doc.id);
                    await currentUserRef.update({
                        following: currentFollowingArray,
                    });
                } catch (error) {
                    console.error("Error updating followers array:", error);
                }
            });
        }
    } catch (error) {
        console.error("Error handling follow user:", error);
    }

    try {
        // Append currentUser into followedUserId's followers
        const followedUser = await getUserById(followedUserId);
        let currentFollowersArray = followedUser.followers;

        if (!currentFollowersArray.includes(followingUserId)) {
            currentFollowersArray.push(followingUserId);

            // Get the reference for the document matching the followingUserId
            const currentUserQuery = firebase
                .firestore()
                .collection("users")
                .where("userId", "==", followedUserId);

            const snapshot = await currentUserQuery.get();

            if (snapshot.empty) {
                console.error("No matching document");
                return;
            }

            snapshot.forEach(async (doc) => {
                try {
                    // Get the reference of the document and update it
                    const currentUserRef = firebase
                        .firestore()
                        .collection("users")
                        .doc(doc.id);
                    await currentUserRef.update({
                        followers: currentFollowersArray,
                    });
                } catch (error) {
                    console.error("Error updating followers array:", error);
                }
            });
        }
    } catch (error) {
        console.error("Error handling follow user:", error);
    }
}
export async function handleUnfollowUser(followingUserId, followedUserId) {
    if (followingUserId === followedUserId) return;

    try {
        // Append followedUserId into currentUser's following
        const followingUser = await getUserById(followingUserId);
        let currentFollowingArray = followingUser.following;

        if (currentFollowingArray.includes(followedUserId)) {
            const updatedFollowing = currentFollowingArray.filter(
                (userId) => userId !== followedUserId
            );

            // Get the reference for the document matching the followingUserId
            const currentUserQuery = firebase
                .firestore()
                .collection("users")
                .where("userId", "==", followingUserId);

            const snapshot = await currentUserQuery.get();

            if (snapshot.empty) {
                console.error("No matching document");
                return;
            }

            snapshot.forEach(async (doc) => {
                try {
                    // Get the reference of the document and update it
                    const currentUserRef = firebase
                        .firestore()
                        .collection("users")
                        .doc(doc.id);
                    await currentUserRef.update({
                        following: updatedFollowing,
                    });
                } catch (error) {
                    console.error("Error updating followers array:", error);
                }
            });
        }
    } catch (error) {
        console.error("Error handling follow user:", error);
    }

    try {
        // Append currentUser into followedUserId's followers
        const followedUser = await getUserById(followedUserId);
        let currentFollowersArray = followedUser.followers;

        if (currentFollowersArray.includes(followingUserId)) {
            const updatedFollowers = currentFollowersArray.filter(
                (userId) => userId !== followingUserId
            );

            // Get the reference for the document matching the followingUserId
            const currentUserQuery = firebase
                .firestore()
                .collection("users")
                .where("userId", "==", followedUserId);

            const snapshot = await currentUserQuery.get();

            if (snapshot.empty) {
                console.error("No matching document");
                return;
            }

            snapshot.forEach(async (doc) => {
                try {
                    // Get the reference of the document and update it
                    const currentUserRef = firebase
                        .firestore()
                        .collection("users")
                        .doc(doc.id);
                    await currentUserRef.update({
                        followers: updatedFollowers,
                    });
                } catch (error) {
                    console.error("Error updating followers array:", error);
                }
            });
        }
    } catch (error) {
        console.error("Error handling follow user:", error);
    }
}

export async function getUserSuggestion(user) {
    const SUGGESTION_NUMBER = 3;
    const following = user.following;
    const followers = user.followers;

    // follows no one:
    if (following.length === 0) {
        try {
            const snapshot = await firebase
                .firestore()
                .collection("users")
                .where("userId", "!=", user.userId)
                // .orderBy("userId") // Order by userId for consistent pagination
                .limit(SUGGESTION_NUMBER)
                .get();

            const suggestedUsers = {};
            snapshot.forEach((doc) => {
                suggestedUsers["Suggested to you"] = doc.data();
                // suggestedUsers.push(doc.data());
            });
            return suggestedUsers;
        } catch (error) {
            console.error("Error getting random users:", error);
            return [];
        }
    }

    function getRandomElementsFromArray(arr, numElements) {
        const shuffled = arr.slice().sort(() => 0.5 - Math.random());
        return shuffled.slice(0, numElements);
    }

    const randomElements = getRandomElementsFromArray(
        following,
        SUGGESTION_NUMBER
    );

    const suggestedUsers = {};

    for (const id of randomElements) {
        const targetUser = await getUserById(id);
        const targetUserFollowing = targetUser.following;

        const removeFollowing = targetUserFollowing.filter(
            (element) => !following.includes(element)
        );

        const removeCurrentUser = removeFollowing.filter(
            (element) => element !== user.userId
        );

        const suggestionUser = [];
        for (const id of removeCurrentUser) {
            const tempUser = await getUserById(id);
            suggestionUser.push(tempUser);
        }
        if (suggestionUser.length) {
            suggestedUsers[`Followed by ${targetUser.username}`] =
                suggestionUser;
        }
    }

    return suggestedUsers;

    // write getUserSuggestion function where it returns 5 user's userId
    // How it works is:
    // first grab 5 random (can be duplicate, as long as it is random, its okay, for example, if there are only 4 people in following, random 5 times in that array, can have duplicate) current userId from user.following
    // then for each random userId, fetch one random userId from the random userId's following (can not be the curren tUserId)
    // repeat 5 times until i have an array of 5 unique suggestion userId
}
