// TODO: write a function that retrieves highschores form local storage 
//   function getWins() {
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

// display on page

// call your function RIGHT under the function 

