function fnEndTurn() {
    // Blank out game HTML elements
    document.getElementById("WordList").innerHTML = '';
    document.getElementById("lblWord").innerHTML = '';
    document.getElementById("SkipList").innerHTML = '';
    document.getElementById("lblTurnScore").innerHTML = '';
    document.getElementById("lblTimer").innerHTML = "Time remaining: "


    // Output turn results
    document.getElementById("lblTurnOutcome").innerHTML = 
    'Turn Score: ' + TurnScore + 
    "<br>    Correct: " + TurnCorrect + 
    "<br>    Skipped: " + TurnSkipped;
    
    // Increment Round counters
    RoundCorrect += TurnCorrect;
    RoundAttempted += TurnAttempted;
    RoundScore += TurnScore;
    RoundSkipped += TurnSkipped;
    TurnCompleted++;

    // Reset turn variables
    TurnCorrect = 0;
    TurnSkipped = 0;
    TurnAttempted = 0;
    TurnScore = 0;
    SkipList = ''
    WordList = ''

    // Output Turn result HTML
    document.getElementById("lblRoundScore").innerHTML = RoundScore;
    document.getElementById("lblTurnsComplete").innerHTML = TurnCompleted;
    document.getElementById("CtnTurnStats").style.display = "block";

    // Move to turn end screen
    fnShowTurnEnd()

}