
// ! global variables
var resetButton = document.querySelector(".reset-button");
var timerEl = $(".timer");
var buttonContainer = $("#button-container");
var time = 30;
var penalty = 5;
var scoreBoardContainer = document.querySelector("scoreBoardContainer");
var timeInterval;
var currentQuestionsIndex = 0


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
  console.log("clockTick was entered");
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
  };
};

function stopTime() {
  clearInterval(timeInterval);
};

function quizEnd() {
  stopTime();
  $('#success-message').text(`Your score is ${time}`);
  window.location.href = `highscores.html?score=${time}`;
};

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
    };
    $(`#question-container-${questionIndex}`).addClass('d-none');
    $(`#question-container-${questionIndex + 1}`).removeClass('d-none');
  };
};

function setWins() {
  win.textContent = winCounter;
  localStorage.setItem("winCount", winCounter);
  window.location.href = "highscores.html";
};

function setLosses() {
  lose.textContent = loseCounter;
  localStorage.setItem("loseCount", loseCounter);
  window.location.href = "highscores.html";
};

function checkWin() {
  if (chosenWord === blanksLetters.join("")) {
    isWin = true;
  };
}; 

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

function resetGame() {
  // Resets win and loss counts
  winCounter = 0;
  loseCounter = 0;
  // Renders win and loss counts and sets them into client storage
  setWins()
  setLosses()
};

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

function getQuestion() {
  var currentQuestion = quizQuestions[currentQuestionsIndex]
  var questionTitleEl = $("#question-title")
  questionTitleEl.textContent = currentQuestion.question
};