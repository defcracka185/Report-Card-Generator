"use strict";

// ✅ Retrieve saved data from localStorage
const studentInfo = JSON.parse(localStorage.getItem("studentInfo"));
const subjectScores = JSON.parse(localStorage.getItem("subjectScores"));
const ovrPerformanceDetails = JSON.parse(
  localStorage.getItem("ovrPerformanceDetails")
);
const subjectsScoresExamFinal = JSON.parse(
  localStorage.getItem("subjectsScoresExamFinal")
);

const scoresFormInputs = JSON.parse(localStorage.getItem("scoresFormInputs"));

// DOM ELEMENTS
// Promotion Class
const promClass = document.getElementById("promotion-class");

// Primary OR JHS
const priOrJhs = document.getElementById("primary-jhs");
// === SUBJECTS ===

// English
const rcEngSba = document.getElementById("rc-eng-sba");
const rcEngExam = document.getElementById("rc-eng-exam");
const rcEngTotal = document.getElementById("rc-eng-total");
const rcEngGrade = document.getElementById("rc-eng-grade");
const rcEngAverage = document.getElementById("rc-eng-average");
const rcEngRemarks = document.getElementById("rc-eng-remarks");

// Listening & Speaking
const rcListenSba = document.getElementById("rc-listen-sba");
const rcListenExam = document.getElementById("rc-listen-exam");
const rcListenTotal = document.getElementById("rc-listen-total");
const rcListenGrade = document.getElementById("rc-listen-grade");
const rcListenAverage = document.getElementById("rc-listen-average");
const rcListenRemarks = document.getElementById("rc-listen-remarks");

// Reading
const rcReadSba = document.getElementById("rc-read-sba");
const rcReadExam = document.getElementById("rc-read-exam");
const rcReadTotal = document.getElementById("rc-read-total");
const rcReadGrade = document.getElementById("rc-read-grade");
const rcReadAverage = document.getElementById("rc-read-average");
const rcReadRemarks = document.getElementById("rc-read-remarks");

// Writing
const rcWriteSba = document.getElementById("rc-write-sba");
const rcWriteExam = document.getElementById("rc-write-exam");
const rcWriteTotal = document.getElementById("rc-write-total");
const rcWriteGrade = document.getElementById("rc-write-grade");
const rcWriteAverage = document.getElementById("rc-write-average");
const rcWriteRemarks = document.getElementById("rc-write-remarks");

// Mathematics
const rcMathSba = document.getElementById("rc-math-sba");
const rcMathExam = document.getElementById("rc-math-exam");
const rcMathTotal = document.getElementById("rc-math-total");
const rcMathGrade = document.getElementById("rc-math-grade");
const rcMathAverage = document.getElementById("rc-math-average");
const rcMathRemarks = document.getElementById("rc-math-remarks");

// Science
const rcSciSba = document.getElementById("rc-sci-sba");
const rcSciExam = document.getElementById("rc-sci-exam");
const rcSciTotal = document.getElementById("rc-sci-total");
const rcSciGrade = document.getElementById("rc-sci-grade");
const rcSciAverage = document.getElementById("rc-sci-average");
const rcSciRemarks = document.getElementById("rc-sci-remarks");

// History
const rcHistSba = document.getElementById("rc-hist-sba");
const rcHistExam = document.getElementById("rc-hist-exam");
const rcHistTotal = document.getElementById("rc-hist-total");
const rcHistGrade = document.getElementById("rc-hist-grade");
const rcHistAverage = document.getElementById("rc-hist-average");
const rcHistRemarks = document.getElementById("rc-hist-remarks");

// OWOP
const rcOwopSba = document.getElementById("rc-owop-sba");
const rcOwopExam = document.getElementById("rc-owop-exam");
const rcOwopTotal = document.getElementById("rc-owop-total");
const rcOwopGrade = document.getElementById("rc-owop-grade");
const rcOwopAverage = document.getElementById("rc-owop-average");
const rcOwopRemarks = document.getElementById("rc-owop-remarks");

// RME
const rcRmeSba = document.getElementById("rc-rme-sba");
const rcRmeExam = document.getElementById("rc-rme-exam");
const rcRmeTotal = document.getElementById("rc-rme-total");
const rcRmeGrade = document.getElementById("rc-rme-grade");
const rcRmeAverage = document.getElementById("rc-rme-average");
const rcRmeRemarks = document.getElementById("rc-rme-remarks");

// Computing
const rcCompSba = document.getElementById("rc-comp-sba");
const rcCompExam = document.getElementById("rc-comp-exam");
const rcCompTotal = document.getElementById("rc-comp-total");
const rcCompGrade = document.getElementById("rc-comp-grade");
const rcCompAverage = document.getElementById("rc-comp-average");
const rcCompRemarks = document.getElementById("rc-comp-remarks");

// Creative Arts
const rcArtsSba = document.getElementById("rc-arts-sba");
const rcArtsExam = document.getElementById("rc-arts-exam");
const rcArtsTotal = document.getElementById("rc-arts-total");
const rcArtsGrade = document.getElementById("rc-arts-grade");
const rcArtsAverage = document.getElementById("rc-arts-average");
const rcArtsRemarks = document.getElementById("rc-arts-remarks");

// Physical Education
const rcPeSba = document.getElementById("rc-pe-sba");
const rcPeExam = document.getElementById("rc-pe-exam");
const rcPeTotal = document.getElementById("rc-pe-total");
const rcPeGrade = document.getElementById("rc-pe-grade");
const rcPeAverage = document.getElementById("rc-pe-average");
const rcPeRemarks = document.getElementById("rc-pe-remarks");

// === TOTALS ===
const rcTotalSba = document.getElementById("rc-total-sba");
const rcTotalExam = document.getElementById("rc-total-exam");
const rcTotalScore = document.getElementById("rc-total-score");
const rcTotalGrade = document.getElementById("rc-total-grade");
const rcTotalAverage = document.getElementById("rc-total-average");
const rcTotalRemarks = document.getElementById("rc-total-remarks");

// === OVERALL PERFORMANCE ===
const rcAttendance = document.getElementById("rc-attendance");
const rcAttendanceOutof = document.getElementById("rc-attendance-outof");
const rcAttitude = document.getElementById("rc-attitude-value");
const rcConduct = document.getElementById("rc-conduct-value");
const rcInterest = document.getElementById("rc-interest-value");
const rcRemarks = document.getElementById("rc-remarks-value");
const rcFees = document.getElementById("rc-fees");
const rcBill = document.getElementById("rc-bill");
const rcHeadteacher = document.getElementById("rc-headteacher");

rcEngSba.textContent = subjectScores.englishSba;
rcEngExam.textContent = subjectsScoresExamFinal.englishExam;
rcEngTotal.textContent =
  Number(subjectScores.englishSba) +
  Number(subjectsScoresExamFinal.englishExam);
rcEngGrade.textContent = grade(rcEngTotal.textContent)[0];
rcEngRemarks.textContent = grade(rcEngTotal.textContent)[1];

rcMathSba.textContent = subjectScores.mathematicsSba;
rcMathExam.textContent = subjectsScoresExamFinal.mathematicsExam;
rcMathTotal.textContent =
  Number(subjectScores.mathematicsSba) +
  Number(subjectsScoresExamFinal.mathematicsExam);
rcMathGrade.textContent = grade(rcMathTotal.textContent)[0];
rcMathRemarks.textContent = grade(rcMathTotal.textContent)[1];

rcSciSba.textContent = subjectScores.scienceSba;
rcSciExam.textContent = subjectsScoresExamFinal.scienceExam;
rcSciTotal.textContent =
  Number(subjectScores.scienceSba) +
  Number(subjectsScoresExamFinal.scienceExam);
rcSciGrade.textContent = grade(rcSciTotal.textContent)[0];
rcSciRemarks.textContent = grade(rcSciTotal.textContent)[1];

// === HISTORY ===
rcHistSba.textContent = subjectScores.historySba;
rcHistExam.textContent = subjectsScoresExamFinal.historyExam;
rcHistTotal.textContent =
  Number(subjectScores.historySba) +
  Number(subjectsScoresExamFinal.historyExam);
rcHistGrade.textContent = grade(rcHistTotal.textContent)[0];
rcHistRemarks.textContent = grade(rcHistTotal.textContent)[1];

// === OWOP ===
rcOwopSba.textContent = subjectScores.owopSba;
rcOwopExam.textContent = subjectsScoresExamFinal.owopExam;
rcOwopTotal.textContent =
  Number(subjectScores.owopSba) + Number(subjectsScoresExamFinal.owopExam);
rcOwopGrade.textContent = grade(rcOwopTotal.textContent)[0];
rcOwopRemarks.textContent = grade(rcOwopTotal.textContent)[1];

// === RME ===
rcRmeSba.textContent = subjectScores.rmeSba;
rcRmeExam.textContent = subjectsScoresExamFinal.rmeExam;
rcRmeTotal.textContent =
  Number(subjectScores.rmeSba) + Number(subjectsScoresExamFinal.rmeExam);
rcRmeGrade.textContent = grade(rcRmeTotal.textContent)[0];
rcRmeRemarks.textContent = grade(rcRmeTotal.textContent)[1];

// === COMPUTING ===

if (studentInfo.class > 3) {
  rcCompSba.textContent = subjectScores.computingSba;
  rcCompExam.textContent = subjectsScoresExamFinal.computingExam;
  rcCompTotal.textContent =
    Number(subjectScores.computingSba) +
    Number(subjectsScoresExamFinal.computingExam);
  rcCompGrade.textContent = grade(rcCompTotal.textContent)[0];
  rcCompRemarks.textContent = grade(rcCompTotal.textContent)[1];
}
// === CREATIVE ARTS ===
rcArtsSba.textContent = subjectScores.creativeArtsSba;
rcArtsExam.textContent = subjectsScoresExamFinal.creativeArtsExam;
rcArtsTotal.textContent =
  Number(subjectScores.creativeArtsSba) +
  Number(subjectsScoresExamFinal.creativeArtsExam);
rcArtsGrade.textContent = grade(rcArtsTotal.textContent)[0];
rcArtsRemarks.textContent = grade(rcArtsTotal.textContent)[1];

//  Calculating the total sba(30%) based on whether grade is greater than 3
if (studentInfo.grade > 3) {
  rcTotalSba.textContent =
    subjectScores.englishSba +
    subjectScores.mathematicsSba +
    subjectScores.scienceSba +
    subjectScores.historySba +
    subjectScores.owopSba +
    subjectScores.rmeSba +
    subjectScores.computingSba +
    subjectScores.creativeArtsSba;
} else {
  rcTotalSba.textContent =
    subjectScores.englishSba +
    subjectScores.mathematicsSba +
    subjectScores.scienceSba +
    subjectScores.historySba +
    subjectScores.owopSba +
    subjectScores.rmeSba +
    subjectScores.creativeArtsSba;
}

//  Calculating the total exam score(70%) based on whether grade is greater than 3

if (studentInfo.grade > 3) {
  rcTotalExam.textContent =
    subjectsScoresExamFinal.englishExam +
    subjectsScoresExamFinal.mathematicsExam +
    subjectsScoresExamFinal.scienceExam +
    subjectsScoresExamFinal.historyExam +
    subjectsScoresExamFinal.owopExam +
    subjectsScoresExamFinal.rmeExam +
    subjectsScoresExamFinal.computingExam +
    subjectsScoresExamFinal.creativeArtsExam;
} else {
  rcTotalExam.textContent =
    subjectsScoresExamFinal.englishExam +
    subjectsScoresExamFinal.mathematicsExam +
    subjectsScoresExamFinal.scienceExam +
    subjectsScoresExamFinal.historyExam +
    subjectsScoresExamFinal.owopExam +
    subjectsScoresExamFinal.rmeExam +
    subjectsScoresExamFinal.creativeArtsExam;
}

//  Calculating the total score(100%) based on whether grade is greater than 3

if (studentInfo.grade > 3) {
  rcTotalScore.textContent =
    Number(rcEngTotal.textContent) +
    Number(rcMathTotal.textContent) +
    Number(rcSciTotal.textContent) +
    Number(rcHistTotal.textContent) +
    Number(rcOwopTotal.textContent) +
    Number(rcRmeTotal.textContent) +
    Number(rcCompTotal.textContent) +
    Number(rcArtsTotal.textContent);
} else {
  rcTotalScore.textContent =
    Number(rcEngTotal.textContent) +
    Number(rcMathTotal.textContent) +
    Number(rcSciTotal.textContent) +
    Number(rcHistTotal.textContent) +
    Number(rcOwopTotal.textContent) +
    Number(rcRmeTotal.textContent) +
    Number(rcArtsTotal.textContent);
}

promClass.textContent = `BASIC ${studentInfo.class + 1}`;
rcAttendance.textContent = ovrPerformanceDetails.attendance;
rcAttitude.textContent = `${ovrPerformanceDetails.attitude}`;
rcConduct.textContent = `${ovrPerformanceDetails.character}`;
rcInterest.textContent = `${ovrPerformanceDetails.interest}`;
rcRemarks.textContent = `${ovrPerformanceDetails.ctRemarks}`;
//  FUNCTION TO ASSIGN GRADE
function grade(total) {
  if (total >= 80) return ["A1", "Excellent"];
  else if (total >= 70) return ["B2", "Very Good"];
  else if (total >= 65) return ["B3", "Good"];
  else if (total >= 60) return ["C4", "Credit"];
  else if (total >= 55) return ["C5", "Credit"];
  else if (total >= 50) return ["C6", "Credit"];
  else if (total >= 45) return ["D7", "Pass"];
  else if (total >= 40) return ["E8", "Pass"];
  else return ["F9", "Fail"];
}

//  Determing the class level of the report card

if (studentInfo.class >= 7) {
  priOrJhs.textContent = "JHS";
} else if (studentInfo.class >= 4) {
  priOrJhs.textContent = "Upper Primary";
} else if (studentInfo.class >= 1) {
  priOrJhs.textContent = "Lower Primary";
} else {
  priOrJhs.textContent = "Pre-School";
}
function printReportCard() {
  const frontPage = document.getElementById("report-card-fp").innerHTML;
  const backPage = document.getElementById("report-card-bp").innerHTML;

  const myWindow = window.open("", "", "width=1200,height=800");
  myWindow.document.write(`
    <html>
      <head>
        <title>Report Card</title>
        <link rel="stylesheet" type="text/css" href="RC-F-B.css">
        <style>
          @page { size: A4 landscape; margin: 0; }
          body { margin: 0; }
        </style>
      </head>
      <body>
        ${frontPage}
        <div style="page-break-after: always;"></div>
        ${backPage}
      </body>
    </html>
  `);

  myWindow.document.close();

  myWindow.onload = function () {
    myWindow.focus();
    myWindow.print();
    myWindow.close();
  };
}

// Javascript for Front Page
// DOM ELEMENTS

const childName = document.getElementById("childName");
const basic = document.getElementById("basic");
const term = document.getElementById("term");
const year = document.getElementById("year");

childName.textContent = studentInfo.name;

year.textContent = studentInfo.year;

const numberMap = [
  [1, "One"],
  [2, "Two"],
  [3, "Three"],
  [4, "Four"],
  [5, "Five"],
  [6, "Six"],
  [7, "Seven"],
  [8, "Eight"],
  [9, "Nine"],
];

for (let i = 0; i < numberMap.length; i++) {
  if (numberMap[i][0] === studentInfo.class) {
    basic.textContent = numberMap[i][1];
  }

  if (numberMap[i][0] === studentInfo.term) {
    term.textContent = numberMap[i][1];
  }
}
