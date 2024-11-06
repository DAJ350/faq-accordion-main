// Accordion Element
const questionAccordion = document.getElementById("questions-container");

// Question Elements
const questionList = [
  ...questionAccordion.querySelectorAll(".faq-accordion__question-tab"),
];
const firstQuestion = questionList[0];
const secondQuestion = questionList[1];
const thirdQuestion = questionList[2];
const fourthQuestion = questionList[3];

// Active Icon Elements
const activeIconCollection = [
  ...questionAccordion.querySelectorAll(
    ".faq-accordion__question-icon--active"
  ),
];

const activeIconOne = activeIconCollection[0];
const activeIconTwo = activeIconCollection[1];
const activeIconThree = activeIconCollection[2];
const activeIconFour = activeIconCollection[3];

// Inactive Icons
const inactiveIconCollection = [
  ...questionAccordion.querySelectorAll(
    ".faq-accordion__question-icon--inactive"
  ),
];

const inactiveIconOne = inactiveIconCollection[0];
const inactiveIconTwo = inactiveIconCollection[1];
const inactiveIconThree = inactiveIconCollection[2];
const inactiveIconFour = inactiveIconCollection[3];

function toggleActive(e) {
  imageToggle(e);
  e.currentTarget.classList.toggle("faq-accordion__question-tab--active");
  //   console.log(e.currentTarget); Debugging purposes.
  for (question of questionList) {
    if (question === e.currentTarget) {
      continue;
    } else {
      question.classList.remove("faq-accordion__question-tab--active"); // Reduces the max-height if it's not in focus.
      question
        .querySelector(".faq-accordion__question-icon--inactive")
        .classList.add("faq-accordion__question-icon--active-state"); //Ensures plus sign is showing if not in focus.
      question
        .querySelector(".faq-accordion__question-icon--active")
        .classList.remove("faq-accordion__question-icon--active-state"); // Ensures the minus sign is not showing if not in focus.
      question
        .querySelector(".faq-accordion__question-icon--active")
        .classList.add("faq-accordion__question-icon--inactive-state"); // Sets the inactive state (sets display to none) on minus sign icon.
    }
  }
}

function imageToggle(e) {
  const activeIcon = e.currentTarget.querySelector(
    ".faq-accordion__question-icon--active"
  );
  const inactiveIcon = e.currentTarget.querySelector(
    ".faq-accordion__question-icon--inactive"
  );

  //   console.log(activeIcon); Debugging Purposes
  //   console.log(inactiveIcon); Debugging Purposes

  activeIcon.classList.toggle("faq-accordion__question-icon--inactive-state");
  activeIcon.classList.toggle("faq-accordion__question-icon--active-state");

  inactiveIcon.classList.toggle("faq-accordion__question-icon--active-state");
  inactiveIcon.classList.toggle("faq-accordion__question-icon--inactive-state");
}

questionList.forEach((questionItem) => {
  questionItem.addEventListener("click", toggleActive);
});
