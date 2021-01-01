function fnEndTurn() {
    document.getElementById("lblTurnOutcome").innerHTML = 
    'Turn Score: ' + TurnScore + 
    "<br>    Correct: " + TurnCorrect + 
    "<br>    Skipped: " + TurnSkipped

 
    fnShowTurnEnd()

}