const questions = [
    {
        question: "The Viking Age lasted from 800 to 1050 CE.",
        answer: true
    },
    {
        question: "Ragnar Lothbrok was a historical king of Denmark.",
        answer: false
    },
    {
        question: "Vikings primarily spoke Old Norse.",
        answer: true
    },
    {
        question: "Vikings used longships for their explorations.",
        answer: true
    },
    {
        question: "The Vikings discovered North America before Columbus.",
        answer: true
    }
];

let currentQuestion = 0;
let score = 0;

function showQuestion() {
    document.getElementById('question').textContent = questions[currentQuestion].question;
    document.getElementById('result').textContent = '';
    document.getElementById('nextButton').style.display = 'none';
}

function checkAnswer(userAnswer) {
    const correctAnswer = questions[currentQuestion].answer;
    if (userAnswer === correctAnswer) {
        document.getElementById('result').textContent = 'Correct!';
        score++;
    } else {
        document.getElementById('result').textContent = 'Incorrect!';
    }
    document.getElementById('score').textContent = `Score: ${score}`;
    document.getElementById('nextButton').style.display = 'block';
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        document.getElementById('questionContainer').style.display = 'none';
        document.getElementById('result').style.display = 'none';
        document.getElementById('nextButton').style.display = 'none';
        document.getElementById('congrats').style.display = 'block';
        document.getElementById('congrats').textContent += ` Your final score is ${score}.`;
    }
}

document.addEventListener('DOMContentLoaded', showQuestion);

