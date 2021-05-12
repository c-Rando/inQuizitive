
//TODO: DECLARE global variables

var timer = 150sec;

//TODO: DECLARE VARIABLES TO KEEP TRACK OF OUT QUIZ STATE (QUESTIONS INDEX TIME and variables )


//TODO: DECLARE variables to reference dom elements


//TODO: start quiz function to start quiz


//TODO: put timer stuff in here to run function and get quiz items


//TODO: create a function to render questions for the user


function getQ(){

    
    
    //TODO: get current questions object from the array
    
    //TODO: update you html with current question or RENDER TO PAGE

    //TODO: clear out any old choices

    //TODO: loop over our choices and create new button for new choices
        //TODO: check out .forEach();
        
    //TODO: DECLARE a click even listener to each choice
    // choice.onclick = qClick -- example

    //TODO: DISPLAY questions on the page 

};

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