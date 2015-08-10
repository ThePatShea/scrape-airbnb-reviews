var parameters = require ('./parameters');
var reviews = require('./reviews');
var phantom = require('phantom');


// Grabs the data we want from a specific page of reviews, then passes the data along to be parsed/formatted/saved
exports.getPage = function(pageNum, scrapeReviews) {

	// Constructs the URL based on the userId in our parameters and the page number we want to scrape from
	var reviewPageUrl = 'https://www.airbnb.com/users/review_page/' + parameters.userId + '?page=' + pageNum + '&role=guest';

	// Utilizes PhantomJS to load our URL
	phantom.create(function(ph) {
		return ph.createPage(function(page) {
			return page.open(reviewPageUrl, function(status) {
	
				// Goes into a sandboxed web page, loaded from our URL, to grab the content we want
				return page.evaluate(function() {

					// Returns all the content between the <pre> tags, giving us everything we need from this page
					return document.getElementsByTagName('PRE')[0].innerHTML;

				}, function(response) {
					// Parses through the scraped content to generate an array of reviews
					var reviewsArray = reviews.getReviews(response);

					// Adds the new reviews to the array of all scraped reviews, then begins the scraping process for the next page
    				scrapeReviews(reviewsArray);
    				
        			ph.exit();
				});
			});
		});
	});
};