function fnEndTurn() {
    document.getElementById("WordList").innerHTML = '';
    document.getElementById("lblWord").innerHTML = '';
    document.getElementById("SkipList").innerHTML = '';
    document.getElementById("lblTurnScore").innerHTML = '';
    document.getElementById("lblTurnOutcome").innerHTML = 
    'Turn Score: ' + TurnScore + 
    "<br>    Correct: " + TurnCorrect + 
    "<br>    Skipped: " + TurnSkipped;
    
    RoundCorrect += TurnCorrect;
    RoundAttempted += TurnAttempted;
    RoundScore += TurnScore;
    RoundSkipped += TurnSkipped

    fnShowTurnEnd()

}