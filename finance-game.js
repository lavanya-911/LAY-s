function checkAnswer(type) {
    const result = document.getElementById('result');
    
    if(type === 'coin' || type === 'bill') {
        result.innerHTML = `✅ Correct! This is a ${type}!`;
        result.style.color = 'green';
        updateProgress('finance', 30);
        setTimeout(() => {
            window.location.href = loadNextGame('finance');
        }, 1500);
    } else {
        result.innerHTML = "❌ Try again!";
        result.style.color = 'red';
    }
}