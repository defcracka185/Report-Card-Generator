"use strict";

/* ================================
   DOM ELEMENTS
================================ */
const studentForm = document.getElementById("studentForm");
const scoresForm = document.getElementById("scoresForm");
const ovrPerformanceForm = document.getElementById("ovrPerformance");
const nextStuInfoBtn = document.getElementById("Next-Student-Form");
const nextScoresFormBtn = document.getElementById("Next-Scores-Form");
const genRepCardBtn = document.getElementById("genRepCardBtn");

// studentInfo DOM elements
const studentName = document.getElementById("studentName");
const grade = document.getElementById("grade");
const age = document.getElementById("age");
const term = document.getElementById("term");
const year = document.getElementById("year");

// scoresForm DOM elements
const englishSba = document.getElementById("english-sba");
const englishExam = document.getElementById("english-exam");
const mathematicsSba = document.getElementById("mathematics-sba");
const mathematicsExam = document.getElementById("mathematics-exam");
const scienceSba = document.getElementById("science-sba");
const scienceExam = document.getElementById("science-exam");
const historySba = document.getElementById("history-sba");
const historyExam = document.getElementById("history-exam");
const owopSba = document.getElementById("owop-sba");
const owopExam = document.getElementById("owop-exam");
const rmeSba = document.getElementById("rme-sba");
const rmeExam = document.getElementById("rme-exam");
const computingSba = document.getElementById("computing-sba");
const computingExam = document.getElementById("computing-exam");
const creativeArtsSba = document.getElementById("creativity-sba");
const creativeArtsExam = document.getElementById("creativity-exam");
// Overall Performance DOM elements
const attendance = document.getElementById("attendance");
const attitude = document.getElementById("attitude");
const character = document.getElementById("character");
const interest = document.getElementById("interest");
const ctRemarks = document.getElementById("ct-remarks");

// COMPUTING DIV FOR UPPER PRIMARY
const comUpperPrimary = document.getElementById("comUpperPrimary");

// Hide forms by default
scoresForm.classList.add("hidden");
ovrPerformanceForm.classList.add("hidden");

/* ================================
   APP STATE
================================ */
const studentInfo = {};

const subjectScores = {};
const subjectsScoresExamMid = {};
const subjectsScoresExamFinal = {};

const ovrPerformanceDetails = {};

/* ================================
   HELPER FUNCTIONS
================================ */

// ================================
// HELPER: Ensure datalist always reopens after selection
// Clears the input value on focus so the dropdown can show again
// ================================
function enableDatalistReopen(inputEl) {
  inputEl.addEventListener("focus", function () {
    this.setAttribute("autocomplete", "off"); // prevent browser autocomplete interference
    this.value = ""; // clear so datalist suggestions always appear
  });
}

// Apply to all datalist-based inputs
enableDatalistReopen(grade); // Class
enableDatalistReopen(year); // Year
enableDatalistReopen(term); // Term
enableDatalistReopen(attitude); // Attitude
enableDatalistReopen(character); // Character
enableDatalistReopen(interest); // Interest
enableDatalistReopen(ctRemarks); // Teacher's remarks

// Functions for computing

function checkScoresFormInputs1() {
  if (
    englishSba.value.trim() &&
    englishExam.value.trim() &&
    mathematicsSba.value.trim() &&
    mathematicsExam.value.trim() &&
    scienceSba.value.trim() &&
    scienceExam.value.trim() &&
    historySba.value.trim() &&
    historyExam.value.trim() &&
    owopSba.value.trim() &&
    owopExam.value.trim() &&
    rmeSba.value.trim() &&
    rmeExam.value.trim() &&
    computingSba.value.trim() &&
    computingExam.value.trim() &&
    creativeArtsSba.value.trim() &&
    creativeArtsExam.value.trim()
  ) {
    nextScoresFormBtn.disabled = false;
    nextScoresFormBtn.classList.remove("btn-disabled");
  } else {
    nextScoresFormBtn.disabled = true;
    nextScoresFormBtn.classList.add("btn-disabled");
  }
}

function checkScoresFormInputs2() {
  if (
    englishSba.value.trim() &&
    englishExam.value.trim() &&
    mathematicsSba.value.trim() &&
    mathematicsExam.value.trim() &&
    scienceSba.value.trim() &&
    scienceExam.value.trim() &&
    historySba.value.trim() &&
    historyExam.value.trim() &&
    owopSba.value.trim() &&
    owopExam.value.trim() &&
    rmeSba.value.trim() &&
    rmeExam.value.trim() &&
    creativeArtsSba.value.trim() &&
    creativeArtsExam.value.trim()
  ) {
    nextScoresFormBtn.disabled = false;
    nextScoresFormBtn.classList.remove("btn-disabled");
  } else {
    nextScoresFormBtn.disabled = true;
    nextScoresFormBtn.classList.add("btn-disabled");
  }
}

//  Function for calculating 70% of examscores
function calcExam(mark) {
  return (mark / 100) * 70;
}

//  Functions for checking inpus
function checkStuInfoInputs() {
  if (
    studentName.value.trim() &&
    grade.value.trim() &&
    age.value.trim() &&
    term.value.trim() &&
    year.value.trim()
  ) {
    nextStuInfoBtn.disabled = false;
    nextStuInfoBtn.classList.remove("btn-disabled");
  } else {
    nextStuInfoBtn.disabled = true;
    nextStuInfoBtn.classList.add("btn-disabled");
  }
}

function checkScoresFormInputsParent() {
  if (studentInfo.class > 3) {
    checkScoresFormInputs1();
  } else {
    checkScoresFormInputs2();
  }
}

function checkOvrPerformanceFormInputs() {
  if (
    attendance.value.trim() &&
    attitude.value.trim() &&
    character.value.trim() &&
    interest.value.trim() &&
    ctRemarks.value.trim()
  ) {
    console.log("I can press Generate Report Card");
    genRepCardBtn.disabled = false;
    genRepCardBtn.classList.remove("btn-disabled");
  } else {
    genRepCardBtn.disabled = true;
    genRepCardBtn.classList.add("btn-disabled");
  }
}

/* ================================
   EVENT LISTENERS
================================ */
// check on every input change
const stuInfoInputs = [studentName, grade, age, term, year];
for (let i = 0; i < stuInfoInputs.length; i++) {
  stuInfoInputs[i].addEventListener("input", checkStuInfoInputs);
}

const scoresFormInputs = [
  englishSba,
  englishExam,
  mathematicsSba,
  mathematicsExam,
  scienceSba,
  scienceExam,
  historySba,
  historyExam,
  owopSba,
  owopExam,
  rmeSba,
  rmeExam,
  computingSba,
  computingExam,
  creativeArtsSba,
  creativeArtsExam,
];

for (let i = 0; i < scoresFormInputs.length; i++) {
  scoresFormInputs[i].addEventListener("input", checkScoresFormInputsParent);
}

const ovrPerformanceInputs = [
  attendance,
  attitude,
  character,
  interest,
  ctRemarks,
];

for (let i = 0; i < ovrPerformanceInputs.length; i++) {
  ovrPerformanceInputs[i].addEventListener(
    "input",
    checkOvrPerformanceFormInputs
  );
}

// On Next button click
nextStuInfoBtn.addEventListener("click", function (event) {
  event.preventDefault();

  // Save student info
  studentInfo.name = studentName.value;
  studentInfo.class = parseInt(grade.value.match(/\d+/)[0], 10);
  studentInfo.age = Number(age.value);
  studentInfo.term = Number(term.value);
  studentInfo.year = Number(year.value);

  //  HIDE COMPUTING WHEN GRADE IS LESS THAN 4
  if (studentInfo.class < 4) {
    comUpperPrimary.classList.add("hidden");
  }

  localStorage.setItem("studentInfo", JSON.stringify(studentInfo));
  console.log("Student Info Saved:", studentInfo);

  // Switch forms
  studentForm.classList.add("hidden");
  scoresForm.classList.remove("hidden");
});

nextScoresFormBtn.addEventListener("click", function (event) {
  event.preventDefault();
  // Save subject scores
  subjectScores.englishSba = Number(englishSba.value);
  subjectScores.englishExam = Number(englishExam.value);
  subjectScores.mathematicsSba = Number(mathematicsSba.value);
  subjectScores.mathematicsExam = Number(mathematicsExam.value);
  subjectScores.scienceSba = Number(scienceSba.value);
  subjectScores.scienceExam = Number(scienceExam.value);
  subjectScores.historySba = Number(historySba.value);
  subjectScores.historyExam = Number(historyExam.value);
  subjectScores.owopSba = Number(owopSba.value);
  subjectScores.owopExam = Number(owopExam.value);
  subjectScores.rmeSba = Number(rmeSba.value);
  subjectScores.rmeExam = Number(rmeExam.value);
  subjectScores.computingSba = Number(computingSba.value);
  subjectScores.computingExam = Number(computingExam.value);
  subjectScores.creativeArtsSba = Number(creativeArtsSba.value);
  subjectScores.creativeArtsExam = Number(creativeArtsExam.value);

  localStorage.setItem("subjectScores", JSON.stringify(subjectScores));
  console.log("Scores Form Saved:", subjectScores);

  subjectsScoresExamMid.englishExam = Number(subjectScores.englishExam);
  subjectsScoresExamMid.mathematicsExam = Number(subjectScores.mathematicsExam);
  subjectsScoresExamMid.scienceExam = Number(subjectScores.scienceExam);
  subjectsScoresExamMid.historyExam = Number(subjectScores.historyExam);
  subjectsScoresExamMid.owopExam = Number(subjectScores.owopExam);
  subjectsScoresExamMid.rmeExam = Number(subjectScores.rmeExam);
  subjectsScoresExamMid.computingExam = Number(subjectScores.computingExam);
  subjectsScoresExamMid.creativeArtsExam = Number(
    subjectScores.creativeArtsExam
  );
  console.log(subjectsScoresExamMid);

  const subjectsScoresExamMidArray = Object.entries(subjectsScoresExamMid);

  console.log(subjectsScoresExamMidArray);

  for (let i = 0; i < subjectsScoresExamMidArray.length; i++) {
    subjectsScoresExamFinal[subjectsScoresExamMidArray[i][0]] = Number(
      Math.round(calcExam(subjectsScoresExamMidArray[i][1]))
    );
  }

  console.log(subjectsScoresExamFinal);

  // ✅ Save to localStorage so it’s available on other pages
  localStorage.setItem(
    "subjectsScoresExamFinal",
    JSON.stringify(subjectsScoresExamFinal)
  );

  // Switch forms
  scoresForm.classList.add("hidden");
  ovrPerformanceForm.classList.remove("hidden");
});

genRepCardBtn.addEventListener("click", function (event) {
  event.preventDefault();

  //  Save OvrPerformance Details
  ovrPerformanceDetails.attendance = attendance.value;
  ovrPerformanceDetails.attitude = attitude.value;
  ovrPerformanceDetails.character = character.value;
  ovrPerformanceDetails.interest = interest.value;
  ovrPerformanceDetails.ctRemarks = ctRemarks.value;

  localStorage.setItem(
    "ovrPerformanceDetails",
    JSON.stringify(ovrPerformanceDetails)
  );
  console.log("Overall Performance Form Saved:", ovrPerformanceDetails);
  console.log(
    `englishSba: ${subjectScores.englishSba}, mathematicsSba: ${subjectScores.mathematicsSba}, scienceSba: ${subjectScores.scienceSba}`
  );

  genRepCardBtn.disabled = true;
  window.location.href = "./RC-F-B.html";
});
