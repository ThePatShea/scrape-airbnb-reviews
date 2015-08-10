// Extracts a single review's message or date from the inputted HTML block
exports.getSingle = function(singleOpen, singleClose, singleHTML) {

	// Creates an array of info from the HTML block, including an element that contains the review's message or date
	var regexSingle = new RegExp(singleOpen + '(.*?)' + singleClose, 'g');
	var singleArr = regexSingle.exec(singleHTML);


	// Returns the element from the array containing the message or date
	if (singleArr !== null) {
		var single = singleArr[1];
	} else {
		var single = 'none';
	}


	return single;
};