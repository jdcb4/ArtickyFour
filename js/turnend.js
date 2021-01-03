function fnEndTurn() {
    document.getElementById("WordList").innerHTML = '';
    document.getElementById("lblWord").innerHTML = '';
    document.getElementById("SkipList").innerHTML = '';
    document.getElementById("lblTurnScore").innerHTML = '';
    document.getElementById("lblTurnOutcome").innerHTML = 
    'Turn Score: ' + TurnScore + 
    "<br>    Correct: " + TurnCorrect + 
    "<br>    Skipped: " + TurnSkipped;
    document.getElementById("lblTimer").innerHTML = "Time remaining: "
    
    RoundCorrect += TurnCorrect;
    RoundAttempted += TurnAttempted;
    RoundScore += TurnScore;
    RoundSkipped += TurnSkipped;
    TurnCompleted++;

    TurnCorrect = 0;
    TurnSkipped = 0;
    TurnAttempted = 0;
    TurnScore = 0;

    document.getElementById("lblRoundScore").innerHTML = RoundScore;

    document.getElementById("lblTurnsComplete").innerHTML = TurnCompleted;
    
    document.getElementById("ctnTurnStats").style.display = "block";

    fnShowTurnEnd()

}