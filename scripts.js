const responses = [
  "Yes - definitely",
  "Most likely",
  "Don't count on it",
  "My reply is no",
  "Outlook not so good",
  "Ask again later",
];

const number8 = document.querySelector("#number8");
const question = document.querySelector("#question");
const questionContainer = document.querySelector("#question-container");
const magicEightBall = document.querySelector("#magic-eight-ball");

magicEightBall.addEventListener("click", function () {
  // get the question
  const qText = question.value;
  console.log(qText);
  // show the question
  questionContainer.textContent = qText;
  question.value = "";
  // pick a rand response
  const num = Math.floor(Math.random() * responses.length);
  console.log(responses[num]);
  // print the response
  number8.textContent = responses[num];
});
