"use strict";

// ✅ Retrieve last student pointer
const lastStudent = JSON.parse(localStorage.getItem("lastStudent"));
const { classKey, studentId } = lastStudent;

// ✅ Get all class data from localStorage
const classDataSets = JSON.parse(localStorage.getItem("classDatasets")) || {};

// ✅ Pick this student’s record
const studentRecord = classDataSets[classKey][studentId];

// ✅ Break into pieces for convenience
const studentInfo = studentRecord.info;
const subjectScores = studentRecord.scores; // raw SBA + Exam
const subjectTotals = studentRecord.totals; // computed totals
const ovrPerformanceDetails = studentRecord.performance;
const averages = classDataSets[classKey]._averages;

// ========== DOM ELEMENTS ==========
// Promotion Class
const promClass = document.getElementById("promotion-class");

// Primary OR JHS
const priOrJhs = document.getElementById("primary-jhs");

// English
const rcEngSba = document.getElementById("rc-eng-sba");
const rcEngExam = document.getElementById("rc-eng-exam");
const rcEngTotal = document.getElementById("rc-eng-total");
const rcEngGrade = document.getElementById("rc-eng-grade");
const rcEngAverage = document.getElementById("rc-eng-average");
const rcEngRemarks = document.getElementById("rc-eng-remarks");

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

// === TOTALS ===
const rcTotalSba = document.getElementById("rc-total-sba");
const rcTotalExam = document.getElementById("rc-total-exam");
const rcTotalScore = document.getElementById("rc-total-score");
const rcAggregate = document.getElementById("rc-total-grade");

// === OVERALL PERFORMANCE ===
const rcAttendance = document.getElementById("rc-attendance");
const rcAttitude = document.getElementById("rc-attitude-value");
const rcConduct = document.getElementById("rc-conduct-value");
const rcInterest = document.getElementById("rc-interest-value");
const rcRemarks = document.getElementById("rc-remarks-value");

// ================= ASSIGN SUBJECT VALUES =================

// Helper function: scale exam to 70%
function examScaled(rawExam) {
  return Math.round((Number(rawExam) * 70) / 100);
}

// English
rcEngSba.textContent = subjectScores.englishSba;
rcEngExam.textContent = examScaled(subjectScores.englishExam);
rcEngTotal.textContent =
  Number(subjectScores.englishSba) + examScaled(subjectScores.englishExam);
rcEngGrade.textContent = grade(rcEngTotal.textContent)[0];
rcEngRemarks.textContent = grade(rcEngTotal.textContent)[1];
rcEngAverage.textContent = averages.english;

// Mathematics
rcMathSba.textContent = subjectScores.mathematicsSba;
rcMathExam.textContent = examScaled(subjectScores.mathematicsExam);
rcMathTotal.textContent =
  Number(subjectScores.mathematicsSba) +
  examScaled(subjectScores.mathematicsExam);
rcMathGrade.textContent = grade(rcMathTotal.textContent)[0];
rcMathRemarks.textContent = grade(rcMathTotal.textContent)[1];
rcMathAverage.textContent = averages.mathematics;

// Science
rcSciSba.textContent = subjectScores.scienceSba;
rcSciExam.textContent = examScaled(subjectScores.scienceExam);
rcSciTotal.textContent =
  Number(subjectScores.scienceSba) + examScaled(subjectScores.scienceExam);
rcSciGrade.textContent = grade(rcSciTotal.textContent)[0];
rcSciRemarks.textContent = grade(rcSciTotal.textContent)[1];
rcSciAverage.textContent = averages.science;

// History
rcHistSba.textContent = subjectScores.historySba;
rcHistExam.textContent = examScaled(subjectScores.historyExam);
rcHistTotal.textContent =
  Number(subjectScores.historySba) + examScaled(subjectScores.historyExam);
rcHistGrade.textContent = grade(rcHistTotal.textContent)[0];
rcHistRemarks.textContent = grade(rcHistTotal.textContent)[1];
rcHistAverage.textContent = averages.history;

// OWOP
rcOwopSba.textContent = subjectScores.owopSba;
rcOwopExam.textContent = examScaled(subjectScores.owopExam);
rcOwopTotal.textContent =
  Number(subjectScores.owopSba) + examScaled(subjectScores.owopExam);
rcOwopGrade.textContent = grade(rcOwopTotal.textContent)[0];
rcOwopRemarks.textContent = grade(rcOwopTotal.textContent)[1];
rcOwopAverage.textContent = averages.owop;

// RME
rcRmeSba.textContent = subjectScores.rmeSba;
rcRmeExam.textContent = examScaled(subjectScores.rmeExam);
rcRmeTotal.textContent =
  Number(subjectScores.rmeSba) + examScaled(subjectScores.rmeExam);
rcRmeGrade.textContent = grade(rcRmeTotal.textContent)[0];
rcRmeRemarks.textContent = grade(rcRmeTotal.textContent)[1];
rcRmeAverage.textContent = averages.rme;

// Creative Arts
rcArtsSba.textContent = subjectScores.creativeArtsSba;
rcArtsExam.textContent = examScaled(subjectScores.creativeArtsExam);
rcArtsTotal.textContent =
  Number(subjectScores.creativeArtsSba) +
  examScaled(subjectScores.creativeArtsExam);
rcArtsGrade.textContent = grade(rcArtsTotal.textContent)[0];
rcArtsRemarks.textContent = grade(rcArtsTotal.textContent)[1];
rcArtsAverage.textContent = averages.creativeArts;

// Computing (only if class > 3)
if (studentInfo.class > 3) {
  rcCompSba.textContent = subjectScores.computingSba;
  rcCompExam.textContent = examScaled(subjectScores.computingExam);
  rcCompTotal.textContent =
    Number(subjectScores.computingSba) +
    examScaled(subjectScores.computingExam);
  rcCompGrade.textContent = grade(rcCompTotal.textContent)[0];
  rcCompRemarks.textContent = grade(rcCompTotal.textContent)[1];
  rcCompAverage.textContent = averages.computing;
}

// ================= CALCULATE TOTALS =================
let totalSba = 0;
let totalExam = 0;
let totalScore = 0;

// loop through totals object
const totalKeys = Object.keys(subjectTotals);
for (let i = 0; i < totalKeys.length; i++) {
  const sub = totalKeys[i];
  totalSba += Number(subjectScores[sub + "Sba"] || 0);
  totalExam += examScaled(subjectScores[sub + "Exam"] || 0);
  totalScore += Number(subjectTotals[sub] || 0);
}

rcTotalSba.textContent = totalSba;
rcTotalExam.textContent = totalExam;
rcTotalScore.textContent = totalScore;

// ================= OVERALL PERFORMANCE =================
promClass.textContent = `BASIC ${studentInfo.class + 1}`;
rcAttendance.textContent = ovrPerformanceDetails.attendance;
rcAttitude.textContent = ovrPerformanceDetails.attitude;
rcConduct.textContent = ovrPerformanceDetails.character;
rcInterest.textContent = ovrPerformanceDetails.interest;
rcRemarks.textContent = ovrPerformanceDetails.ctRemarks;

// ================= GRADE FUNCTION =================
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

// ================= DETERMINE SCHOOL LEVEL =================
if (studentInfo.class >= 7) {
  priOrJhs.textContent = "JHS";
} else if (studentInfo.class >= 4) {
  priOrJhs.textContent = "Upper Primary";
} else if (studentInfo.class >= 1) {
  priOrJhs.textContent = "Lower Primary";
} else {
  priOrJhs.textContent = "Pre-School";
}

rcAggregate.textContent = `AGG: ${studentRecord.aggregate}`;

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

function toTitleCase(str) {
  return str.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase());
}

// Example usage
document.querySelectorAll(".basic-details").forEach((el) => {
  el.textContent = toTitleCase(el.textContent);
});
