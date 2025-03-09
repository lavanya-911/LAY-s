let students = [];
let assignments = [];
let tests = [];
let facultyGuidelines = "";

// Function to display attendance
function displayAttendance() {
    const studentAttendance = document.getElementById("studentAttendance");
    studentAttendance.innerHTML = "";

    students.forEach(student => {
        studentAttendance.innerHTML += `<p>${student.name}: ${student.attendance || "Not Marked"}</p>`;
    });
}

// Function to load assignments
function displayAssignments() {
    const assignmentList = document.getElementById("assignmentList");
    assignmentList.innerHTML = "";

    assignments.forEach(assignment => {
        assignmentList.innerHTML += `<li>${assignment}</li>`;
    });
}

// Function to load tests
function displayTests() {
    const testList = document.getElementById("testList");
    testList.innerHTML = "";

    tests.forEach(test => {
        testList.innerHTML += `<li>${test}</li>`;
    });
}

// Function to display faculty guidelines
function displayGuidelines() {
    document.getElementById("facultyGuidelinesText").innerText = facultyGuidelines || "No guidelines uploaded.";
}

// Load data from localStorage on page load
window.onload = function () {
    students = JSON.parse(localStorage.getItem("students")) || [];
    assignments = JSON.parse(localStorage.getItem("assignments")) || [];
    tests = JSON.parse(localStorage.getItem("tests")) || [];
    facultyGuidelines = localStorage.getItem("facultyGuidelines") || "";

    displayAttendance();
    displayAssignments();
    displayTests();
    displayGuidelines();
};
