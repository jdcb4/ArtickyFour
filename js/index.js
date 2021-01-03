var Category = ""
var TurnCorrect = 0;
var TurnSkipped = 0;
var TurnAttempted = 0;
var TurnScore = 0;
var StartTime;
var EndTime;
var TimeElapsed = 0;
var WordList = "";
var SkipList = "";

var RecentWord = '';
var CurrentWord = ''
var CurrentWord = '';
var TurnTime = 10;
var TimerUpdateInterval = 1000;


var RoundCorrect=0;
var RoundAttempted=0;
var RoundScore=0;
var RoundSkipped=0;
var TurnCompleted = 0

function fnSelect() {
    fnShowGame();
    fnTimer();
    fnShuffle(this[Category]);
    CurrentWord = this[Category].pop();
    document.getElementById("lblWord").innerHTML = CurrentWord;
    RecentWord = CurrentWord;
    WordList = CurrentWord;
    document.getElementById("lblCategory").innerHTML = "Category: " + Category;


}

function fnNext() {
    document.getElementById("WordList").innerHTML = WordList;

    TurnCorrect++;
    TurnAttempted++;
    TurnScore++;
    if (this[Category].length === 0) {
        this[Category] = this['OriginalList' + Category].slice();
        fnShuffle(this[Category]);
    }
    CurrentWord = this[Category].pop();
    RecentWord = CurrentWord;
    WordList = WordList.concat("<br>" + RecentWord);
    document.getElementById("lblWord").innerHTML = CurrentWord;
    document.getElementById("lblTurnScore").innerHTML = 'Turn Score: ' + TurnScore + "<br> Correct: " + TurnCorrect + "<br> Skipped: " + TurnSkipped;

}


function fnSkip() {
    TurnSkipped++
    TurnAttempted++
    if (TurnSkipped > 1) {
        TurnScore--
    }
    SkipList = SkipList.concat(RecentWord + "<br>")
    if (this[Category].length === 0) {
        this[Category] = this['OriginalList' + Category].slice();
        fnShuffle(this[Category]);
    }
    CurrentWord = this[Category].pop();
    RecentWord = CurrentWord
    document.getElementById("lblWord").innerHTML = CurrentWord;
    document.getElementById("SkipList").innerHTML = SkipList;
    document.getElementById("lblTurnScore").innerHTML = 'Turn Score: ' + TurnScore + "<br> Correct: " + TurnCorrect + "<br> Skipped: " + TurnSkipped;


}

function fnEndTurn() {
    //Reset timer, go to menu, reset variables.
}

function fnNextWord() {
    //Reset timer, go to menu, reset variables.
}








