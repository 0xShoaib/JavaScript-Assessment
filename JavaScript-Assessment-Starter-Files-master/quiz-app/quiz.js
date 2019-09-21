let quizContainer = document.getElementById("quiz");

const createQuizItem = (ques, id, option) => {
  let quizItem = document.createElement("section");
  quizItem.className = "quiz-item";

  let quizQuestion = document.createElement("h3");
  let questionText = document.createTextNode(ques);
  quizQuestion.appendChild(questionText);
  quizItem.appendChild(quizQuestion);

  for (var i = 1; i <= 4; i++) {
    var optionWrapper = document.createElement("div");
    optionWrapper.className = "option-wrapper";

    let label = document.createElement("label");

    let inputBox = document.createElement("input");
    inputBox.type = "radio";
    inputBox.required = "true";
    inputBox.name = "q" + id;
    inputBox.value = i;

    let optionValue = document.createElement("p");
    let optionValueText = document.createTextNode(option);
    optionValue.appendChild(optionValueText);

    label.appendChild(inputBox);
    label.appendChild(optionValue);
    optionWrapper.appendChild(label);

    quizItem.appendChild(optionWrapper);
  }

  return quizItem;
};

$.get("http://5d76bf96515d1a0014085cf9.mockapi.io/quiz", data => {
  window.localStorage.setItem("QuizData", JSON.stringify(data));
});

var responseData = JSON.parse(window.localStorage.getItem("QuizData"));
console.log(responseData);
for (var y = 0; y < responseData.length; y++) {
  for (var z = 0; z < responseData[y].options; z++) {
    console.log(responseData[y].options[y]);
  }

  quizContainer.appendChild(
    createQuizItem(
      responseData[y].question,
      responseData[y].id,
      responseData[y].options[y]
    )
  );
}

let btnSection = document.createElement("section");
btnSection.id = "submit-section";
let submitBtn = document.createElement("input");
submitBtn.id = "btn-submit";
submitBtn.type = "submit";
submitBtn.value = "Submit";
btnSection.appendChild(submitBtn);
quizContainer.appendChild(btnSection);
