function $(id) {
  return document.getElementById(id);
}

var ai_score = 0;
var person_score = 0;
var playerSelection, aiSelection;
score_display();

change_ui(0);
function change_ui(x) {
  if (x == 0) {
    $("page1").style.display = "block";
    $("page2").style.display = "none";
    $("page3").style.display = "none";
    $("page4").style.display = "none";
  } else if (x == 1) {
    $("page1").style.display = "none";
    $("page2").style.display = "block";
    $("page3").style.display = "none";
    $("page4").style.display = "none";
  } else if (x == 2) {
    $("page1").style.display = "none";
    $("page2").style.display = "none";
    $("page3").style.display = "block";
    $("page4").style.display = "none";
    $("animate-text").innerHTML = "";
    // animate("#animate-text", "Thinking..!", 0, 50);   
    printLetterByLetter("animate-text", "Thinking..!", 80);
    setTimeout(function () {
      change_ui(3);
    }, 1000);
  } else if (x == 3) {
    $("page1").style.display = "none";
    $("page2").style.display = "none";
    $("page3").style.display = "none";
    $("page4").style.display = "block";
    setTimeout(function () {
      change_ui(1);
    }, 1000)
  }
}

$("start-game").addEventListener('click', function () {

  change_ui(1);
  // anim();

});

$("rock").addEventListener('click', function () {
  playerSelection = "R";
  aiSelection = ai();
  handleResult();
  change_ui(2);

});
$("paper").addEventListener('click', function () {
  playerSelection = "P";
  aiSelection = ai();

  handleResult();
  change_ui(2);
});
$("scs").addEventListener('click', function () {
  playerSelection = "S";
  aiSelection = ai();

  handleResult();
  change_ui(2);

});


function ai() {
  var ai_choice = Math.random();
  var res;
  if (ai_choice <= 0.33) {
    res = "R";
  } else if (ai_choice <= 0.66) {
    res = "P";
  } else {
    res = "S";
  }

  return res;
}

function anim() {
  setTimeout(function () {
    change_ui(3);
  }, 1000);
}

function handleResult() {
  // if (playerSelection == aiSelection) {
  //   resultDisp(0);
  // }
  if (playerSelection == "R") {
    if (aiSelection == "S") {
      // rock wins
      resultDisp(1);
    } else if (aiSelection == "R") {
      resultDisp(0);
    } else {
      // paper wins
      resultDisp(2);
    }

  }
  if (playerSelection == "P") {
    if (aiSelection == "R") {
      // paper wins
      resultDisp(1);
    } else if (aiSelection == "P") {
      resultDisp(0);
    } else {
      // scissors wins
      resultDisp(2);
    }
  }
  if (playerSelection == "S") {
    if (aiSelection == "R") {
      // rock wins
      resultDisp(2);
    } else if (aiSelection == "S") {
      // rock wins
      resultDisp(0);
    } else {
      // scissors wins
      resultDisp(1);;
    }
  }
}


function resultDisp(x) {
  if (x == 0) {
    //draw
    $("res-head").innerHTML = "Draw";
    score_display();
    // $("ps-svg").innerHTML = ""
  } else if (x == 1) {
    //win
    $("res-head").innerHTML = "You Win";
    person_score += 1;
    score_display();

  } else if (x == 2) {
    //lose
    $("res-head").innerHTML = "You Lose";
    ai_score += 1;
    score_display();
  }

  if (playerSelection == "P") {
    $("ps-svg").innerHTML = "<i class='fas fa-hand-paper'></i>";
  } else if (playerSelection == "S") {
    $("ps-svg").innerHTML = "<i class='fas fa-hand-spock'></i>";
  } else if (playerSelection == "R") {
    $("ps-svg").innerHTML = "<i class='fas fa-hand-rock'></i>";
  }

  if (aiSelection == "P") {
    $("ai-svg").innerHTML = "<i class='fas fa-hand-paper'></i>";
  } else if (aiSelection == "S") {
    $("ai-svg").innerHTML = "<i class='fas fa-hand-spock'></i>";
  } else if (aiSelection == "R") {
    $("ai-svg").innerHTML = "<i class='fas fa-hand-rock'></i>";
  }


}

function score_display() {
  $("ai").innerHTML = "AI:" + ai_score;
  $("ai1").innerHTML = "AI:" + ai_score;
  $("ps").innerHTML = "You:" + person_score;
  $("ps1").innerHTML = "You:" + person_score;
}

function printLetterByLetter(destination, message, speed) {
  var i = 0;
  var interval = setInterval(function () {
    document.getElementById(destination).innerHTML += message.charAt(i);
    i++;
    if (i > message.length) {
      clearInterval(interval);
    }
  }, speed);
}