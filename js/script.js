
// // Create an array of JavaScript objects to hold the data for your quotes.
//
// // Each quote object should have the following properties:
//
// //     A quote property which contains a string: the text of the quote to display on the page
//
// //     A source property which contains a string identifying the creator of the quote.
// //     For example: "Mark Twain" or "Traditional Irish proverb"
//
// //     An optional citation property which contains a string identifying the publication
// //     the quote appears in. For example, "Famous Anonymous Jokes". If there is no known publication,
// //     then do not include this property on the object.
//
// //     An optional year property which contains a number identifying the date of the quote. For example,
// //     1997. If there is no known date, then do not include this property on the object.
//

// // Create a function named getRandomQuote which:
//
// //     selects a random quote object from the quotes array
//
// //     returns the randomly selected quote object
//

//
// // Create a function named printQuote which follows these rules:
//
//
//
//     //     printQuote calls the getRandomQuote function and stores the returned quote object in a variable

//     //     printQuote constructs a string using the different properties of the quote object using the following
//     //     HTML template: <p class="quote"> [quote here] </p> <p class="source"> [source here] <span class="citation">
//     //     [citation here] </span> <span class="year"> [year here] </span> </p>
//


// The object with the quote data

var quoteData = [
  {
    quote: 'quote1',
    source: 'source1',
    citation: 'citation1',
    year: 'year1'
  },
  {
    quote: 'quote2',
    source: 'source2',
    citation: 'citation2',
    year: 'year2'
  },
  {
    quote: 'quote3',
    source: 'source3',
    citation: 'citation3',
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

var html = '';

function getRandomNumber(max){
  // Generates a random number that is between 0 and the max number
  return Math.floor(Math.random() * max);
}

function getRandomQuote() {
  // Returns a random Quote within the object, using the amount of properties within that object as a max number
  return quoteData[getRandomNumber(quoteData.length)];
}

function printQuote() {
// Stores the random quote into a variable
  var quoteContent = getRandomQuote();
// Generates the HTML message
  // Adds the quote HTML
  var html  = '<p class="quote">' + quoteContent.quote + '</p>\n' ;
  // Adds the source HTML
      html += '<p class="source">' + quoteContent.source;
      // Checks to see if the citation property exists
      if (quoteContent.citation) {
        // If the citation property exists, add the citation HTML
        html += '<span class="citation">' + quoteContent.citation + '</span>';
      }
      // Checks to see if the year property exists
      if (quoteContent.year) {
        // If the year property exists, add the citation HTML
        html += '<span class="year">' + quoteContent.year + '</span>';
      }
      html += '</p>'
  // Takes the generated HTML and injects it into .quote-box
  document.getElementById('quote-box').innerHTML = html
}


// Adding Event listener to loadQuote button -- On click the printQuote function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
