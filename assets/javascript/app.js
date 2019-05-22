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

function createChoices(choice) {
    var choiceBtn = $(" <input />")
            .attr({
                type: 'radio',
                name: 'rbtnCount',
                class: 'button'
            });
    var choiceLabel = $('<label>').text(choice);

    
    return $('<div>').append(choiceLabel, choiceBtn);
}

// ==========================================================================

// Timer
var maxTime = 30;
var intervalId;
var timer = $("<h3>");
timer.attr("id", "timer");

function startTimer() {
    intervalId = setInterval(decrement, 1000);
}

function decrement() {
    maxTime--;
    timer.text("Time Remaining: " + maxTime);
    $("#quiz").prepend(timer);
    if (maxTime === 0) {
        displayResults();
    }
}

// Function to display results
var correct = 0;
var incorrect = 0;
var unanswered = 0;

function displayResults() {
    clearInterval(intervalId);
    $("#quiz").html("<ul><li>Correct: " + correct + "</li><li>Incorrect: " + incorrect + "</li><li>Unanswered: " + unanswered + "</li></ul>");
}


// ==========================================================================

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
        var questionTable = $("<table>").addClass("q-tbl");
        for (var i = 0; i < questions.length; i++) {
            var questionRow = $("<tr>").addClass("q-row").text(questions[i].ask);
            questionTable.append(questionRow);

            // and answer choices...
            var choicesRow = $("<tr>").addClass("c-row");
            var choicebuttons = questions[i].choices.map(createChoices);
            questionTable.append(choicebuttons);
            }

        quizContainer.append(questionTable);
        
        
        // Display submit button
        var submitButton = $("<button>");
        submitButton.attr("id", "submit-btn");
        submitButton.text("Submit");
        quizContainer.append(submitButton);
    
        // When submit button is clicked...
        // Display number of correct answers, incorrect answers, and unanswered
        submitButton.click(function() {
            displayResults();
        });

    });

}); 