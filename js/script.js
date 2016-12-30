// Creating an array of objects with Quote data
var quoteData = [{
        quote: '... But where did the lighter fluid come from...?',
        source: 'Arrested Development',
        tags: ['Illusions', 'Magic', 'Mystery'],
        author: 'GOB'
    },
    {
        quote: 'Any amount of cheese before a date is too much cheese',
        source: 'It\'s Always Sunny in Philadelphia',
        tags: ['Dating Advice', 'Nutrition'],
        author: 'Dennis Reynolds'
    },
    {
        quote: 'You\’re not my friend, you\’re a Decepticon!',
        source: 'Archer',
        author: 'Pamela Poovey'
    },
    {
        quote: 'I\'m feeling pretty good. Pretty, pretty, pretty, pretty good',
        source: 'Curb Your Enthusiasm',
        tags: ['Psychology'],
        author: 'Larry David'
    },
    {
        quote: 'The worst thing about prison? ... Was - was the dementors',
        source: 'The Office',
        tags:['The Streets', 'Life Lessons'],
        author:'Prison Mike'
    },
    {
      quote:'Wubba lubba dub dub',
      source: 'Rick and Morty',
      tags:'Philosophy',
      author: 'Rick Sanchez'
    },
    {
      quote: 'Dude, suckin\' at something is the first step at being sorta good at something',
      source:'Adventure Time',
      tags:['Life Lessons', 'Inspiration'],
      author:'Jake the Dog'
    }
];

// empty html variable for contructing the html
var html = '';

// empty viewedQuotes array
var viewedQuotes = [];

// Set time interval
var intervalTime = 5000;

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
    if (quoteData.length === 0) {
        // quote data is equal to the viewedQuotes array
        quoteData = viewedQuotes;
        // set viewedQuotes to empty
        viewedQuotes = [];
    }
    // Return the spliced quoteData
    return randomQuote;
}

// Print function
function printQuote() {
    // Stores the random quote into a variable
    var quoteContent = getRandomQuote();
    // Generates the HTML message
    // Adds the quote HTML
    var html = '<p class="quote">'  + quoteContent.quote + '</p>\n';


    // Adds the source HTML
    html += '<p class="source">'
    if (quoteContent.author) {
      // If the year property exists, add the tags HTML
      html += '\n<span class="author"><em>' + quoteContent.author + '</em>,</span>\n';
    }
        // Adds the source information
    html += quoteContent.source + '</p>\n';





    // Checks to see if the tags property exists
    if (quoteContent.tags) {
        // If the tags property exists, add the tags HTML
        html += '\n<span class="tags">' + quoteContent.tags.join(', ') + '</span>\n';
    }
    // Takes the generated HTML and injects it into .quote-box
    document.getElementById('quote-box').innerHTML = html;
    // call the reset timer function to reset the setInterval time
    resetTimer();
    // call the random background color function
    getRandomColor();

}

// Reset the timer for printQuote
function resetTimer() {
    if (timer) {
        window.clearInterval(timer);
        timer = window.setInterval(printQuote, intervalTime);
    }
}

// Trigger printQuote on a timer
var timer = window.setInterval(printQuote, intervalTime);


// Adding Event listener to loadQuote button -- On click the printQuote function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
