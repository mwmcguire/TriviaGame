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

// On page load... display Start button
$(document).ready(function() {
    var startButton = $("<button>");
    startButton.attr("id", "start-btn");
    startButton.text("Start Quiz");
    quizContainer.append(startButton);

// Button click to start the game
startButton.click(function() {
    quizContainer.empty();

    // Generate questions...
    var table = $("<table/>").addClass("tbl");
    for (var i = 0; i < questions.length; i++) {
        var row1 = $("<tr/>").addClass("q-row").text(questions[i].ask);
        table.append(row1);
        }
    
    });

    quizContainer.append(table);
    
    var form = $("<form/>", 
            {action:"/myaction" }
        );
    form.append( 
        $("<input>", 
            { type:"radio",  
            name:"a", 
            value: "a" }
        )
    );


    quizContainer.append(form);

});

    // When button is pressed, display questions


    // Time ticks down to answer questions


    // Display submit button


// When submit button is clicked...
var correct = 0;
var incorrect = 0;
var incomplete = 0;

    // Display correct answers, incorrect answers, and unanswered
