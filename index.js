const QUIZ = {
  name: "Presidents Quiz",
  description: "What do you know about American Presidents?",
  questions: [
    {
      text: "Who was the first president?",
      answers: ["Lincoln", "Jefferson", "Washington", "Madison"],
      correct: 2
    },
   {
      text: "Who is the current president?",
      answers: ["Lincoln", "Jefferson", "Trump", "Madison"],
      correct: 2
    }
  ]
}

let current = 0;
let score = 0;
$("#title").text(QUIZ.name);

function displayQuestion() {
  $("#question").text(QUIZ.questions[current].text);
  let answers = "";
  for (let i=0; i<QUIZ.questions[current].answers.length; i++) {
    answers += `<input type='radio' name='answer' value=${i}>${QUIZ.questions[current].answers[i]} <br>`;
  }
  $("#answers").append(answers);
}

displayQuestion();