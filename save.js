var parameters = require ('./parameters');
var fs = require('fs');


// Creates a JSON file containing all the reviews, then stores the file in a directory
exports.saveReviewFile = function(allReviews) {
	// Declares the filename for the new JSON file and specifies the name of the directory to save the file to
	var newFileName = parameters.userId + '.json';
	var outputDirectory = './output';


	// Creates the 'output' directory if it doesn't already exist
	if (!fs.existsSync(outputDirectory)) {
    	fs.mkdirSync(outputDirectory);
	}


	// Writes the reviews to a new JSON file, then stores the file in the specified directory
	fs.writeFile(outputDirectory + '/' + newFileName, JSON.stringify(allReviews), function (err) {
		if (err) throw err;

		console.log('\n\nYour reviews have been saved to the file "' + newFileName + '" in the "output" directory.');
	});
};