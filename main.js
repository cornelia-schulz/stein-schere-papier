/**
 * Created with PyCharm.
 * User: davidwalker
 * Date: 02/06/2014
 * Time: 16:22
 * To change this template use File | Settings | File Templates.
 */
$(document).ready(function() {
    var userChoice="";
   $('#rock').on('click', function(){
       $('#rockdiv').toggleClass('highlight');
       userChoice = 'rock';
        computerChooses();
        getResult(userChoice, computerChoose);
        setTimeout(
           function()
           {
               if(game===true) {
                   $('#rockdiv').toggleClass('highlight');
                   document.getElementById('computerChoice').src="QuestionMark.jpg";
               }
           }, 1000);
   });
    $('#paper').click(function(){
        $('#paperdiv').toggleClass('highlight');
        userChoice = 'paper';
        computerChooses();
        getResult(userChoice, computerChoose);
        setTimeout(
            function()
            {
                if(game===true) {
                    $('#paperdiv').toggleClass('highlight');
                    document.getElementById('computerChoice').src="QuestionMark.jpg";
                }
            }, 1000);
    });
    $('#scissors').click(function(){
        $('#scissorsdiv').toggleClass('highlight');
        userChoice = 'scissors';
        computerChooses();
        getResult(userChoice, computerChoose);
        setTimeout(
            function()
            {
                if(game===true) {
                    $('#scissorsdiv').toggleClass('highlight');
                    document.getElementById('computerChoice').src="QuestionMark.jpg";
                }
            }, 1000);
    });


    computerChooses = function() {
        var computerChoice = "";
        var x = Math.floor(Math.random()*3);
        if(x === 0) {
            computerChoose = 'rock';
            document.getElementById('computerChoice').src="rock.jpg";
        }
        else if (x === 1) {
            computerChoose = 'paper';
            document.getElementById('computerChoice').src="paper.jpg";
        }
        else {
            computerChoose = 'scissors';
            document.getElementById('computerChoice').src="scissors.jpg";
        }
        return computerChoose;
    }

    var userScore=0;
    var computerScore=0;
    var game = "";

    getResult = function(userChoice, computerChoose) {
        this.userChoice = userChoice;
        this.computerChoose = computerChoose;
        var result = document.getElementById('result');
        var result1 = document.getElementById('result1');
        var win = document.getElementById('win');
        if(userChoice === computerChoose) {
            userScore += 0;
            computerScore += 0;
            win.innerHTML = "You tied!";
            result.innerHTML = "Your score: " + userScore;
            result1.innerHTML = " Computer score: " + computerScore;
            game = true;
        }
        else if(userChoice === 'rock' && computerChoose === 'paper') {
            userScore += 0;
            computerScore += 1;
            win.innerHTML = "Computer wins!";
            result.innerHTML = "Your score: " + userScore;
            result1.innerHTML = " Computer score: " + computerScore;
            game = true;
        }
        else if(userChoice === 'rock' && computerChoose === 'scissors') {
            userScore += 1;
            computerScore += 0;
            win.innerHTML = "You win!";
            result.innerHTML = "Your score: " + userScore;
            result1.innerHTML = " Computer score: " + computerScore;
            game = true;
        }
        else if(userChoice === 'paper' && computerChoose === 'rock') {
            userScore += 1;
            computerScore += 0;
            win.innerHTML = "You win!";
            result.innerHTML = "Your score: " + userScore;
            result1.innerHTML = " Computer score: " + computerScore;
            game = true;
        }
        else if(userChoice === 'paper' && computerChoose === 'scissors') {
            userScore += 0;
            computerScore += 1;
            win.innerHTML = "Computer wins!";
            result.innerHTML = "Your score: " + userScore;
            result1.innerHTML = " Computer score: " + computerScore;
            game = true;
        }
        else if(userChoice === 'scissors' && computerChoose === 'rock') {
            userScore += 0;
            computerScore += 1;
            win.innerHTML = "Computer wins!";
            result.innerHTML = "Your score: " + userScore;
            result1.innerHTML = " Computer score: " + computerScore;
            game = true;
        }
        else {
            userScore += 1;
            computerScore += 0;
            win.innerHTML = "You win!";
            result.innerHTML = "Your score: " + userScore;
            result1.innerHTML = " Computer score: " + computerScore;
            game = true;
        }
        return game;
    }
});