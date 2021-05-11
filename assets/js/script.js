// global variables

var scoreBoard = document.getElementById('scoreboard-btn');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

// considered variables 





//  a header stored into the html by javascript

// Select the existing DOM element, <div id="empty-div">, and assign to a new variable
var rootEl = $('#root');

// Create a `<p>` element to store the quote's author and assign to a new variable
var contentEl = $('<p>');

// document.getElementById('#juicyOptions');
// Adds text subtitle, then set parameters target colors
contentEl.text('GOD BLESS AMERICA');



// Create an <h1> tag, appends that to the page to page & assigns its value to variable
var contentText = $('<h1>');

// posts text at header location
contentText.text(
  'WELCOME to our quiz about The United States of America! Here we will test your trivial excellence regarding various random facts about the United States of America!'
);


contentText.attr('style', 'font-size: 35px; color: whitesmoke;');
contentEl.attr('style', 'font-size: 25px;');
// this posts (appends) all of the 
contentText.append(contentEl);
rootEl.append(contentText);
