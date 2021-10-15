"use strict";

// #region Part 1
// Create a function that accepts a GitHub username, and returns a promise that resolves returning just the date of the last commit that user made

const headers = {
	// Authorization: "ghp_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
	Accept: "application/vnd.github.v3+json",
};

function dateOfLastCommit(username) {
	return fetch(`https://api.github.com/users/${username}/events/public`, {
		headers,
	}).then((eventRes) =>
		eventRes.json().then((eventJson) => {
			console.log("Event JSON", eventJson);
			// If the request was unsuccessful, throw the error object GitHub gave us.
			if (!eventRes.ok) throw eventJson;

			// Look for the first event that has the type "PushEvent"
			// Returns undefined if one isn't found.
			const lastPush = eventJson.find((event) => event.type === "PushEvent");

			// No PushEvent was found... Abort!
			if (!lastPush) throw "Could not find last commit!";

			// #region Technically, this would be *more* correct
			// const commits = lastPush.payload.commits;
			// return fetch(commits[commits.length - 1].url, { headers }).then(
			//   (commitRes) =>
			//     commitRes.json().then((commitJson) => {
			//       if (!commitRes.ok) throw commitJson;
			//       return new Date(commitJson.commit.committer.date);
			//     })
			// );
			// #endregion

			// The created_at property is a string... Convert it to a date object and return it!
			return new Date(lastPush.created_at);
		})
	);
}

const coolPeople = [
	"kennethhowell",
	// "douglas-codeup",
	// "Git-Software-Services",
	// "larrycastillo2009",
	// "shanshan-su",
];

for (const username of coolPeople) {
	dateOfLastCommit(username)
		.then((date) => {
			// Create a nicely formatted date string
			const formattedDate = date.toLocaleString("en-US", {
				dateStyle: "full",
				timeStyle: "short",
			});

			console.log(
				`✔️ %c${username}%c's last commit was made on %c${formattedDate}`,
				"color: #e06c75; font-size: 1.1em; font-weight: bold",
				"color: #abb2bf;",
				"color: #e5c07b"
			);
		})
		.catch((err) => console.error("☠️", err));
}

// #endregion

// #region Part 2
// Write a function named wait that accepts a number as a parameter, and returns a promise that resolves after the passed number of milliseconds.
// As a bonus make sure the promise resolves with the milliseconds in return, so you can make the console log message more dynamic.

function wait(timeMs) {
	return new Promise((resolve, reject) => {
		// #region Reject Condition
		if (typeof timeMs !== "number")
			reject("Hey... Those aren't milliseconds... ಠ_ಠ");
		// #endregion
		setTimeout(() => resolve(timeMs), timeMs);
	});
}

wait(1000).then((timeMs) =>
	console.log(`You'll see this after ${timeMs} milliseconds.`)
);

wait(3000).then((timeMs) =>
	console.log(`You'll see this after ${timeMs} milliseconds.`)
);

// #region Reject Example
wait("arst")
	.then(() => console.log("You won't see this"))
	.catch((err) => console.error("☠️", err));
// #endregion

// #endregion
