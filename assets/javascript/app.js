// GLOBAL

const quizContainer = $("#quiz");
let questions = [
    { ask: "What color is the sky?",
      choices: ["Green", "Red", "Blue"],
      answer: "Blue"
    },

    { ask: "What color is the ocean?",
      choices: ["Green", "Red", "Blue"],
      answer: "Blue"
    },

    { ask: "What color is the grass?",
      choices: ["Green", "Red", "Blue"],
      answer: "Green"
    }
]

console.log(questions);


// Timer
var maxTime = 60;
var intervalId;
var timer = $("<h3>");
timer.attr("id", "timer");

function startTimer() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}

function decrement() {
    maxTime--;
    timer.text("Time Remaining: " + maxTime);
    $("#quiz").prepend(timer);
}


// On page load... display Start button
$(document).ready(function() {
    var startButton = $("<button>");
    startButton.attr("id", "start-btn");
    startButton.text("Start Quiz");
    quizContainer.append(startButton);


// Button click to start the game
startButton.click(function() {
    quizContainer.empty();

    // Time ticks down to answer questions
    startTimer();

    // Generate questions...
    for (var i = 0; i < questions.length; i++) {
        var questionDiv = $("<div>");
        questionDiv.text(questions[i].ask);
        quizContainer.append(questionDiv);

        // and answers...
       // quizContainer.append(questions[i].choices);
        }
    
    
    // Display submit button
    var submitButton = $("<button>");
    submitButton.attr("id", "submit-btn");
    submitButton.text("Submit");
    quizContainer.append(submitButton);
    });

});


// When submit button is clicked...
var correct = 0;
var incorrect = 0;
var incomplete = 0;

   
    // Display correct answers, incorrect answers, and unanswered
