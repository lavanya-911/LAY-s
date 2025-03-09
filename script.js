// User Management
let currentUser = null;

// Function to login and store user data
function login() {
    const username = document.getElementById('username').value.trim();
    const role = document.getElementById('role').value;

    if (username && role) {
        currentUser = {
            name: username,
            role: role,
            progress: JSON.parse(localStorage.getItem(username)) || {
                creativity: 0,
                critical: 0,
                finance: 0
            }
        };
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        window.location.href = `${role}.html`;
    }
}

// Progress System
function updateProgress(category, points) {
    if (!currentUser) return;

    currentUser.progress[category] = Math.min(currentUser.progress[category] + points, 100);
    localStorage.setItem(currentUser.name, JSON.stringify(currentUser.progress));
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
}

// Navigation - This will ensure only the selected section is visible
function showSection(sectionId) {
    // Hide all sections first
    let sections = document.querySelectorAll('.card');
    sections.forEach(section => section.style.display = 'none');

    // Show the selected section
    const sectionToShow = document.getElementById(sectionId);
    if (sectionToShow) {
        sectionToShow.style.display = 'block';
    }
}

// Ensure all sections are hidden on page load
window.onload = function () {
    let sections = document.querySelectorAll('.card');
    sections.forEach(section => section.style.display = 'none');
};

// Manage Students and Attendance
let students = [];
let attendance = {};

// Function to add a student to the list
function addStudent() {
    const studentName = prompt("Enter student name:");
    const studentRollNo = prompt("Enter student roll number:");

    if (studentName && studentRollNo) {
        const student = { name: studentName, rollNo: studentRollNo };
        students.push(student);

        // Refresh the student list and attendance table
        displayStudents();
        displayAttendance();
    } else {
        alert("Please provide both name and roll number.");
    }
}

// Function to display students in the "View Students" section
function displayStudents() {
    const studentList = document.getElementById('studentList');
    studentList.innerHTML = '';  // Clear existing list

    students.forEach(student => {
        const listItem = document.createElement('li');
        listItem.textContent = `${student.name} (Roll No: ${student.rollNo})`;

        // Add checkbox for attendance
        const attendanceCheckbox = document.createElement('input');
        attendanceCheckbox.type = 'checkbox';
        attendanceCheckbox.checked = attendance[student.rollNo] || false;
        attendanceCheckbox.onclick = () => markAttendance(student.rollNo, attendanceCheckbox.checked);

        listItem.appendChild(attendanceCheckbox);
        studentList.appendChild(listItem);
    });
}

// Function to mark attendance for each student
function markAttendance(rollNo, isPresent) {
    attendance[rollNo] = isPresent;
    displayAttendance();
}

// Function to display attendance in the "Attendance" section
function displayAttendance() {
    const attendanceTable = document.getElementById('attendanceTable');
    attendanceTable.innerHTML = '';  // Clear existing attendance

    const headerRow = document.createElement('tr');
    const headerName = document.createElement('th');
    headerName.textContent = 'Student Name';
    const headerAttendance = document.createElement('th');
    headerAttendance.textContent = 'Present';
    headerRow.appendChild(headerName);
    headerRow.appendChild(headerAttendance);
    attendanceTable.appendChild(headerRow);

    students.forEach(student => {
        const row = document.createElement('tr');
        
        const nameCell = document.createElement('td');
        nameCell.textContent = student.name;

        const attendanceCell = document.createElement('td');
        attendanceCell.textContent = attendance[student.rollNo] ? 'Yes' : 'No';

        row.appendChild(nameCell);
        row.appendChild(attendanceCell);
        attendanceTable.appendChild(row);
    });
}

// Call this function when the "Add Student" button is clicked
document.getElementById('addStudentButton').onclick = function() {
    addStudent();
};
