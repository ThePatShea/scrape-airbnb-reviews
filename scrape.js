var parameters = require ('./parameters');
var display = require ('./display');
var page = require('./page');


// Creates an empty array that we'll populate with reviews
var allReviews = [];
var pageNum = 0;


// Iterates through every page of reviews, scraping each review until it gathers them all
var scrapeReviews = function(reviewsArray) {

	// Adds the newly-acquired reviews to the existing array of reviews
	allReviews = allReviews.concat(reviewsArray);


	// Scrapes the next page if there are any more reviews left to scrape
	if (reviewsArray.length > 0 || pageNum === 0) {
		pageNum++;
		page.getPage(pageNum, scrapeReviews);

		return;
	}


	// Displays the full array of reviews in the console
	display.displayAllReviews(allReviews);
};


// Lets the user know that the program is running while the data is first loading
console.log('Scraping reviews from Airbnb. Please wait a moment...\n\n\n');


// Sets in motion the process of scraping/formatting/outputting the reviews
scrapeReviews([]);