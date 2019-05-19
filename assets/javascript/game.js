$(document).ready(function() {
    var wins = 0;
    var losses = 0;
    var score = 0;

    var cpuNumber = Math.floor(Math.random() * (120-19)) + 19;
    console.log("Computer Number" + cpuNumber);

    var genNum = function(min,max,cnt) {
        var arr = [];
        for(var i = min,j=0; i <= max;j++,i++)
            arr[j] = i
            arr.sort(function() {
              return Math.floor((Math.random() * 3 ) - 1)
    });
    };

    var reset = function () {
        cpuNumber = Math.floor(Math.random() * (120-19)) + 19;
        console.log("Computer Number: " + cpuNumber);
        $("#cNumber").text(cpuNumber);
        score = 0
        $("#scoreTotal").html(score);
        console.log(genNum(1,12,4));
        var randNum = genNum(1,12,4);
        var SaphNum = Math.floor(Math.random()*12+1 )
        var RubyNum = Math.floor(Math.random()*12+1 )
        var EmerNum = Math.floor(Math.random()*12+1 )
        var DiamNum = Math.floor(Math.random()*12+1 )
        console.log(randNum);
        console.log(SaphNum);
        console.log(RubyNum);
        console.log(EmerNum);
        console.log(DiamNum);
        $(".btn1").attr("value",SaphNum);
        $(".btn2").val(RubyNum);
        $(".btn3").val(EmerNum);
        $(".btn4").val(DiamNum);
    };
  
    reset();

    
    var winner = function() {
        alert("You win!");
        wins++;
        $("#wins").html("Wins: " + wins);
        reset();
    };
    var loser = function() {
        alert("You lose!!");
        losses++;
        $("#losses").html("Losses: " + losses);
        reset();
    };

    $('.crystal-btn').on("click", function(){
        var crystalValue = parseInt($(this).val());
        score += crystalValue;
        console.log(score);
        $("#scoreTotal").html(score);
        if (score == cpuNumber) {
            winner();
        }
        else if (score > cpuNumber) {
            loser();
        };
    });
