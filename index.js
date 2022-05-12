let sec = 00;
let min = 00;
let hr = 00;
let intervalAdd;

// start timer function
function startTimer() {
  intervalAdd = setInterval(() => {
    sec++;

    //for minute
    if (sec == 60) {
      sec = 00;
      min++;

      // for hour
      if (min == 60) {
        min = 00;
        hr++;
        if (hr <= 9) {
          document.getElementById("hour").innerHTML = "0" + hr;
        } else {
          document.getElementById("hour").innerHTML = hr;
        }
      }

      if (min <= 9) {
        document.getElementById("minute").innerHTML = "0" + min;
      } else {
        document.getElementById("minute").innerHTML = min;
      }
    }

    // for second
    if (sec <= 9) {
      document.getElementById("second").innerHTML = "0" + sec;
    } else {
      document.getElementById("second").innerHTML = sec;
    }
  }, 1000);
}

// stop timer function
function stopTimer() {
  clearInterval(intervalAdd);
}

//reset timer function
function resetTimer() {
  clearInterval(intervalAdd);
  min = 00;
  document.getElementById("minute").innerHTML = min + "0";
  sec = 00;
  document.getElementById("second").innerHTML = sec + "0";
  hr = 00;
  document.getElementById("hour").innerHTML = hr + "0";
}
