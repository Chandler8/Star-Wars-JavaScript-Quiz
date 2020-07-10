// Define my global variables
var container = document.querySelector(".container");
var timer = document.querySelector("#timer");
var ifCorrect = document.querySelector("#ifCorrect");
var q = 0;
var count = 60;



// Questions to answer and the list of answers beneath them
var questionArr = [
    {
        question: "Who built C-3P0?",
        answers: [
            "1. Luke Skywalker",
            "2. Anakin Skywalker",
            "3. Chewbaca",
            "4. R2-D2"
        ],
        correctAnswer: "2. Anakin Skywalker"
    },
    {
        question: "What is the name of the planet where clones are built for the Republic?",
        answers: [
            "1. Hoth",
            "2. Naboo",
            "3. Kashyyyk",
            "4. Kamino"
        ],
        correctAnswer: "4. Kamino"
    },
    {
        question: "Who is Jango Fett's son?",
        answers: [
            "1. Boba Fett",
            "2. Jango Fett Jr",
            "3. Chewbaca",
            "4. Qui-Gon Jinn"
        ],
        correctAnswer: "1. Boba Fett"
    },
    {
        question: "Who is the secret sith apprentice of Darth Sidious aka Chancellor Palpatine?",
        answers: [
            "1. Darth Revan",
            "2. Count Dooku",
            "3. Darth Maul",
            "4. Darth Vader"
        ],
        correctAnswer: "3. Darth Maul"
    },
    {
        question: "Which infamous command did Chancellor Palpatine give that instructed the Clone troopers to kill all Jedi?",
        answers: [
            "1. Execute Order 66",
            "2. End the rule of two",
            "3. Execute Order 11",
            "4. Prepare them all for early retirement!"
        ],
        correctAnswer: "1. Execute Order 66"
    },
    {
        question: "How old is Yoda when he dies?",
        answers: [
            "1. 300 years old",
            "2. 600 years old",
            "3. 900 years old",
            "4. 1200 years old"
        ],
        correctAnswer: "3. 900 years old"
    }
];

// Main "Start" button functionality
(function startScreen() {

    startBtn.addEventListener("click", function () {
        startTimer();
        quizQuestions();

    });
})();

// Commence the counter
function startTimer() {
    var interval = setInterval(function () {
        count--;
        // check if time runs out
        if (count <= 0) {
            clearInterval(interval);
            count = 0;
            allDone();
        }
        // check if all questions answered
        if (q >= questionArr.length) {
            clearInterval(interval);
            allDone();
        }
        timer.innerHTML = count;
    }, 1000);
}

// Create a loop that goes through my array of questions
function quizQuestions() {

    // Set the main container to empty
    container.innerHTML = "";

    // Need to create a central section that holds the Questions 
    var askQuestion = document.createElement("h2");
    askQuestion.textContent = questionArr[q].question;
    container.appendChild(askQuestion);

    // Create buttons for different answers
    for (var a = 0; a < questionArr[q].answers.length; a++) {
        var options = document.createElement("button");
        options.textContent = questionArr[q].answers[a];
        container.appendChild(options);
        options.addEventListener("click", checkAnswer);
    }

    // check the input of the player
    function checkAnswer(e) {
        if (e.target.textContent === questionArr[q].correctAnswer) {
            q++;
            popUp("Right, you are!");
            quizQuestions();
        } else {
            count -= 15;
            q++;
            popUp("The incorrect answer, you have guessed!");
            quizQuestions();
        }
    }
}

// Tell user if the answer is correct or incorrect
function popUp(label) {
    ifCorrect.innerHTML = label;
    ifCorrect.style.borderTop = "1px solid #ccc";
    setTimeout(function () {
        ifCorrect.innerHTML = "";
        ifCorrect.style.borderTop = "none";
    }, 1000);
}

// display user score and give ability to input name/initials
function allDone() {
    // clear the container
    container.innerHTML = "";

    // Create container on page
    var header = document.createElement("h2");
    header.textContent = "Quiz Over!";
    container.appendChild(header);

    var finalScore = document.createElement("p");
    finalScore.textContent = "Your final score is: " + count;
    container.appendChild(finalScore);

    var inits = document.createElement("p");
    inits.setAttribute("id", "inits");
    inits.textContent = "Enter Name or Initials:"
    var form = document.createElement("form");
    var input = document.createElement("input");
    var submit = document.createElement("button");
    submit.setAttribute("id", "submitBtn");
    submit.textContent = "Submit";

    container.appendChild(inits);
    container.appendChild(form);
    form.appendChild(input);
    form.appendChild(submit);

    // Utilize local storage to allow player to keep their score/name on page
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        var user = input.value.toUpperCase();
        var result = { userName: user, score: count };
        var playerScores = localStorage.getItem('newscore') || '[]';
        var newscores = [...JSON.parse(playerScores), result]
            .sort((a, b) => b.score - a.score)
            .slice(0, 5);
        localStorage.setItem('newscore', JSON.stringify(newscores));

        // Go to results page
        location.replace("results.html");
    });
}
