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
const saveStuBtn = document.getElementById("saveStudentBtn");
const nextStudentBtn = document.getElementById("nextStudentBtn"); // ✅ NEW

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
const ovrPerformanceDetails = {};

/* ================================
   HELPER FUNCTIONS
================================ */
function enableDatalistReopen(inputEl) {
  inputEl.addEventListener("focus", function () {
    this.setAttribute("autocomplete", "off");
    this.value = "";
  });
}
enableDatalistReopen(grade);
enableDatalistReopen(year);
enableDatalistReopen(term);
enableDatalistReopen(attitude);
enableDatalistReopen(character);
enableDatalistReopen(interest);
enableDatalistReopen(ctRemarks);

function checkScoresFormInputs() {
  const baseInputs = [
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
    creativeArtsSba,
    creativeArtsExam,
  ];

  const requiredInputs =
    studentInfo.class >= 4
      ? [...baseInputs, computingSba, computingExam]
      : baseInputs;

  let allFilled = true;
  for (let i = 0; i < requiredInputs.length; i++) {
    if (!requiredInputs[i].value.trim()) {
      allFilled = false;
      break;
    }
  }

  nextScoresFormBtn.disabled = !allFilled;
  nextScoresFormBtn.classList.toggle("btn-disabled", !allFilled);
}

function calcExam(mark) {
  return (mark / 100) * 70;
}

function calcSubjectTotals(sba, examRaw) {
  const s = Number(sba);
  const e = Number(examRaw);
  const exam70 = Math.round((e * 70) / 100);
  return s + exam70;
}

// ✅ Grade conversion function (WASSCE/GES style)
function getGrade(total) {
  if (total >= 80) return "A1";
  if (total >= 70) return "B2";
  if (total >= 65) return "B3";
  if (total >= 60) return "C4";
  if (total >= 55) return "C5";
  if (total >= 50) return "C6";
  if (total >= 45) return "D7";
  if (total >= 40) return "E8";
  return "F9";
}

function checkStuInfoInputs() {
  const allFilled =
    studentName.value.trim() &&
    grade.value.trim() &&
    age.value.trim() &&
    term.value.trim() &&
    year.value.trim();

  nextStuInfoBtn.disabled = !allFilled;
  nextStuInfoBtn.classList.toggle("btn-disabled", !allFilled);
}

function checkOvrPerformanceFormInputs() {
  const allFilled =
    attendance.value.trim() &&
    attitude.value.trim() &&
    character.value.trim() &&
    interest.value.trim() &&
    ctRemarks.value.trim();

  saveStuBtn.disabled = !allFilled;
  nextStudentBtn.disabled = !allFilled;
  genRepCardBtn.disabled = !allFilled;

  saveStuBtn.classList.toggle("btn-disabled", !allFilled);
  nextStudentBtn.classList.toggle("btn-disabled", !allFilled);
  genRepCardBtn.classList.toggle("btn-disabled", !allFilled);
}

/* ================================
   EVENT LISTENERS
================================ */
// student info inputs
const stuInfoInputs = [studentName, grade, age, term, year];
for (let i = 0; i < stuInfoInputs.length; i++) {
  stuInfoInputs[i].addEventListener("input", checkStuInfoInputs);
}

// scores inputs
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
  scoresFormInputs[i].addEventListener("input", checkScoresFormInputs);
}

// performance inputs
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

/* ================================
   NEXT BUTTON LOGIC
================================ */
nextStuInfoBtn.addEventListener("click", function (event) {
  event.preventDefault();

  studentInfo.name = studentName.value;
  studentInfo.class = parseInt(grade.value.match(/\d+/)[0], 10);
  studentInfo.age = Number(age.value);
  studentInfo.term = Number(term.value);
  studentInfo.year = Number(year.value);

  if (studentInfo.class < 4) {
    comUpperPrimary.classList.add("hidden");
  } else {
    comUpperPrimary.classList.remove("hidden");
  }

  localStorage.setItem("studentInfo", JSON.stringify(studentInfo));

  nextScoresFormBtn.disabled = true;
  nextScoresFormBtn.classList.add("btn-disabled");

  studentForm.classList.add("hidden");
  scoresForm.classList.remove("hidden");
});

nextScoresFormBtn.addEventListener("click", function (event) {
  event.preventDefault();

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

  // ✅ Only include computing for Basic 4 and above
  if (studentInfo.class >= 4) {
    subjectScores.computingSba = Number(computingSba.value);
    subjectScores.computingExam = Number(computingExam.value);
  } else {
    delete subjectScores.computingSba;
    delete subjectScores.computingExam;
  }

  subjectScores.creativeArtsSba = Number(creativeArtsSba.value);
  subjectScores.creativeArtsExam = Number(creativeArtsExam.value);

  localStorage.setItem("subjectScores", JSON.stringify(subjectScores));

  scoresForm.classList.add("hidden");
  ovrPerformanceForm.classList.remove("hidden");
});

/* ================================
   SAVE STUDENT (ONLY SAVE)
================================ */
saveStuBtn.addEventListener("click", function (event) {
  event.preventDefault();

  // collect performance
  ovrPerformanceDetails.attendance = attendance.value;
  ovrPerformanceDetails.attitude = attitude.value;
  ovrPerformanceDetails.character = character.value;
  ovrPerformanceDetails.interest = interest.value;
  ovrPerformanceDetails.ctRemarks = ctRemarks.value;

  const classKey = `B${studentInfo.class}-T${studentInfo.term}-Y${studentInfo.year}`;
  let classDatasets = JSON.parse(localStorage.getItem("classDatasets")) || {};
  if (!classDatasets[classKey]) {
    classDatasets[classKey] = {};
  }

  const studentId = studentInfo.name.trim().toLowerCase().replace(/\s+/g, "_");

  // ✅ Calculate totals + grades + aggregate
  const subjectTotals = {};
  const subjectGrades = {};
  let aggregate = 0;

  const subjectsList = Object.keys(subjectScores);
  for (let i = 0; i < subjectsList.length; i++) {
    const subject = subjectsList[i];
    if (subject.endsWith("Sba")) {
      const baseName = subject.replace("Sba", "");
      const sba = subjectScores[`${baseName}Sba`];
      const exam = subjectScores[`${baseName}Exam`];

      // skip computing if not for this class
      if (baseName === "computing" && studentInfo.class < 4) continue;

      const total = calcSubjectTotals(sba, exam);
      subjectTotals[baseName] = total;

      const grade = getGrade(total);
      subjectGrades[baseName] = grade;

      const num = parseInt(grade.match(/\d+/)[0], 10);
      aggregate += num;
    }
  }

  const studentRecord = {
    id: studentId,
    info: studentInfo,
    scores: subjectScores,
    totals: subjectTotals,
    grades: subjectGrades,
    aggregate: aggregate,
    performance: ovrPerformanceDetails,
  };

  classDatasets[classKey][studentId] = studentRecord;

  // recalc averages
  const studentsInCohort = Object.values(classDatasets[classKey]).filter(
    (record) => record.id
  );
  const totalScores = {};
  const subjectCount = {};
  for (let i = 0; i < studentsInCohort.length; i++) {
    const stu = studentsInCohort[i];
    const subjList = Object.keys(stu.totals);
    for (let j = 0; j < subjList.length; j++) {
      const subject = subjList[j];
      if (!totalScores[subject]) {
        totalScores[subject] = 0;
        subjectCount[subject] = 0;
      }
      totalScores[subject] += stu.totals[subject];
      subjectCount[subject] += 1;
    }
  }
  const averages = {};
  const totalKeys = Object.keys(totalScores);
  for (let i = 0; i < totalKeys.length; i++) {
    const subject = totalKeys[i];
    averages[subject] = Math.round(
      totalScores[subject] / subjectCount[subject]
    );
  }
  classDatasets[classKey]._averages = averages;

  localStorage.setItem("classDatasets", JSON.stringify(classDatasets));
  localStorage.setItem("lastStudent", JSON.stringify({ classKey, studentId }));

  alert(
    `✅ ${studentInfo.name} has been saved successfully. Aggregate: ${aggregate}`
  );
});

/* ================================
   ENTER NEXT STUDENT (RESET)
================================ */
nextStudentBtn.addEventListener("click", function () {
  studentForm.reset();
  scoresForm.reset();
  ovrPerformanceForm.reset();

  studentForm.classList.remove("hidden");
  scoresForm.classList.add("hidden");
  ovrPerformanceForm.classList.add("hidden");

  nextStuInfoBtn.disabled = true;
  saveStuBtn.disabled = true;
  nextStudentBtn.disabled = true;
  genRepCardBtn.disabled = true;
  nextScoresFormBtn.disabled = true;

  nextStuInfoBtn.classList.add("btn-disabled");
  saveStuBtn.classList.add("btn-disabled");
  nextStudentBtn.classList.add("btn-disabled");
  genRepCardBtn.classList.add("btn-disabled");
  nextScoresFormBtn.classList.add("btn-disabled");

  alert("📝 Ready to enter the next student.");
});

/* ================================
   GENERATE REPORT CARD
================================ */
genRepCardBtn.addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href = "./RC-F-B.html";
});
