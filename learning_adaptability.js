// ✅ New Routine Practice
function checkRoutine() {
    let selected = document.getElementById("routine").value;
    let result = document.getElementById("routineResult");
    if (selected === "brush") {
        result.innerText = "✅ Correct! You should brush first in the morning.";
    } else {
        result.innerText = "❌ Try again!";
    }
}

// ✅ Problem Solving
function checkAnswer(correct) {
    let result = document.getElementById("problemResult");
    result.innerText = correct ? "✅ Correct! Listening to a friend is the right choice." : "❌ Try again!";
}
