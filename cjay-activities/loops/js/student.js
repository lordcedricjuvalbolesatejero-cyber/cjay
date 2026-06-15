const students = [
  { name: "Ana", scores: [85, 90, 88], present: true },
  { name: "Ben", scores: [70, 75, 72], present: false },
  { name: "Cara", scores: [95, 92, 94], present: true },
  { name: "Daniel", scores: [60, 65, 70], present: true },
  { name: "Ella", scores: [88, 85, 90], present: true },
  { name: "Felix", scores: [78, 80, 82], present: false },
  { name: "Grace", scores: [92, 89, 94], present: true },
  { name: "Hannah", scores: [73, 70, 68], present: false },
  { name: "Ivan", scores: [81, 84, 79], present: true },
  { name: "Julia", scores: [96, 98, 97], present: true }
];

const tableBody = document.getElementById("tableBody");
const searchInput = document.getElementById("searchInput");

function computeAverage(scores) {
  let total = 0;
  scores.forEach(score => total += score);
  return total / scores.length;
}

function displayStudents(list) {
  tableBody.innerHTML = "";

  list.forEach(student => {
    const avg = computeAverage(student.scores);
    const remarks = avg >= 75 ? "Passed" : "Failed";

    const row = `
      <tr>
        <td>${student.name}</td>
        <td>${student.scores[0]}</td>
        <td>${student.scores[1]}</td>
        <td>${student.scores[2]}</td>
        <td>${avg.toFixed(2)}</td>
        <td>${remarks}</td>
      </tr>
    `;
    tableBody.innerHTML += row;
  });
}

function filterAll() {
  displayStudents(students);
}

function filterPresent() {
  displayStudents(students.filter(s => s.present));
}

function filterAbsent() {
  displayStudents(students.filter(s => !s.present));
}

function filterPassed() {
  displayStudents(students.filter(s => computeAverage(s.scores) >= 75));
}

function filterFailed() {
  displayStudents(students.filter(s => computeAverage(s.scores) < 75));
}

function searchStudent() {
  const text = searchInput ? searchInput.value.toLowerCase() : "";
  displayStudents(
    students.filter(s => s.name.toLowerCase().includes(text))
  );
}

// Initial display
displayStudents(students);