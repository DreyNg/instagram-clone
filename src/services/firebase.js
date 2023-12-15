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
        console.error("uid does not exist");
    }
}
export async function getUserByListId(uids) {
    const querySnapshot = await firebase
        .firestore()
        .collection("users")
        .where("userId", "in", uids)
        .get();

    const temp = [...querySnapshot.docs];
    const result = [];
    temp.forEach((e) => result.push(e.data()));
    return result;
}
export async function getUserByUsername(username) {
    const querySnapshot = await firebase
        .firestore()
        .collection("users")
        .where("username", "==", username.toLowerCase())
        .get();

    if (!querySnapshot.empty) {
        // Accessing the first document's data (assuming userId is unique)
        const userData = querySnapshot.docs[0].data();

        // Return user data or specific fields as needed
        return userData;
    } else {
        // If no user found
        return false;
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

        const jsonlink = await res.json();
        const link = jsonlink.data.link;
        return link;
    } catch (err) {
        console.error("Error uploading image:", err);
    }
}

export async function getAllPostFromUserId(userId) {
    try {
        const posts = await firebase
            .firestore()
            .collection("posts")
            .orderBy("timestamp", "desc") // Sort by timestamp in descending order
            .where("userId", "==", userId)
            .get();

        const temp = [...posts.docs];
        const result = [];
        temp.forEach((e) => result.push(e.data()));
        return result;
    } catch (error) {
        console.error("Error adding post: ", error);
    }
}
export async function getHighlights(currentUser) {
    try {
        const posts = await firebase
            .firestore()
            .collection("highlights")
            .where("userId", "==", currentUser.userId)
            .get();

        const temp = [...posts.docs];
        const result = [];
        temp.forEach((e) => result.push(e.data()));
        return result;
    } catch (error) {
        console.error("Error fetiching story: ", error);
    }
}

export async function getStories(currentUser) {
    try {
        const posts = await firebase
            .firestore()
            .collection("stories")
            .where("userId", "in", currentUser.following)
            .get();

        const temp = [...posts.docs];
        const result = [];
        temp.forEach((e) => result.push(e.data()));
        return result;
    } catch (error) {
        console.error("Error fetiching story: ", error);
    }
}
export async function getFeed(currentUser) {
    try {
        const following = [currentUser.userId, ...currentUser.following];

        const posts = await firebase
            .firestore()
            .collection("posts")
            .orderBy("timestamp", "desc") // Sort by timestamp in descending order
            .where("userId", "in", following)
            .get();

        const temp = [...posts.docs];
        const result = [];
        temp.forEach((e) => result.push(e.data()));
        return result;
    } catch (error) {
        console.error("Error adding post: ", error);
    }
}

export async function getLikeList(postId, followingList, currentUserId) {
    try {
        const result = [];
        followingList.push(currentUserId);
        const resultFollowing = [];
        const resultNotFollowing = [];
        const resultCurrentUser = [];

        // Fetch likes for the current user
        const likesCurrentUser = await firebase
            .firestore()
            .collection("likes")
            .where("postId", "==", postId)
            .where("userId", "==", currentUserId)
            .get();

        const tempCurrentUser = [...likesCurrentUser.docs];
        tempCurrentUser.forEach((e) => resultCurrentUser.push(e.data()));

        // Fetch likes for following users that liked the posts
        const likesFollowing = await firebase
            .firestore()
            .collection("likes")
            .where("postId", "==", postId)
            .where("userId", "!=", currentUserId)
            .where("userId", "in", followingList)
            .get();

        const tempFollowing = [...likesFollowing.docs];
        tempFollowing.forEach((e) => resultFollowing.push(e.data()));

        // Fetch all likes for the post
        const likesAll = await firebase
            .firestore()
            .collection("likes")
            .where("postId", "==", postId)
            .get();

        const tempAll = [...likesAll.docs];
        tempAll.forEach((e) => resultNotFollowing.push(e.data()));

        // Filter out likes from resultNotFollowing that are in resultFollowing or resultCurrentUser
        const combinedLikes = resultFollowing.concat(resultCurrentUser);
        const uniqueLikesIds = new Set(
            combinedLikes.map((like) => like.userId)
        );

        const filteredResultNotFollowing = resultNotFollowing.filter(
            (like) => !uniqueLikesIds.has(like.userId)
        );

        result.push(resultCurrentUser);
        result.push(resultFollowing);
        result.push(filteredResultNotFollowing);

        return result;
    } catch (error) {
        console.error("Error getting likes: ", error);
    }
}

export async function getComments(postId) {
    try {
        const comments = await firebase
            .firestore()
            .collection("comments")
            .orderBy("timestamp", "desc") // Sort by timestamp in descending order
            .where("postId", "==", postId)
            .get();

        const temp = [...comments.docs];
        const result = [];
        temp.forEach((e) => result.push(e.data()));
        return result;
    } catch (error) {
        console.error("Error getting comments: ", error);
    }
}

export async function handleLikePost(postId, user, postLikeList) {
    if (postLikeList.includes(user.userId)) return;
    try {
        const likesRef = firebase.firestore().collection("likes");

        // Create a new comment object
        const newLike = {
            postId: postId,

            userId: user.userId,
            username: user.username.toLowerCase(),
            profilePicture: user.profilePicture,
            verified: user.verified,
            fullname: user.fullname,
            timestamp: serverTimestamp(),
        };

        // Add the new post to Firestore
        const docRef = await likesRef.add(newLike);
        await docRef.update({
            likeId: docRef.id,
        });
        // append to user field: posts
        const currentUserQuery = firebase
            .firestore()
            .collection("posts")
            .doc(postId);

        await currentUserQuery.update({
            likes: FieldValue.arrayUnion(user.userId),
        });
    } catch (error) {
        alert("here");
        console.error("Error adding like: ", error);
    }
}

export async function handleUnlikePost(postId, userId, postLikeList) {
    if (!postLikeList.includes(userId)) return;
    try {
        // Remove the like from the post's 'likes' array
        const currentUserQuery = firebase
            .firestore()
            .collection("posts")
            .doc(postId);

        await currentUserQuery.update({
            likes: FieldValue.arrayRemove(userId),
        });

        // Delete the like from the 'likes' collection in Firestore
        const likeQuery = firebase
            .firestore()
            .collection("likes")
            .where("postId", "==", postId)
            .where("userId", "==", userId);

        const snapshot = await likeQuery.get();
        snapshot.forEach(async (doc) => {
            await doc.ref.delete();
        });
    } catch (error) {
        alert("here");
        console.error("Error removing like: ", error);
    }
}
export async function handleUnlikeReply(replyId, userId) {
    const replyRef = firebase.firestore().collection("replies").doc(replyId);

    await replyRef.update({
        likeCounts: FieldValue.arrayRemove(userId),
    });
}
export async function handleLikeReply(replyId, userId) {
    const replyRef = firebase.firestore().collection("replies").doc(replyId);

    await replyRef.update({
        likeCounts: FieldValue.arrayUnion(userId),
    });
}
export async function handleLikeComment(commentId, userId) {
    const commentRef = firebase
        .firestore()
        .collection("comments")
        .doc(commentId);

    await commentRef.update({
        likeCounts: FieldValue.arrayUnion(userId),
    });
}
export async function handleUnlikeComment(commentId, userId) {
    const commentRef = firebase
        .firestore()
        .collection("comments")
        .doc(commentId);

    await commentRef.update({
        likeCounts: FieldValue.arrayRemove(userId),
    });
}

export async function getReplies(commentId) {
    try {
        const comments = await firebase
            .firestore()
            .collection("replies")
            .orderBy("timestamp", "desc") // Sort by timestamp in descending order
            .where("commentId", "==", commentId)
            .get();

        const temp = [...comments.docs];
        const result = [];
        temp.forEach((e) => result.push(e.data()));
        return result;
    } catch (error) {
        console.error("Error getting Replies: ", error);
    }
}

export async function createReply(
    commentId,
    userId,
    username,
    profilePicture,
    verified,
    replyText
) {
    try {
        const repliesRef = firebase.firestore().collection("replies");

        // Create a new comment object
        const newReply = {
            commentId: commentId,
            likeCounts: [],

            userId: userId,
            username: username.toLowerCase(),
            profilePicture: profilePicture,
            verified: verified,
            replyText: replyText,
            timestamp: serverTimestamp(),
        };

        // Add the new post to Firestore
        const docRef = await repliesRef.add(newReply);
        await docRef.update({
            replyId: docRef.id,
        });
        // append to user field: posts
        const currentUserQuery = firebase
            .firestore()
            .collection("comments")
            .doc(commentId);

        await currentUserQuery.update({
            replies: FieldValue.arrayUnion(docRef.id),
        });
        const replyData = {
            ...newReply,
            commentId: docRef.id,
            timestamp: "just now",
        };
        return replyData;
    } catch (error) {
        console.error("Error adding replies: ", error);
    }
}

export async function createComment(
    postId,
    userId,
    username,
    profilePicture,
    verified,
    commentText
) {
    try {
        const commentsRef = firebase.firestore().collection("comments");
        const timestamp = serverTimestamp();
        // Create a new comment object
        const newComment = {
            postId: postId,
            likeCounts: [],
            replies: [],

            userId: userId,
            username: username.toLowerCase(),
            profilePicture: profilePicture,
            verified: verified,
            commentText: commentText,
            timestamp: timestamp,
        };

        // Add the new post to Firestore
        const docRef = await commentsRef.add(newComment);
        await docRef.update({
            commentId: docRef.id,
        });
        // append to user field: posts
        const currentUserQuery = firebase
            .firestore()
            .collection("posts")
            .doc(postId);

        await currentUserQuery.update({
            comments: FieldValue.arrayUnion(docRef.id),
        });
        // Construct the JSON representation of the comment
        const commentData = {
            ...newComment,
            commentId: docRef.id,
            timestamp: "just now",
        };
        return commentData;
    } catch (error) {
        console.error("Error adding comment: ", error);
    }
}
export async function createHighlight(
    userId,
    img,
    verified,
    userUsername,
    userAva
) {
    try {
        const postsRef = firebase.firestore().collection("highlights");

        // Create a new post object
        const newStory = {
            userUsername: userUsername.toLowerCase(),
            userAva: userAva,
            userId: userId,
            imageUrl: img,
            timestamp: "202w",
            verified: verified,
        };

        // Add the new post to Firestore
        const docRef = await postsRef.add(newStory);
        await docRef.update({
            highlightId: docRef.id,
        });

        // // append to user field: posts
        // const currentUserQuery = firebase
        //     .firestore()
        //     .collection("users")
        //     .doc(userId);
        // // Update the post document with the post's ID
        // await currentUserQuery.update({
        //     stories: FieldValue.arrayUnion(docRef.id),
        // });
    } catch (error) {
        console.error("Error adding post: ", error);
    }
}

export async function createStory(
    userId,
    img,
    verified,
    userUsername,
    userAva
) {
    try {
        const postsRef = firebase.firestore().collection("stories");

        // Create a new post object
        const newStory = {
            userUsername: userUsername.toLowerCase(),
            userAva: userAva,
            userId: userId,
            imageUrl: img,
            timestamp: "20h",
            verified: verified,
        };

        // Add the new post to Firestore
        const docRef = await postsRef.add(newStory);
        await docRef.update({
            storyId: docRef.id,
        });

        // // append to user field: posts
        // const currentUserQuery = firebase
        //     .firestore()
        //     .collection("users")
        //     .doc(userId);
        // // Update the post document with the post's ID
        // await currentUserQuery.update({
        //     stories: FieldValue.arrayUnion(docRef.id),
        // });
    } catch (error) {
        console.error("Error adding post: ", error);
    }
}

export async function createPost(
    userId,
    caption,
    img,
    verified,
    userUsername,
    userAva
) {
    try {
        const postsRef = firebase.firestore().collection("posts");

        const imgUrl = await uploadToImgur(img);

        // Create a new post object
        const newPost = {
            userUsername: userUsername.toLowerCase(),
            userAva: userAva,
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

        // append to user field: posts
        const currentUserQuery = firebase
            .firestore()
            .collection("users")
            .doc(userId);
        // Update the post document with the post's ID
        await docRef.update({
            postId: docRef.id,
        });
        await currentUserQuery.update({
            posts: FieldValue.arrayUnion(docRef.id),
        });
    } catch (error) {
        console.error("Error adding post: ", error);
    }
}

export async function getUserSuggestion(user) {
    const SUGGESTION_NUMBER = 5;
    const following = user.following;
    const followers = user.followers;

    const filterList = [user.userId, ...following].slice(0, 10);

    async function getNewSuggestion() {
        try {
            const snapshot = await firebase
                .firestore()
                .collection("users")
                .where("userId", "not-in", filterList)
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
