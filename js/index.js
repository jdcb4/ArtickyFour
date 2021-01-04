// Initiate blank numeric variables
var TurnCorrect = 0;
var TurnSkipped = 0;
var TurnAttempted = 0;
var TurnScore = 0;
var TimeElapsed = 0;
var RoundCorrect = 0;
var RoundAttempted = 0;
var RoundScore = 0;
var RoundSkipped = 0;
var TurnCompleted = 0;
var dudvar = 0;

// Initiate blank string variables
var Category = "";
var WordList = "";
var SkipList = "";
var RecentWord = '';
var CurrentWord = '';
var CurrentWord = '';

// Initiate settings variables
var TurnTime = 5;                              //Time of a turn in seconds
var TimerUpdateInterval = 1000;                 //Countdown update frequency in miliseconds


function fnSelect() {
    fnShowGame();
    fnTimer();
    fnShuffle(this[Category]);
    CurrentWord = this[Category].pop();
    document.getElementById("lblWord").innerHTML = CurrentWord;
    document.getElementById("lblCategory").innerHTML = "Category: " + Category;
}


function fnNext() {
    WordList = WordList.concat(CurrentWord + "<br>");
    TurnCorrect++;
    TurnScore++;
    fnNextWord();
}


function fnSkip() {
    SkipList = SkipList.concat(CurrentWord + "<br>")
    TurnSkipped++
    TurnSkipped > 1 ? TurnScore-- : dudvar = 1;
    fnNextWord();
}

function fnNextWord() {
    TurnAttempted++;

    document.getElementById("WordList").innerHTML = WordList;
    document.getElementById("SkipList").innerHTML = SkipList;

    document.getElementById("lblTurnScore").innerHTML = 
        'Turn Score: ' 
        + TurnScore;
    
    if (this[Category].length === 0) {
        this[Category] = this['OriginalList' + Category].slice();
        fnShuffle(this[Category]);
    }

    CurrentWord = this[Category].pop();

    document.getElementById("lblWord").innerHTML = CurrentWord;
    
    }