(function(
  questionOne,
  questionTwo,
  questionThree,
  questions,
  randyInt,
  reply,
  randQuestion
) {
  function Question(question, answers, corrAnswer) {
    this.question = question;
    this.answers = answers;
    this.corrAnswer = corrAnswer;
  }

  Question.prototype.displayQuestion = function() {
    console.log(this.question);
  };

  Question.prototype.displayAnswers = function() {
    for (var i = 1; i <= Object.keys(this.answers).length; i++) {
      console.log(i + ": " + this.answers[i]);
    }
  };

  Question.prototype.isCorrect = function(ans) {
    if (ans == this.corrAnswer) {
      console.log("You are correct.");
    } else if (ans === "exit" || ans === "Exit") {
      console.log("Bye");
    } else {
      console.log("Try one more time");
    }
  };

  questionOne = new Question(
    "Are you mad?",
    { 1: "Yes", 2: "No", 3: "Not sure" },
    1
  );

  questionTwo = new Question(
    "Are you tall?",
    { 1: "Yes", 2: "No", 3: "Piss off" },
    2
  );

  questionThree = new Question(
    "Are you deaf?",
    { 1: "Yes", 2: "No", 3: "What" },
    3
  );

  while (true) {
    questions = [questionOne, questionTwo, questionThree];

    randyInt = Math.round(Math.random() * (questions.length - 1));

    randQuestion = questions[randyInt];

    randQuestion.displayQuestion();
    randQuestion.displayAnswers();

    reply = prompt(
      "Select your answer: 1, 2 or 3. Type 'Exit' if you want to exit game"
    );

    randQuestion.isCorrect(reply);

    if (reply === "exit" || reply === "Exit") {
      break;
    }
  }
})();
