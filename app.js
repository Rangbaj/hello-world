function populate() {
    if (quiz.isEnded()) {
        showscores();
    }
    else {
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;
        
        var choices = quiz.getQuestionIndex().choices;
        for(var i=0; i< choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("bt" + i, choices[i]);
        }
        
        showProgress();
    }
};

function guess(Id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};

function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element=document.getElementById("progress");
    element.innerHTML = "Question" + currentQuestionNumber + "of" + quiz.questions.length;
};

function showscores() {
    var gameoverHTML = "<h1>Result</h1>";
    gaveoverHTML+= "<h2 id='score'>Your Scores:"+quiz.score +"</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameoverHTML;
};


//create questions
var question = [
    new Question("what is the Capital of india?",["New Delhi","Mumbai","Jaipur","Kolkata"],"New Delhi"),
];






var quiz = new Quiz(questions);

populate();
