// Timer function

function fnTimer() {
  var countDownDate = new Date().getTime() + TurnTime * 1000; // Set the date we're counting down to
  var x = setInterval(function() {                            // Update the count down every 1 second
  var now = new Date().getTime();                             // Get today's date and time
  var distance = countDownDate - now;                         // Find the distance between now and the count down date
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);  // Time calculations for days, hours, minutes and seconds
  document.getElementById("lblTimer").innerHTML = "Time remaining: " + seconds + "s ";     // Display the result in the element with id="TurnTimer"
  if (distance < 0) {                                           // If the count down is finished, do stuff
      clearInterval(x);
      fnEndTurn()
    }
  }, TimerUpdateInterval);                                    // Timer updated frequency, set from index.js
}