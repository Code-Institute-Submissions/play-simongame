
//Variables
let green = document.getElementById("shapeG");
let blue = document.getElementById("shapeB");
let orange = document.getElementById("shapeO");
let yellow = document.getElementById("shapeY");
let onoffButton = document.getElementById("#onoffSwitch");
// let displayCount = document.getElementById("displayText");
// let boardSwitch = document.querySelector(".boardSwitch");
let strictButton = document.getElementById("strict");
let startButton = document.getElementById("start");

/*************************/
//Variables
let displayCountMemory = document.getElementById("displayCount");
let playerSequence = []; // user sequence
let simonSeq = []; //computer sequence flash tracker//
let level = 0; //  keep track of turn
let power = false;
let gameStarted = false;
let strict = false;
let numLevels = 2; //Total number to declare a winner
let flashes = 0
let sound = true;
let onoffSwitch = false; //power button on or off function
let win =false;



// Sound Variables //

let blueSound = new Audio("https://freesound.org/data/previews/151/151022_1838182-lq.mp3")
let yellowSound = new Audio("https://freesound.org/data/previews/156/156859_2538033-lq.mp3")
let greenSound = new Audio("https://freesound.org/data/previews/171/171495_2437358-lq.mp3")
let orangeSound = new Audio("https://freesound.org/data/previews/191/191591_2437358-lq.mp3")
let winSound = new Audio("https://freesound.org/data/previews/151/151605_57789-lq.mp3")
let clickSound = new Audio("https://freesound.org/data/previews/522/522720_10058132-lq.mp3")




/* ****  *** ********** */


// Power button to test the game button switch
$("#onoffSwitch").click(function () {
    if (power == false) {
        $("#displayCount").text("ON");
        power = true;
        playSound(clickSound);
        console.log('Power', power);
    } else {
        $("#displayCount").text("OFF");
        power = false;
        gameStarted = false;
        let playerSequence = [];
        let simonSeq = [];
        console.log('Power', power);
    }
});
//Strict Button Functionality
$("#strictButton").click(function () {
    if (power == true) {
        if (strict == false) {
            $("#strictButton").css("background", "coral");
            $("#strictButton").addClass("fa fa-check");
            strict = true;
            console.log(strict);
        }
        else if (strict == true) {
            $("#strictButton").css("background", "white");
            $("#strictButton").removeClass("fa fa-check");
            $("#startButton").css("background", "red")
            strict = false;
            console.log(strict);
        }
    }
});
//Start Button Functionality
$("#startButton").click(function() {
    if(power && !gameStarted){
        startGame();
        gameStarted = true
    };
    function startGame(){
        console.log('Start Game');
        level = 1;
        generateRandomNum();
        play(level)
    }
});
function generateRandomNum() {
    for (let i = 0; i < numLevels; i++) {
        let randNum = (Math.floor(Math.random() * 4) + 1);
        simonSeq.push(randNum);
    }
    console.log('simon Sequence', simonSeq);
}
function play(stage){
    displayCountMemory.innerHTML = stage;
    flashes = 0
    for(let i = 0; i < stage; i++){
        playButton(i)
    }
}
function playButton(index){
    setTimeout(function(){
        // console.log("Play " + simonSeq[index])
        playButtonPad(simonSeq[index])
        flashes++
    }, 1000 * (index + 1))
}
// Plays a button by Id
function playButtonPad(id){
    if (power){
        switch (id) {
            case 1:
                $("#shapeB").addClass('blue-active');
                playSound(blueSound);
                break;
            case 2:
                $("#shapeY").addClass('yellow-active');
                playSound(yellowSound);
                break;
            case 3:
                $("#shapeG").addClass('green-active');
                playSound(greenSound);
                break;
            case 4:
                $("#shapeO").addClass('orange-active');
                playSound(orangeSound);
                break;
        }
        removeClass(id)
    }
};
function removeClass(id){
    setTimeout(function(){
        switch (id) {
            case 1:
                $("#shapeB").removeClass('blue-active');
                break;
            case 2:
                $("#shapeY").removeClass('yellow-active');
                break;
            case 3:
                $("#shapeG").removeClass('green-active');
                break;
            case 4:
                $("#shapeO").removeClass('orange-active');
                break;
        }
    }, 1000)
};
// Allowing user clicks
$("#shapeB").click(function () {
    addplayerSequence(1);
});
$("#shapeY").click(function () {
    addplayerSequence(2);
});
$("#shapeG").click(function () {
    addplayerSequence(3);
});
$("#shapeO").click(function () {
    addplayerSequence(4);
});
function addplayerSequence(id) {
    if (power && gameStarted && flashes === level) {
        playButtonPad(id);
        playerSequence.push(id);
        checkSequence();
    }
};
//checking user sequence against simon Seq
function checkSequence() {
    if (playerSequence[playerSequence.length - 1] !== simonSeq[playerSequence.length - 1]) {
        // Change counter to NO and Replay the game from same level
        displayCountMemory.innerHTML = "NO"
        flashes = 0
        playerSequence = []
        setTimeout(function(){play(level)}, 2000)
    } else {
        if (playerSequence.length === level){
            displayCountMemory.innerHTML = "YES"
            level ++
            flashes = 0
            playerSequence = []
            setTimeout(function(){play(level)}, 2000)
            }
        
    };
};

if (playerSequence.length===numLevels)
playerWin();

//Checking winnner
 function playerWin(){
     playSound(winSound);
     displayCountMemory.innerHTML ="win"
     win = true;
   console.log("win") 

 }


//  Play a sound by Id
 function playSound(soundId){
    if(sound){
        soundId.play();
     }
 };
 
//checking user won the game 
    

 function restartGame(){
  playerSequence= [];
  win= false;
}

restartGame();
