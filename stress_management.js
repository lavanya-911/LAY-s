// ✅ Breathing Exercise Logic
function startBreathing() {
    let guide = document.getElementById("breathingGuide");
    guide.innerText = "🌬️ Inhale deeply... Hold... Exhale slowly...";
    setTimeout(() => { guide.innerText = "Repeat the cycle..." }, 5000);
}

// ✅ Play Relaxing Music
function playMusic(soundFile) {
    let audio = new Audio(soundFile);
    audio.play();
}
