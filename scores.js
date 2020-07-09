// Here we incorporate the needed JS functionality that powers the results.html page.
// Primary objective is to save users initials/name per quiz attempt to local storage, 
// and also feature a means in which one can clear that local storage.

var newScores = document.querySelector("#newScores")

// Run a function to see what is currently inside local storage, if it is not empty, display scores.
if (localStorage.getItem("newscore") === null) {
    newScores.innerHTML = ""
} else {
    var newscore = JSON.parse(localStorage.getItem('newscore'));
    for (var i = 0; i < newscore.length; i++) {
        console.log(newscore[i].userName + ": " + newscore[i].score);
        var scoreList = document.createElement("li");
        scoreList.textContent = newscore[i].userName + " -- " + newscore[i].score;
        newScores.appendChild(scoreList);
    }
}

// clears the score button function in case the user wants to start fresh
function clearScore() {
    localStorage.clear();
    newScores.innerHTML = "";
}