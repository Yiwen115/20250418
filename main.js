const questions = [
  {
    question: "JavaScript 是用來做什麼的？",
    options: ["設計網頁結構", "設計網頁樣式", "實現網頁互動", "管理伺服器"],
    answer: 2
  },
  {
    question: "以下哪個是 JavaScript 的正確變數宣告方式？",
    options: ["var myVar;", "let myVar;", "const myVar;", "以上皆是"],
    answer: 3
  },
  {
    question: "JavaScript 中用於重複執行的語法是什麼？",
    options: ["if", "for", "switch", "try"],
    answer: 1
  },
  {
    question: "如何在 JavaScript 中顯示訊息到瀏覽器的控制台？",
    options: ["console.log()", "alert()", "document.write()", "prompt()"],
    answer: 0
  },
  {
    question: "以下哪個是 JavaScript 的資料型別？",
    options: ["String", "Number", "Boolean", "以上皆是"],
    answer: 3
  }
];

let currentQuestion = 0;

function loadQuestion() {
  const questionElement = document.getElementById("question");
  const options = document.querySelectorAll(".option");

  questionElement.textContent = questions[currentQuestion].question;
  options.forEach((option, index) => {
    option.textContent = questions[currentQuestion].options[index];
  });

  document.getElementById("result").textContent = "";
}

function checkAnswer(selected) {
  const resultElement = document.getElementById("result");
  if (selected === questions[currentQuestion].answer) {
    resultElement.textContent = "答對了！";
    resultElement.style.color = "green";
  } else {
    resultElement.textContent = "答錯了！";
    resultElement.style.color = "red";
  }

  currentQuestion++;
  if (currentQuestion < questions.length) {
    setTimeout(loadQuestion, 1000);
  } else {
    setTimeout(() => {
      resultElement.textContent = "遊戲結束！";
    }, 1000);
  }
}

window.onload = loadQuestion;