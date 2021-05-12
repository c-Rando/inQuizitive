// ANCHOR global variables

var correctAnswers = {
  Alabama: "Alabama",
  Hawaii: "Hawaii",
  Alaska: "Alaska",
  Colorado: "Colorado",
  Arizona: "Arizona"
}; //*? object to store our list of correct answers

   //*? array of questions
var quizQuestions = [
  {
    question: "_____ workers built the first rocket to put humans on the moon.",
    answers: {
      a: "Alabama",
      b: "Arizona",
      c: "New Jersey"
    },
    correctAnswer: "a"
  },
  {
    question: "_____ is the only state that grows coffee.",
    answers: {
      a: "Georgia",
      b: "Florida",
      c: "Hawaii"
    },
    correctAnswer: "c"
  },
  {
    question: "The state of _____ could fit into Alaska 425 times.",
    answers: {
      a: "Vermont",
      b: "Rhode Island",
      c: "Connecticut"
    },
    correctAnswer: "c"
  },
  {
    question: "_____ was home to World’s First Rodeo was held on July 4th, 1869.",
    answers: {
      a: "Colorado",
      b: "Texas",
      c: "Mississippi"
    },
    correctAnswer: "c"
  },
  {
    question:  "_____ leads the nation in copper production.",
    answers: {
      a: "Colorado",
      b: "Texas",
      c: "Mississippi"
    },
    correctAnswer: "c"
  },
];




var scoreBoard = document.getElementById('btn-primary');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

// ANCHOR considered variables 




// Select the existing DOM element, <div id="empty-div">, and assign to a new variable
var rootEl = $('#root');

// Create a <p>` element to store the quote's author and assign to a new variable
var contentEl = $('<p>');

// Adds text subtitle, then set parameters target colors
contentEl.text('💖 GOD BLESS AMERICA 💖');



// Create an <h1> tag, appends that to the page to page & assigns its value to variable
var contentText = $('<h1>')

// posts text at header location
contentText.text(
  'WELCOME to our quiz about The United States of America! Here we will test your trivial excellence regarding various random facts about the United States of America!'
);

var endGameScore = []; //*? THIS WILL LIKELY BE ANOTHER OBJECT OR ARRAY TO PASS OUR FINAL SCORE INTO




buildQuiz();



// //*! displays quiz right away
function buildQuiz() { }
// //*! runs on click quiz 
// runQuiz();

//*! on submit, show results
function showResults() { }

document.getElementById("btn-danger").addEventListener('click', runQuiz());

var quizContainer = document.getElementById("quiz")
var scoreBoardContainer = document.getElementById("scoreBoard")
var initiateProtocolButton = document.getElementById("btn-danger")


contentText.attr('style', 'font-size: 35px; color: whitesmoke;');
contentEl.attr('style', 'font-size: 25px;');


// ANCHOR this posts (appends) all of the 


contentText.append(contentEl);
rootEl.append(contentText);
