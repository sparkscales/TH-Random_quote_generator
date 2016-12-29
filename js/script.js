// Creating an array of objects with Quote data
var quoteData = [{
        quote: 'quote1',
        source: 'source1',
        tags: ['tags1'],
        year: 'year1'
    },
    {
        quote: 'quote2',
        source: 'source2',
        tags: ['tags2'],
        year: 'year2'
    },
    {
        quote: 'quote3',
        source: 'source3',
        tags: ['tags3'],
        year: 'year3'
    },
    {
        quote: 'quote4',
        source: 'source4',
        year: 'year4'
    },
    {
        quote: 'quote5',
        source: 'source5'
    }
];

// empty html variable for contructing the html
var html = '';

// empty viewedQuotes array
var viewedQuotes = [];

// Set time interval
var intervalTime = 3000;

// Function to generate a random number that is between 0 and the max number
function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
}

// Function to generate a background color
function getRandomColor() {
    // Construct the RGB css property
    var color = 'rgb(';
    color += getRandomNumber(256) + ', ';
    color += getRandomNumber(256) + ', ';
    color += getRandomNumber(256) + ')';
    // Return the background css property for the body element
    return document.body.style.backgroundColor = color;
}
// Function to generatre a random number
function getRandomQuote() {
    // splice a random object within the QuoteData array
    var randomQuote = quoteData.splice(getRandomNumber(quoteData.length), 1)[0];
    // Push the spliced object into the viewedQuotes array
    viewedQuotes.push(randomQuote);
    // Condition - if the quoteData array objects are empty
    if (quoteData.length == 0) {
        // quote data is equal to the viewedQuotes array
        quoteData = viewedQuotes;
        // set viewedQuotes to empty
        viewedQuotes = [];
    }
    // Return the spliced quoteData
    return randomQuote;
}

function printQuote() {
    // Stores the random quote into a variable
    var quoteContent = getRandomQuote();
    // Generates the HTML message
    // Adds the quote HTML
    var html = '<p class="quote">' + quoteContent.quote + '</p>\n';
    // Adds the source HTML
    html += '<p class="source">' + quoteContent.source;
    // Checks to see if the tags property exists
    if (quoteContent.tags) {
        // If the tags property exists, add the tags HTML
        html += '\n<span class="tags">' + quoteContent.tags.join(', ') + '</span>\n';
    }
    // Checks to see if the year property exists
    if (quoteContent.year) {
        // If the year property exists, add the tags HTML
        html += '\n<span class="year">' + quoteContent.year + '</span>\n';
    }
    html += '</p>\n'
        // Takes the generated HTML and injects it into .quote-box
    document.getElementById('quote-box').innerHTML = html;
    // call the random background color function
    resetTimer();
    getRandomColor();

}

function resetTimer() {
    if (timer) {
        window.clearInterval(timer);
        timer = window.setInterval(printQuote, intervalTime);
    }
}

var timer = window.setInterval(printQuote, intervalTime);


// Adding Event listener to loadQuote button -- On click the printQuote function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
