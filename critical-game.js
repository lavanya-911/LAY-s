// Initialize correct matches counter
let correctMatches = 0;
let totalItems = 2; // Total draggable items

// Store original positions of draggable items
const originalPositions = {
    apple: document.getElementById('apple'),
    car: document.getElementById('car')
};

// Drag and drop functions
function allowDrop(ev) {
    ev.preventDefault();
    ev.target.style.backgroundColor = '#E8FDF5';
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    ev.target.style.opacity = '0.5';
}

function drop(ev) {
    ev.preventDefault();
    const data = ev.dataTransfer.getData("text");
    const draggedElement = document.getElementById(data);
    const category = ev.target.closest('.drop-zone');
    
    // Reset visual styles
    ev.target.style.backgroundColor = 'white';
    draggedElement.style.opacity = '1';

    // Validate drop
    if (category) {
        const isCorrect = validateDrop(draggedElement.id, category.textContent);
        
        if (isCorrect) {
            // Move item to category
            category.appendChild(draggedElement);
            correctMatches++;
            
            // Check completion
            if (correctMatches === totalItems) {
                updateProgress('critical', 30);
                setTimeout(() => {
                    alert('🎉 All items sorted correctly! Well done!');
                    window.location.href = loadNextGame('critical');
                }, 500);
            }
        } else {
            // Return to original position
            originalPositions[draggedElement.id].appendChild(draggedElement);
            alert('❌ Oops! Try again!');
        }
    }
}

// Validation function
function validateDrop(itemId, categoryText) {
    const validPairs = {
        apple: 'Food',
        car: 'Vehicles'
    };

    return categoryText.includes(validPairs[itemId]);
}

// Reset visual styles when leaving drop zone
document.querySelectorAll('.drop-zone').forEach(zone => {
    zone.addEventListener('dragleave', (e) => {
        e.target.style.backgroundColor = 'white';
    });
});