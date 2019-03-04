//business logic
function Dice(name, roll, score){
  this.name=name;
  this.roll= roll;
  this.score = score;

}

Dice.prototype.player = function() {
  return Math.floor((Math.random() * 6) + 1);
}

var roll1 = 0;
var score1 = 0;
var roll2 = 0;
var score2 = 0;
var firstName="";
var secondName="";



function play1(){
  document.getElementById("roll1").disabled = false;
  document.getElementById("roll2").disabled = true;
}
function play2(){
  document.getElementById("roll1").disabled = true;
  document.getElementById("roll2").disabled = false;
}
//user log
var player1 = new Dice(name,roll1, score1);
var player2 = new Dice( name,roll2, score2);



$(document).ready(function(){
  $('#dice').submit(function (event) {
    event.preventDefault();
    $("#dice").hide();
    $("#player").show();
});
  $("#roll1").click(function(event){
    event.preventDefault();
    roll1 = Math.floor((Math.random() * 6) + 1);
    $("#roll-one").text(roll1);
    if(roll1!=1){
      score1 += roll1
    } else{
      score1=0
      play2()
    }
    $("#score-one").text(score1)

    $("#hold1").click(function(event){
      event.preventDefault();
      roll1+=score1
      alert(score1)

      if(score1==100){
        alert("You the winner")
      }else{
        play2()
      }
    });
  });
  $("#roll2").click(function(event){
    event.preventDefault();
    roll2 = Math.floor((Math.random() * 6) + 1);
    $("#roll-two").text(roll2);
    if(roll2!=1){
      score2 += roll2
    }else {
      score2=0
      play1()
    }
    $("#score-two").text(score2)
  })
  $("#hold2").click(function(event){
    event.preventDefault();
    roll2+=score2
    alert(score2)
    if(score2==100){
      alert("You the winner")
    }else{
      play1()
    }

  });
});
