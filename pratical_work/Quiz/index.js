class Question {
  constructor(question, choices, answer) {
    this.question = question;
    this.choices = choices;
    this.answer = answer;
  };
  displayQuestion() {
    question.innerHTML = this.question;
    for (let i = 0; i < this.choices.length; i++)
    {
      const choice = document.getElementById("choice" + i);
      choice.innerHTML = this.choices[i];
    }
  };
}

const questions = [
  new Question(
    "Quelle méthode Javascript permet de filtrer les éléments d'un tableau",
    ["indexOf()", "map()", "filter()", "reduce()"],
    "filter()"
  ),
  new Question(
    "Quelle méthode Javascript permet de vérifier si un élément figure dans un tableau",
    ["isNaN()", "includes()", "findIndex()", "isOdd()"],
    "includes()"
  ),
  new Question(
    "Quelle méthode transforme du JSON en un objet Javascript ?",
    ["JSON.parse()", "JSON.stringify()", "JSON.object()", "JSON.toJS"],
    "JSON.parse()"
  ),
  new Question(
    "Quel objet Javascript permet d'arrondir à l'entier le plus proche",
    ["Math.ceil()", "Math.floor()", "Math.round()", "Math.random()"],
    "Math.round()"
  ),
];

let indexActual = 0;

let numberOfResponses = 0;

const numberOfQuestions = questions.length;

function displayGoodQuestion() {
  questions[indexActual].displayQuestion();
  progress.innerHTML = `Question ${indexActual + 1} sur ${numberOfQuestions}`
}

function displayEnd() {
  quiz.innerHTML = `
  <h1>QUIZ TERMINE !</h1>
  <h3>Votre score est de : ${numberOfResponses} / ${numberOfQuestions}</h3>
  `;
}

function changeQuestion(numberInputUser) {
  if (questions[indexActual].choices[numberInputUser] == questions[indexActual].answer)
    numberOfResponses++;
  indexActual++;
  if (indexActual == numberOfQuestions)
    displayEnd();
  else
    displayGoodQuestion();
}

const Events = {
  load: () => {
    window.addEventListener("DOMContentLoaded", () => {
      displayGoodQuestion();
      setTimeout(Events.question, 0);
    });
  },
  question: () => {
    for (let i = 0; i < numberOfQuestions; i++)
    {
      const guess = document.getElementById("guess" + i);
      guess.addEventListener("click", () => {
          changeQuestion(i);
      });
    }
  },
}

Events.load();