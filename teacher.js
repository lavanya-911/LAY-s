let students = [];
let assignments = [];
let tests = [];
let facultyGuidelines = "";

// Function to display students
function displayStudents() {
    const studentList = document.getElementById("studentList");
    studentList.innerHTML = "";

    students.forEach((student, index) => {
        studentList.innerHTML += `
            <div class="student">
                <span>${student.name} - ${student.attendance || "Not Marked"}</span>
                <button onclick="markAttendance(${index}, 'Present')">Present</button>
                <button onclick="markAttendance(${index}, 'Absent')">Absent</button>
            </div>
        `;
    });

    // Save students to local storage
    localStorage.setItem("students", JSON.stringify(students));
}

// Function to add a student
function addStudent() {
    const studentName = document.getElementById("newStudentName").value;
    if (studentName.trim() === "") {
        alert("Please enter a valid name");
        return;
    }

    students.push({ id: students.length + 1, name: studentName, attendance: "" });
    document.getElementById("newStudentName").value = "";
    displayStudents();
}

// Function to mark attendance
function markAttendance(index, status) {
    students[index].attendance = status;
    alert(`${students[index].name} marked as ${status}`);
    displayStudents();
}

// Function to upload assignments
function uploadAssignment() {
    const assignmentName = document.getElementById("assignmentInput").value;
    if (assignmentName.trim() === "") return;

    assignments.push(assignmentName);
    localStorage.setItem("assignments", JSON.stringify(assignments));
    alert("Assignment uploaded successfully!");
}

// Function to upload tests
function uploadTest() {
    const testName = document.getElementById("testInput").value;
    if (testName.trim() === "") return;

    tests.push(testName);
    localStorage.setItem("tests", JSON.stringify(tests));
    alert("Test uploaded successfully!");
}

// Function to upload faculty guidelines
function uploadGuidelines() {
    facultyGuidelines = document.getElementById("facultyGuidelines").value;
    localStorage.setItem("facultyGuidelines", facultyGuidelines);
    alert("Guidelines uploaded successfully!");
}

// Load data from localStorage on page load
window.onload = function () {
    students = JSON.parse(localStorage.getItem("students")) || [];
    assignments = JSON.parse(localStorage.getItem("assignments")) || [];
    tests = JSON.parse(localStorage.getItem("tests")) || [];
    facultyGuidelines = localStorage.getItem("facultyGuidelines") || "";

    displayStudents();
};
