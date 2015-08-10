var parameters = require ('./parameters');
var save = require ('./save');


// Displays the full array of all the reviews we've collected
exports.displayAllReviews = function(allReviews) {
	// Displays the array containing every review
	console.log(allReviews.length + ' Reviews:\n_______________\n');
	console.log(allReviews);


	// Saves a JSON file of the review, if we chose to do so in our parameters
	if (parameters.outputToFile === "yes") {
		save.saveReviewFile(allReviews);
	}
};