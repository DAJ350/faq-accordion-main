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
  // Toggle active class for accordion tab
  e.currentTarget.classList.toggle("faq-accordion__question-tab--active");
  imageToggle(e);

  // Close all other tabs and reset their icons
  questionList.forEach((question) => {
    if (question !== e.currentTarget) {
      question.classList.remove("faq-accordion__question-tab--active");
      question.querySelector(
        ".faq-accordion__question-icon--active"
      ).style.display = "none";
      question.querySelector(
        ".faq-accordion__question-icon--inactive"
      ).style.display = "block";
    }
  });
}

function imageToggle(e) {
  const activeIcon = e.currentTarget.querySelector(
    ".faq-accordion__question-icon--active"
  );
  const inactiveIcon = e.currentTarget.querySelector(
    ".faq-accordion__question-icon--inactive"
  );

  // Toggle display of icons
  if (activeIcon.style.display === "none" || !activeIcon.style.display) {
    activeIcon.style.display = "block";
    inactiveIcon.style.display = "none";
  } else {
    activeIcon.style.display = "none";
    inactiveIcon.style.display = "block";
  }
}

// Attach event listener to each question tab
questionList.forEach((question) =>
  question.addEventListener("click", toggleActive)
);


questionList.forEach((questionItem) => {
  questionItem.addEventListener("click", toggleActive);
});
