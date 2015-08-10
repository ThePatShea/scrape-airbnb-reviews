# Airbnb Review Scraper
##### Created by Pat Shea for Karma's programming test

---

### Quick Start
	
1. Make sure you have [PhantomJS 2.0.0](http://phantomjs.org) installed on your computer
2. Type <i><b>npm install</b></i> in your command line
3. Type <i><b>node scrape</b></i> in your command line
4. Navigate to the <i><b>output</b></i> directory to see a JSON file containing your newly-scraped Airbnb reviews

---

### Modifying Input Parameters

The [parameters.json](./parameters.json) file allows you to modify the program's behavior by changing its 2 input parameters:

1. <b>userId:</b>
  * <b>Purpose:</b> Decides which Airbnb user's reviews we will scrape
  * <b>Allowed Values:</b> Any Airbnb user's Id
  * <b>Default Value:</b> "737319" (Kellee's Airbnb Id)
2. <b>outputToFile:</b>
  * <b>Purpose:</b> Decides whether or not we'll output the scraped reviews to a new JSON file
  * <b>Allowed Values:</b> "yes" or "no"
  * <b>Default Value:</b> "yes"

---