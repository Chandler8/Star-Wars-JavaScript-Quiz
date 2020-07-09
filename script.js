// Define my global variables
var container = document.querySelector(".container");

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
