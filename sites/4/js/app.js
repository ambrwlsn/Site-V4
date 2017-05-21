function populate() {
    if (quiz.isEnded()) {
        showScores();
    } else {
        //show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        //show choices
        var choices = quiz.getQuestionIndex().choices;
        for (var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);        }

            showProgress();
    }
};

function guess(id, guess) {
  var button = document.getElementById(id);
  button.onclick = function() {
    quiz.guess(guess);
    populate();
  }
};

function showProgress() {
  var currentQuestionNumber = quiz.questionIndex + 1;
  var element = document.getElementById("progress");
  element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
}

function showScores() {
    var gameOverHtml = "<h1>Results</h1>";
    gameOverHtml += "<h2 id='score'> Your score: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHtml;
}

var questions = [
    new Question("Who is the nicest person in the world?", ["Freyja", "Amber", "Adam", "Everybody is horrible"],
        "Everybody is horrible"),
    new Question("What is English weather like?", ["Abysmal", "Alright", "Lovely", "I don't go outside"], "I don't go outside"),
    new Question("What's your favourite type of food?", ["Pizza", "Cake", "Oreos", "Food should be enjoyed, not judged"], "Food should be enjoyed, not judged")
];

var quiz = new Quiz(questions);

populate();
