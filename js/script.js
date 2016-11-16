// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// Create an array of JavaScript objects to hold the data for your quotes.

// Each quote object should have the following properties:

//     A quote property which contains a string: the text of the quote to display on the page

//     A source property which contains a string identifying the creator of the quote.
//     For example: "Mark Twain" or "Traditional Irish proverb"

//     An optional citation property which contains a string identifying the publication
//     the quote appears in. For example, "Famous Anonymous Jokes". If there is no known publication,
//     then do not include this property on the object.

//     An optional year property which contains a number identifying the date of the quote. For example,
//     1997. If there is no known date, then do not include this property on the object.


var data = [{
    quote: 'quote1',
    source: 'source1',
    citation: 'citation1',
    year: 'year1'
}, {
    quote: 'quote2',
    source: 'source2',
    citation: 'citation2',
    year: 'year2'
}, {
    quote: 'quote3',
    source: 'source3',
    citation: 'citation3',
    year: 'year3'
}, {
    quote: 'quote4',
    source: 'source4',
    year: 'year4'
}, {
    quote: 'quote5',
    source: 'source5',
    citation: '',
}];

var quote;
var message;



// Create a function named getRandomQuote which:

//     selects a random quote object from the quotes array

//     returns the randomly selected quote object

function getRandomQuote() {
    // generate a random number based on the amount of properties available within the object
    var randoNumber = Math.floor(Math.random() * data.length);
    // return the array in the randomly assigned index position
    return data[randoNumber];
}


// Create a function named printQuote which follows these rules:

function printQuote() {

    //     printQuote calls the getRandomQuote function and stores the returned quote object in a variable
    var quote = getRandomQuote();
    //     printQuote constructs a string using the different properties of the quote object using the following
    //     HTML template: <p class="quote"> [quote here] </p> <p class="source"> [source here] <span class="citation">
    //     [citation here] </span> <span class="year"> [year here] </span> </p>

    var message = '<p class="quote">' + quote.quote + '</p>\n' + '<p class="source">' + quote.source;
    if ("citation" in quote) {
        message += '<span class="citation">' + quote.citation + '</span>';
    }
    if ("year" in quote) {
        message += '<span class="year">' + quote.year + '</span>';
        //     printQuote doesn't add a <span class="citation"> for a missing citation or a <span class="year"> if the year
        //     property is missing
    }
    message += '</p>'

    //     printQuote displays the final HTML string to the page. You can use the following JS snippet to accomplish
    //     that: document.getElementById('quote-box').innerHTML

    document.getElementById('quote-box').innerHTML = message;

}
