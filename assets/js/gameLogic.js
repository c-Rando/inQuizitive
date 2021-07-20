
//TODO: DECLARE global variables
var timerEl = $(".timer");
var buttonContainer = $("#button-container");
var time = 30;
var penalty = 5;
var scoreBoardContainer = document.querySelector("scoreBoardContainer");
var timeInterval;

var quizQuestions = [
  {
    question: "_____ workers built the first rocket to put humans on the moon.\n(a): Alabama \n(b): Arizona\n(c): New Jersey ",
    answers: {
      a: "Alabama",
      b: "Arizona",
      c: "New Jersey"
    },
    correctAnswer: "Alabama"
  },
  {
    question: "_____ is the only state that grows coffee.\n(a): Georgia \n(b): Florida\n(c): Hawaii",
    answers: {
      a: "georgia",
      b: "florida",
      c: "hawaii"
    },
    correctAnswer: "hawaii"
  },
  {
    question: "The state of _____ could fit into Alaska 425 times.\n(a): Vermont \n(b): Rhode Island\n(c): Connecticut",
    answers: {
      a: "vermont",
      b: "rhodeIsland",
      c: "connecticut"
    },
    correctAnswer: "rhodeIsland"
  },
  {
    question: "_____ was home to World’s First Rodeo was held on July 4th, 1869.\n(a): Colorado \n(b): Texas\n(c): Mississippi",
    answers: {
      a: "colorado",
      b: "texas",
      c: "mississippi"
    },
    correctAnswer: "colorado"
  },
  {
    question: "_____ leads the nation in copper production.\n(a): Arizona \n(b): Wyoming\n(c): California",
    answers: {
      a: "arizona",
      b: "wyoming",
      c: "california"
    },
    correctAnswer: "arizona"
  },
];

function clockTick() {
  console.log("clockTick was entered")
  // update time
  time--;
  timerEl.text(`${time} seconds left`);

  // check if user ran out of time
  if (time <= 0) {
    quizEnd();
  };
};

function startGame() {
  isWin = false;
  timeInterval = setInterval(clockTick, 1000);
  $('#start-quiz-container').hide();
  let i = 0;
  for (const question of quizQuestions) {
    $('#questions-container').append(`
      <div id="question-container-${i}" class="${i === 0 ? '' : 'd-none'}">
        <div class="question" id="question">${question.question}</div>
        <br>
        <div class="alternatives">
            ${Object.keys(question.answers).map((key, index) => `
              <div class="alternative">
                <input type="radio" name="alternatives-${i}" id="question-${i}-elem-${index}" value="${question.answers[key]}" checked="checked" />
                <label for="question-${i}-elem-${index}">${question.answers[key]}</label>
              </div>
            `).join('')}
        </div>
        <button class="btn btn-info" onclick="goToNextQuestion(${i})">Next Question</button>
      </div>
    `);
    i++;
  }
};

function stopTime() {
  clearInterval(timeInterval);
}

function quizEnd() {
  stopTime();
  $('#success-message').text(`Your score is ${time}`);
  window.location.href = `highscores.html?score=${time}`;
}

function goToNextQuestion (questionIndex) {
  debugger;
  if (questionIndex >= quizQuestions.length-1) {
    quizEnd();
  } else {
    const answer = $(`input[name='alternatives-${questionIndex}']:checked`).val();
    if (quizQuestions[questionIndex].correctAnswer !== answer) {
      if (time - penalty < 0) {
        time = 0;
        return quizEnd();
      } else {
        time -= penalty;
      }
      $('#error-message').text(`Answer incorrect, ${penalty} points deducted.`);
      setTimeout(() => { $('#error-message').text(''); }, 1000);
    } else {
      $('#success-message').text(`Answer correct! Keep it up!`);
      setTimeout(() => { $('#success-message').text(''); }, 1000);
    }
  
    $(`#question-container-${questionIndex}`).addClass('d-none');
    $(`#question-container-${questionIndex + 1}`).removeClass('d-none');
  }

}

// Updates win count on screen and sets win count to client storage
function setWins() {
  win.textContent = winCounter;
  localStorage.setItem("winCount", winCounter);
  window.location.href = "highscores.html";
}

//  TODO allocate to a new file


// Updates lose count on screen and sets lose count to client storage
function setLosses() {
  lose.textContent = loseCounter;
  localStorage.setItem("loseCount", loseCounter);
  window.location.href = "highscores.html";
}


function checkWin() {
  // If the word equals the blankLetters array when converted to string, set isWin to true
  if (chosenWord === blanksLetters.join("")) {
    // This value is used in the timer function to test if win condition is met
    isWin = true;
  }
}

// Attach event listener to document to listen for key event
document.addEventListener("keydown", function (event) {
  // If the count is zero, exit function
  if (timerCount === 0) {
    return;
  }
  // Convert all keys to lower case
  var key = event.key.toLowerCase();
  var alphabetNumericCharacters = "abcdefghijklmnopqrstuvwxyz0123456789 ".split("");
  // Test if key pushed is letter
  if (alphabetNumericCharacters.includes(key)) {
    var letterGuessed = event.key;
    checkLetters(letterGuessed)
    checkWin();
  }
});






//TODO: DECLARE VARIABLES TO KEEP TRACK OF OUT QUIZ STATE (QUESTIONS INDEX TIME and variables )

function winGame() {
  wordBlank.textContent = "YOU WON!!!🏆 ";
  winCounter++
  setWins()
}
function loseGame() {
  wordBlank.textContent = "GAME OVER";
  loseCounter++
  setLosses()
}
// Bonus: Add reset button
var resetButton = document.querySelector(".reset-button");

function resetGame() {
  // Resets win and loss counts
  winCounter = 0;
  loseCounter = 0;
  // Renders win and loss counts and sets them into client storage
  setWins()
  setLosses()
}
// Attaches event listener to button
// resetButton.addEventListener("click", resetGame);

//TODO: DECLARE variables to reference dom elements


//TODO: start quiz function to start quiz

// call question loop



// function that checks a question click to check each of these buttons
// if value of clicked answer  = correct value, currentQuestion++, if wrong timer- 15 sec
// make card with question title, then make a button for each value inside of the answers object
// <button create, says value, and has underlying attribute value for wahtever the string is 
// ADD AN EVENT LISTENER FOR ADDING A NEW QUESTION WHENEBER OLD BUTTON IS CLICKED  
// assign attribute attr(value, answers.a)

// for each button, give a value to 

//TODO: create a function to render questions for the user




function questionGeneratingLoop() {
  for (var i = 0; i < quizQuestions.length; i++) {
    var response = window.prompt(quizQuestions[i].question);
    if (response == quizQuestions[i].correctAnswer) {
      scoreBoard++;
      alert("Correct!");
      console.log();
    } else {
      alert("Wrong!");
      console.log();
    };
  };
  alert("you got " + correctAnswers + "/" + quizQuestions.length)
};

var currentQuestionsIndex = 0

function getQuestion() {
  var currentQuestion = quizQuestions[currentQuestionsIndex]
  var questionTitleEl = $("#question-title")
  questionTitleEl.textContent = currentQuestion.question
};



// TODO: create function to end quiz

// TODO: clear time interval

// TODO: show a end quiz page

// TODO: show user final score

// TODO: check out methods time.hide or .show to hide and show time and questions


// TODO: function to run time
// display time
// time ++ or time --

// if time hits 0, run endQuiz function

// TODO: create function for highscore

// TODO: write any functions to check how many questions user got right and perform math orhardcoded data to display user score

// TODO: check to see that user inputs user name/ initials into user prompt
// save highscores to user storage
// retrieve highscores from local storage

// TODO: object to store users score page

// TODO: redirect to highscores

// TODO: window.location.highscores.html