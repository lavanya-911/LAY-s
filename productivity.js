// ✅ Packing a School Bag
function checkItem(item) {
    let result = document.getElementById("packingResult");
    if (item === "Notebook") {
        result.innerText = "✅ Correct! A notebook is needed for school.";
    } else {
        result.innerText = "❌ Try again! A toy is not for school.";
    }
}
