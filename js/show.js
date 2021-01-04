// Functions for switching views
// Each function first hids all containers, then unhides the chosen container


function fnShowStart() {
    document.querySelectorAll(".container").forEach(container => container.style.display = "none");
    document.getElementById("CtnStart").style.display = "block";
}

function fnShowGame() {
    document.querySelectorAll(".container").forEach(container => container.style.display = "none");
    document.getElementById("CtnGame").style.display = "block";
}

function fnShowMenu() {
    document.querySelectorAll(".container").forEach(container => container.style.display = "none");
    document.getElementById("CtnMenu").style.display = "block";
}

function fnShowEnd() {
    document.querySelectorAll(".container").forEach(container => container.style.display = "none");
    document.getElementById("CtnRoundEnd").style.display = "block";
}

function fnShowTurnEnd() {
    document.querySelectorAll(".container").forEach(container => container.style.display = "none");
    document.getElementById("CtnTurnEnd").style.display = "block";
}