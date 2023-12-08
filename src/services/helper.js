import React from "react";

export const calculateTimeDifference = (timestamp) => {
    if (timestamp === "just now") return timestamp;
    const currentDate = new Date();
    const postDate = timestamp.toDate(); // Convert Firebase timestamp to JavaScript Date object

    const differenceInMilliseconds = currentDate - postDate;
    const millisecondsInMinute = 60 * 1000;
    const millisecondsInHour = 60 * millisecondsInMinute;
    const millisecondsInDay = 24 * millisecondsInHour;
    const millisecondsInWeek = 7 * millisecondsInDay;

    if (differenceInMilliseconds < millisecondsInHour) {
        const minutes = Math.floor(
            differenceInMilliseconds / millisecondsInMinute
        );

        if (minutes < 2) return `just now`;
        return `${minutes}m`;
    } else if (differenceInMilliseconds < millisecondsInDay) {
        const hours = Math.floor(differenceInMilliseconds / millisecondsInHour);
        return `${hours}h`;
    } else if (differenceInMilliseconds < millisecondsInWeek) {
        const days = Math.floor(differenceInMilliseconds / millisecondsInDay);
        return `${days}d`;
    } else {
        // Format date to 'Month Day, Year' format
        const options = { year: "numeric", month: "long", day: "numeric" };
        return postDate.toLocaleDateString(undefined, options);
    }
};

export const userHasStory = (userIdToCheck, stories) => {
    const foundStory = stories.find(
        (story) =>
            story.userUsername.toLowerCase() === userIdToCheck.toLowerCase()
    );

    return foundStory || false;
};
