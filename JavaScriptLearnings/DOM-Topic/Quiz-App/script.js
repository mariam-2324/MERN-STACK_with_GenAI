const questions = [{
    "que" : "Which of the following is the markup language?",
    "a" : "HTML",
    "b" : "CSS",
    "c" : "Javascript",
    "d" : "PHP",
    "correct" : "a"
 },
 {
    "que" : "What year was JavaScript launched?",
    "a" : "1996",
    "b" : "1995",
    "c" : "1994",
    "d" : "none of the above",
    "correct" : "b"
 },
 {
    "que" : "What does CSS stands for?",
    "a" : "Hypertext Markup Language",
    "b" : "Cascading Style Sheet",
    "c" : "Jason Object Notation",
    "d" : "Hellicopter Terminal Motorboats",
    "correct" : "b"
 }
]

// const AppName = document.getElementsByTagName("h1");
// AppName.innerText = "Quiz App";
//ye reload karne par dekhe ga...
let index = 0;
let total = questions.length;
let right = 0;
let wrong = 0;
const quesBox = document.getElementById("quesBox")
const optionInputs = document.querySelectorAll(".options")

const endQuiz = () => {
   const box = document.getElementById("box")
   if (!box) return;
   
   box.innerHTML = `
      <div style="text-align: center; color: red; margin-top: 150px; font-size: larger; border: 2px solid #27665a; border-radius: 8px">
        <h3>Thank You for playing the quiz</h3>
        <h2>${right} / ${total} are correct</h2>
      </div>`
}

const loadQuestion = () => {
   if (index === total) {
      return endQuiz()
   }
   reset();

   const data = questions[index]
   quesBox.innerText = `${index + 1}) ${data.que}`;
   optionInputs[0].nextElementSibling.innerText = data.a;
   optionInputs[1].nextElementSibling.innerText = data.b;
   optionInputs[2].nextElementSibling.innerText = data.c;
   optionInputs[3].nextElementSibling.innerText = data.d;
}

const submitQuiz = () => {
   // If user clicks after quiz ended, ignore.
   if (index >= total) return;

   const data = questions[index];
   const ans = getAnswer();

   if (ans === data.correct) {
      right++;
   } else {
      wrong++;
   }

   index++;
   loadQuestion();
}


const getAnswer = () => {
   let answer;
   optionInputs.forEach((input) => {
      if (input.checked) {
         answer = input.value;
      }
   })
   return answer;
}

// Returns the background color that is currently applied to the page.
const getSelectedColors = () => {
   return getComputedStyle(document.body).backgroundColor;
}


const reset = () => {
   optionInputs.forEach((input) => {
      input.checked = false;
   })
}

// Expose for inline onclick="submitQuiz()"
window.submitQuiz = submitQuiz

loadQuestion();


document.body.classList.add("background-image");
// document.body.style.backgroundImage = "url('QuizAppImage.jpg')";
// document.body.style.backgroundPosition = "center";
// document.body.style.backgroundRepeat = "no-repeat";
// document.body.style.backgroundSize = "cover";
// document.body.style.backgroundAttachment = "fixed";

// const AppName = document.getElementsByTagName("h1");
// AppName.innerText = "Quiz App";