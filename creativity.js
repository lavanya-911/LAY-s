let storyParts = [];

function addToStory(part) {
    storyParts.push(part);
    document.getElementById('story-output').innerHTML = storyParts.join(' ');
    
    if(storyParts.length === 3) {
        document.querySelector('button').disabled = false;
    }
}

function completeGame() {
    updateProgress('creativity', 30);
    alert('🎉 Great job! Story complete!');
    window.location.href = loadNextGame('creativity');
}