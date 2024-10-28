function showTicketSectionByClick(elementId) {
    const element = document.getElementById(elementId);
    element.scrollIntoView();
}
function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}
function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function setBackgroundColorId(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-green-400');
}
function removeBackgroundColorId(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('bg-green-400');
}






