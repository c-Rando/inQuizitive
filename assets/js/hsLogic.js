//  prints to page gets scores, sorts them and creates a leaderboard
function printHighscores() {
    var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];

    highscores.sort(function (a, b) {
        return b.score - a.score;
    });
    highscores.forEach(function (score) {
        var liTag = document.createElement("li");
        liTag.textContent = score.initials + " - " + score.score;

        var olEl = document.getElementById("highscores");
        olEl.appendChild(liTag);
    });
};

var userScore;

function clearHighscores() {
    window.localStorage.removeItem("highscores");
    window.location.reload();
};

function allStorage() {

    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
        values.push({ name: keys[i], value: localStorage.getItem(keys[i]) });
    }

    return values;
}

function getHighScore() {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    userScore = params.score;
    $('#highscore').text(`Your score was: ${userScore}`);
}

function drawScoreboard() {
    const allScores = allStorage();
    for (score of allScores) {
        $('#scoreboard').append(`
            <div class="score">
                <span class="score-name"> ${score.name}</span> - 
                <span class="score-value"> ${score.value}</span>
            </div>
        `);
    }
}

getHighScore();
drawScoreboard();

function submitScore ()  {
    const userFullname = $('#userFullname').val();

    if (!userFullname) {
        return alert('Please enter your name to save to the scoreboard');
    }
    $('#submit-score-container').hide();

    localStorage.setItem(userFullname, userScore);
    $('#scoreboard').append(`
        <div class="score">
            <span class="score-name"> ${userFullname}</span> - 
            <span class="score-value"> ${userScore}</span>
        </div>
    `);
}