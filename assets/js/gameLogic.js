
//TODO: DECLARE global variables




// Updates win count on screen and sets win count to client storage
function setWins() {
    win.textContent = winCounter;
    localStorage.setItem("winCount", winCounter);
  }


// Updates lose count on screen and sets lose count to client storage
function setLosses() {
    lose.textContent = loseCounter;
    localStorage.setItem("loseCount", loseCounter);
  }
  

  function getWins() {
    // Get stored value from client storage, if it exists
    var storedWins = localStorage.getItem("winCount");
    // If stored value doesn't exist, set counter to 0
    if (storedWins === null) {
      winCounter = 0;
    } else {
      // If a value is retrieved from client storage set the winCounter to that value
      winCounter = storedWins;
    }
    //Render win count to page
    win.textContent = winCounter;
  }

  
function getlosses() {
    var storedLosses = localStorage.getItem("loseCount");
    if (storedLosses === null) {
      loseCounter = 0;
    } else {
      loseCounter = storedLosses;
    }
    lose.textContent = loseCounter;
  }

  
function checkWin() {
    // If the word equals the blankLetters array when converted to string, set isWin to true
    if (chosenWord === blanksLetters.join("")) {
      // This value is used in the timer function to test if win condition is met
      isWin = true;
    }
  }

  // Attach event listener to document to listen for key event
document.addEventListener("keydown", function(event) {
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
// Calls init() so that it fires when page opened

function init() {
    getWins();
    getlosses();
}

init();

function winGame() {
    wordBlank.textContent = "YOU WON!!!🏆 ";
    winCounter++
    startButton.disabled = false;
    setWins()
}

function loseGame() {
    wordBlank.textContent = "GAME OVER";
    loseCounter++
    startButton.disabled = false;
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
  resetButton.addEventListener("click", resetGame);



//TODO: DECLARE variables to reference dom elements

var timerEl = document.querySelector("timerEl");

var quizJuiceBox = document.querySelector("quizJuiceBox");

var scoreBoardContainer = document.querySelector("scoreBoardContainer");



//TODO: start quiz function to start quiz


initiateBtn.addEventListener("click", startGame);


function startGame() {
    isWin = false;
    timerCount = 10;
    // Prevents start button from being clicked when round is in progress
    startButton.disabled = true;
    renderBlanks()
    startTimer()
}

startGame();

//TODO: put timer stuff in here to run function and get quiz items

/// The setTimer function starts and stops the timer and triggers winGame() and loseGame()
function startTimer() {
    // Sets timer
    timer = setInterval(function () {
        timerCount--;
        timerElement.textContent = timerCount;
        if (timerCount >= 0) {
            // Tests if win condition is met
            if (isWin && timerCount > 0) {
                // Clears interval and stops timer
                clearInterval(timer);
                winGame();
            }
        }
        // Tests if time has run out
        if (timerCount === 0) {
            // Clears interval
            clearInterval(timer);
            loseGame();
        }
    }, 1000);
}


//TODO: create a function to render questions for the user

var quizQuestions = [
    {
      question: "_____ workers built the first rocket to put humans on the moon.\n(a): Alabama \n(b): Arizona\n(c): New Jersey ",
      answers: {
        alabama: "a",
        arizona: "b",
        newJersey: "c"
      },
      correctAnswer: "a"
    },
    {
      question: "_____ is the only state that grows coffee.\n(a): Georgia \n(b): Florida\n(c): Hawaii",
      answers: {
        georgia: "a",
        florida: "b",
        hawaii: "c"
      },
      correctAnswer: "c"
    },
    {
      question: "The state of _____ could fit into Alaska 425 times.\n(a): Vermont \n(b): Rhode Island\n(c): Connecticut",
      answers: {
        vermont: "a",
        rhodeIsland: "b",
        connecticut: "c"
      },
      correctAnswer: "b"
    },
    {
      question: "_____ was home to World’s First Rodeo was held on July 4th, 1869.\n(a): Colorado \n(b): Texas\n(c): Mississippi",
      answers: {
        colorado: "a",
        texas: "b",
        mississippi: "c"
      },
      correctAnswer: "a"
    },
    {
      question: "_____ leads the nation in copper production.\n(a): Arizona \n(b): Wyoming\n(c): California",
      answers: {
        arizona: "a",
        wyoming: "b",
        california: "c"
      },
      correctAnswer: "a"
    },
  ];
  

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
        }
      }
      alert("you got " + correctAnswers + "/" + quizQuestions.length)
    
    }

    //TODO: get current questions object from the array

    //TODO: update you html with current question or RENDER TO PAGE



    //TODO: clear out any old choices



    //TODO: loop over our choices and create new button for new choices


    //TODO: check out .forEach();



    //TODO: DECLARE a click even listener to each choice
    // choice.onclick = qClick -- example


    

    //TODO: DISPLAY questions on the page 



//TODO: create a function for questionClicked() 
function qClicked() {
    // check if user answered correctly

    // if you want, you can decrement time if user is wrong

    // time -= 15

    // create if to check if time has hit - or time is still remaining
    // if (time < 0) {
    //  time  = 0

    // }

    // display time on the page 

    // check to see if answer is correct, if correct move onto desired correct display

    // next comment

    // check to see if the quiz is out of questions

    // if (currentQuestionsIndex = questions.length) {
    //endQuiz();
    // }else{
    // quitQuiz();
    // }

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