
// 1. CREATE & MANIPULATE ARRAYS


// Initial array of student records (objects inside an array)
const studentData = [
  { name: "Amarin", score: 88 },
  { name: "Bob", score: 54 },
  { name: "Chase", score: 92 },
  { name: "Diana", score: 70 }
];

// Array manipulation: Adding new students using push()
studentData.push({ name: "Ethan", score: 63 });
studentData.push({ name: "Fiona", score: 45 });


// ==========================================
// 2. CONDITIONAL STATEMENTS FOR DECISION-MAKING
// ==========================================

/**
 * Converts a numerical score into a letter grade and pass/fail status.
 * @param {number} score - Student's score (0-100)
 * @returns {Object} Letter grade and pass status
 */
function evaluateGrade(score) {
  let letterGrade = "";
  let status = "";

  if (score >= 90) {
    letterGrade = "A";
  } else if (score >= 80) {
    letterGrade = "B";
  } else if (score >= 70) {
    letterGrade = "C";
  } else if (score >= 60) {
    letterGrade = "D";
  } else {
    letterGrade = "F";
  }

  // Binary condition for pass/fail
  status = score >= 60 ? "PASS" : "FAIL";

  return { letterGrade, status };
}


// ==========================================
// 3. REUSABLE FUNCTIONS & LOOPS TO PROCESS DATA
// ==========================================

/**
 * Processes student scores to compute summary stats and detailed performance.
 * @param {Array} students - Array of student objects
 * @returns {Object} Summary stats and processed records
 */
function analyzeClassPerformance(students) {
  let totalScore = 0;
  const processedStudents = [];

  // Loop using for...of to iterate over array data
  for (const student of students) {
    totalScore += student.score;

    // Utilize the reusable evaluateGrade function
    const evaluation = evaluateGrade(student.score);

    processedStudents.push({
      name: student.name,
      score: student.score,
      grade: evaluation.letterGrade,
      status: evaluation.status
    });
  }

  const averageScore = totalScore / students.length;

  return {
    averageScore: averageScore.toFixed(1),
    processedStudents
  };
}


// ==========================================
// 4. DISPLAY FORMATTED RESULTS IN CONSOLE
// ==========================================

/**
 * Renders formatted results directly to the developer console.
 * @param {Array} originalList - Raw input array
 */
function displayReportCard(originalList) {
  const analysis = analyzeClassPerformance(originalList);

  console.clear();
  console.log("%c============================================", "color: #007acc; font-weight: bold;");
  console.log("%c        CLASS PERFORMANCE REPORT           ", "color: #007acc; font-weight: bold;");
  console.log("%c============================================", "color: #007acc; font-weight: bold;");

  console.log(`\nTotal Students: ${originalList.length}`);
  console.log(`Class Average:  ${analysis.averageScore} / 100\n`);

  // Formatted Console Table for detailed structured viewing
  console.log("%cDetailed Student Results:", "font-weight: bold; text-decoration: underline;");
  console.table(analysis.processedStudents);

  // Loop with custom string formatting and conditional color logging
  console.log("\n%cIndividual Status Highlights:", "font-weight: bold;");
  for (const record of analysis.processedStudents) {
    if (record.status === "PASS") {
      console.log(`%c✔ ${record.name}: Passed with grade ${record.grade} (${record.score}%)`, "color: #2e7d32;");
    } else {
      console.log(`%c✖ ${record.name}: Failed with grade ${record.grade} (${record.score}%)`, "color: #c62828;");
    }
  }
}

// Execute the function
displayReportCard(studentData);