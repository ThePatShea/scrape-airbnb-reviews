var single = require('./single');


// Scrapes the reviews' messages and dates from the inputted string of HTML, generating an array of review info
exports.getReviews = function(fullHTML) {

	// Creates an array where each element contains the block of HTML for a single review
	var regexFind  = new RegExp('text-center-sm(.*?)line-separation', 'g');
	var HTMLArray = fullHTML.match(regexFind);
	var reviewsArray = [];


	// If we don't find any reviews on this page, we've already collected all of this user's reviews
	if (HTMLArray === null) {
		// Returns an empty array, allowing the program to stop scraping and move on to outputting the reviews
		return reviewsArray;
	}


	// Loops through every element of the array, extracting the review's message and date from each HTML block
	var HTMLArrayLength = HTMLArray.length;

	for (var i = 0; i < HTMLArrayLength; i++) {
		// Takes the review's message and date from the HTML block
			var singleMessage = single.getSingle('&lt;p&gt;', '&lt;/p&gt;', HTMLArray[i]);
			var singleDate = single.getSingle('date show-sm\\\\"&gt;', '&lt;/div&gt;', HTMLArray[i]);

		// Creates an object containing the review's message and date, then pushes it to the array of reviews
			var singleReview = {message: singleMessage, date: singleDate};
			reviewsArray.push(singleReview);
	}


	return reviewsArray;
};