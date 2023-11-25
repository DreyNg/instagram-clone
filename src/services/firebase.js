import { firebase, FieldValue } from "../lib/firebase";
import { serverTimestamp } from "firebase/firestore";
import "firebase/firestore";
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
        const currentUserRef = firebase
            .firestore()
            .collection("users")
            .doc(followingUserId);
        await currentUserRef.update({
            following: FieldValue.arrayUnion(followedUserId),
        });
    } catch (error) {
        console.error("Error handling follow user:", error);
    }

    try {
        const currentUserRef = firebase
            .firestore()
            .collection("users")
            .doc(followedUserId);
        await currentUserRef.update({
            followers: FieldValue.arrayUnion(followingUserId),
        });
    } catch (error) {
        console.error("Error handling follow user:", error);
    }
}
export async function handleUnfollowUser(followingUserId, followedUserId) {
    if (followingUserId === followedUserId) return;
    try {
        const currentUserRef = firebase
            .firestore()
            .collection("users")
            .doc(followingUserId);
        await currentUserRef.update({
            following: FieldValue.arrayRemove(followedUserId),
        });
    } catch (error) {
        console.error("Error handling unfollow user:", error);
    }

    try {
        const currentUserRef = firebase
            .firestore()
            .collection("users")
            .doc(followedUserId);
        await currentUserRef.update({
            followers: FieldValue.arrayRemove(followingUserId),
        });
    } catch (error) {
        alert(error);
        console.error("Error handling follow user:", error);
    }
}

export async function uploadToImgur(img) {
    // Client ID
    const clientId = "c6c382becb757ad",
        auth = "Client-ID " + clientId;

    // Creating an object of formData
    const formData = new FormData();

    // Adding our image to formData
    formData.append("image", img);

    // Making the post request
    try {
        const res = await fetch("https://api.imgur.com/3/image/", {
            // API Endpoint
            method: "POST", // HTTP Method
            body: formData, // Data to be sent
            headers: {
                // Setting header
                Authorization: "Client-ID c6c382becb757ad",
                Accept: "application/json",
            },
        });
        // Handling success
        // .then((res) => alert("image uploaded") && console.log(res))
        // .catch((err) => alert("Failed") && console.log(err));
        const jsonlink = await res.json();
        const link = jsonlink.data.link;
        return link;
    } catch (err) {
        console.error("Error uploading image:", err);
        // console.log(err);
    }

    // try {
    //     const formdata = new FormData();
    //     formdata.append("image", file);
    //     const response = await fetch("https://api.imgur.com/3/image/", {
    //         method: "post",
    //         headers: {
    //             Authorization: "Client-ID c6c382becb757ad",
    //             Accept: "application/json",
    //         },
    //         body: formdata,
    //     });

    //     // if (!response.ok) {
    //     //     throw new Error("Network response was not ok.");
    //     // }

    //     const data = await response.json();
    //     console.log(data);
    //     return data; // Return the response data if needed
    // } catch (error) {
    //     alert("error", error);
    //     // console.error("Error uploading image:", error);
    //     // throw error;
    // }
}

export async function createPost(userId, caption, img, verified) {
    try {
        const postsRef = firebase.firestore().collection("posts");

        const imgUrl = await uploadToImgur(img);

        // Create a new post object
        const newPost = {
            userId: userId,
            imageUrl: imgUrl,
            caption: caption,
            likes: [],
            likeCounts: 0,
            comments: [],
            commentCounts: 0,
            timestamp: serverTimestamp(),
            verified: verified,
        };

        // Add the new post to Firestore
        const docRef = await postsRef.add(newPost);
        // console.log(docRef.id);

        // TODO: append to user field: posts
        const currentUserQuery = firebase
            .firestore()
            .collection("users")
            .doc(userId);

        await currentUserQuery.update({
            posts: FieldValue.arrayUnion(docRef.id),
        });
    } catch (error) {
        console.error("Error adding post: ", error);
        throw error; // Throw the error for handling in the calling code
    }
}

export async function getUserSuggestion(user) {
    const SUGGESTION_NUMBER = 5;
    const following = user.following;
    const followers = user.followers;

    async function getNewSuggestion() {
        try {
            const snapshot = await firebase
                .firestore()
                .collection("users")
                .where("userId", "!=", user.userId)
                // .orderBy("userId") // Order by userId for consistent pagination
                .limit(SUGGESTION_NUMBER)
                .get();

            const suggestedUsers = {};
            const temp = [];
            snapshot.forEach((doc) => {
                temp.push(doc.data());
            });
            suggestedUsers["Suggested to you"] = temp;
            return suggestedUsers;
        } catch (error) {
            console.error("Error getting random users:", error);
            return [];
        }
    }
    // follows no one:
    if (following.length === 0) {
        return getNewSuggestion();
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
    if (Object.keys(suggestedUsers).length === 0) {
        return getNewSuggestion();
    }
    return suggestedUsers;

    // write getUserSuggestion function where it returns 5 user's userId
    // How it works is:
    // first grab 5 random (can be duplicate, as long as it is random, its okay, for example, if there are only 4 people in following, random 5 times in that array, can have duplicate) current userId from user.following
    // then for each random userId, fetch one random userId from the random userId's following (can not be the curren tUserId)
    // repeat 5 times until i have an array of 5 unique suggestion userId
}
