// ANCHOR global variables

var correctAnswers = {
  Alabama: "Alabama",
  Hawaii: "Hawaii",
  Alaska: "Alaska",
  Colorado: "Colorado",
  Arizona: "Arizona"
}; //*! object to store our list of correct answers

var initiateBtn = document.querySelector('.initiate-btn');
console.log(initiateBtn)

//*! array of questions


// TODO: function must run the quiz // runs as an immediate window prompt but not when called by add event listener
// //*! runs on click quiz 

function createQuiz() {
  // *! random index fetch
  for (var i = 0; i < quizQuestions.length; i++) {
    var response = window.prompt(quizQuestions[i].question);
    if (response == quizQuestions[i].correctAnswer) {
      scoreBoard++;
      alert("Correct!");
      console.log();
    } else {
      alert("Wrong!");
      console.log();
    }
  }
  alert("you got " + correctAnswers + "/" + quizQuestions.length)

}


document.getElementById("scoreBoardContainer");
function createQuiz(event) {
  console.log(event)
  return ("Your final score is " + finalScore);
};

//*!DO NOT PROVIDE PARENTHESES AFTER THE FUNCTION NAME OR IT WILL CALL THE FUNCTION IMMEDIATELY
initiateBtn.addEventListener('click', createQuiz);
console.log("This button works");

var finalScore = correctAnswers + quizQuestions.length

// ANCHOR considered variables 

// var scoreBoard = document.getElementById('scoreboard-btn');
// console.log(scoreBoard)





//*! Select the existing DOM element, <div id="empty-div">, and assign to a new variable
var rootEl = $('#root');

//*! Create a <p>` element to store the quote's author and assign to a new variable
var contentEl = $('<p>');

//*! Adds text subtitle, then set parameters target colors
contentEl.text('💖 GOD BLESS AMERICA 💖');



//*! Create an <h1> tag, appends that to the page to page & assigns its value to variable
var contentText = $('<h1>')

//*! posts text at header location
contentText.text(
  'WELCOME to our quiz about The United States of America! Here we will test your trivial excellence regarding various random facts about the United States of America!'
);

// TODO: var endGameScore = [];  TODO THIS WILL LIKELY BE ANOTHER OBJECT OR ARRAY TO PASS OUR FINAL SCORE INTO



// TODO: complete the build quiz function
buildQuiz();



// //*! displays quiz right away 
// *addEventLister?

function buildQuiz() { }



// TODO: function must run the quiz 
// //*! runs on click quiz 
runQuiz();
// TODO: define 


// TODO: this must be summoned when we click the ("scoreboard-btn") ; must retrieve scoreboard
//*! on submit, show results
function fetchScoreBoard() { }

// *! grabs two buttons on landing page
document.getElementById("scoreboard-btn").addEventListener('click', fetchScoreBoard());


// TODO: utilize these
var quizContainer = document.getElementById("quiz")
var scoreBoardContainer = document.getElementById("scoreBoard")
var initiateProtocolButton = document.getElementById("initiate_btn")


// *! a couple of font style modifiers onto the filler texts
contentText.attr('style', 'font-size: 35px; color: whitesmoke;');
contentEl.attr('style', 'font-size: 25px;');
// ANCHOR this posts (appends) all of the changes
// *! posts & appends all changes
contentText.append(contentEl);
rootEl.append(contentText);
