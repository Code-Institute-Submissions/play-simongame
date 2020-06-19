let green = document.getElementById("shapeG");
let blue = document.getElementById("shapeB");
let orange = document.getElementById("shapeO");
let yellow = document.getElementById("shapeY");
let onoffButton = document.getElementById("#onoffSwitch");
// let displayCount = document.getElementById("displayText");
// let boardSwitch = document.querySelector(".boardSwitch");
let strictButton = document.getElementById("strict");
let startButton = document.getElementById("start");
let displayCountMemory = document.getElementById("displayCount");

//Variables

let power = false;
let gameStarted = false;
let playerSequence = []; // user sequence
let simonSeq = []; //computer sequence flash tracker//
let genCompTurn; // computerturn or user turn (boolean)//
let level = 0; //  keep track of turn//
 
let strict = false;
let numLevels = 20; //Total number to declare a winner
let simonCount; //computer turn
let intervalId = 0;
let clearIntervalId;
let noise;
let randNum;
// let activeRunning = false;
// let activeMemory;
// let trackCount; //keep track of turn
// let memoryArray=[];
let flash;
let sound = true;
let win = false;

let positive; // To check players performance (true or false)
// let newAudio;
// let playGame; // start of the game 
let onoffSwitch = false; //power button on or off function

let blueSound = new Audio("https://freesound.org/data/previews/151/151022_1838182-lq.mp3")
let yellowSound = new Audio("https://freesound.org/data/previews/156/156859_2538033-lq.mp3")
let greenSound = new Audio("https://freesound.org/data/previews/171/171495_2437358-lq.mp3")
let orangeSound = new Audio("https://freesound.org/data/previews/191/191591_2437358-lq.mp3")
let winSound = new Audio("https://freesound.org/data/previews/151/151605_57789-lq.mp3")
let clickSound = new Audio("https://freesound.org/data/previews/522/522720_10058132-lq.mp3")
/* ****  *** ********** */

// Power button to test the game button switch//

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


//Strict Button Functionality //


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

//Start Button Functionality //

$("#startButton").click(function() {
    if(power && !gameStarted){
        startGame();
        gameStarted = true
    };

    //Fuction for game start //
    function startGame(){
        console.log('Start Game');
        level = 5;
        generateRandomNum();
        play(level)
    }
});

function generateRandomNum() {
    for (var i = 0; i < numLevels; i++) {
        let randNum = (Math.floor(Math.random() * 4) + 1);
        simonSeq.push(randNum);
    }
    console.log('simon Sequence', simonSeq);
}

function play(stage){
    displayCountMemory.innerHTML = stage;
    for(i = 0; i < stage; i++){
        playButton(i)
    }
}

function playButton(index){
    setTimeout(function(){
        console.log("Play " + simonSeq[index])
        playButtonPad(simonSeq[index])
    }, 3000 * (index + 1))
}

// Sound for simonSeq button//

function playButtonPad(id){
    switch (id) {
        case 0:
            $("#shapeB").addClass('blue-active');
            playSound(blueSound);
            break;
        case 1:
            $("#shapeY").addClass('yellow-active');
            playSound(yellowSound);
            break;
        case 2:
            $("#shapeG").addClass('green-active');
            playSound(greenSound);
            break;
        case 3:
            $("#shapeO").addClass('orange-active');
            playSound(orangeSound);
            break;
    }
    removeClass(id)
};

function removeClass(id){
    switch (id) {
        case 0:
            $("#shapeB").removeClass('blue-active');
            break;
        case 1:
            $("#shapeY").removeClass('yellow-active');
            break;
        case 2:
            $("#shapeG").removeClass('green-active');
            break;
        case 3:
            $("#shapeO").removeClass('orange-active');
            break;
    }
};


//flashing light  //

function gameCount() {
    power = false;
    if (flash == displayCount);
    clearIntervalId(intervalId);
   genCompTurn = false;
    power = true;
    clearColor(button);


    if (genCompTurn) {
        power = false;
        setTimeOut(function () {
            flashColor(simonSeq[flash])
            flash++;
        }, 300);
        clearColor();
    }
};



// user Sounds for button clicks //

$("#shapeB").click(function () {
    addpplayerSequence(0);
});

$("#shapeY").click(function () {
    addpplayerSequence(1);
});

$("#shapeG").click(function () {
    addpplayerSequence(2);
});

$("#shapeO").click(function () {
    addpplayerSequence(3);
});



function addpplayerSequence(id) {
    if (power && gameStarted) {
        playButtonPad(id);
        playerSequence.push(id);
        checkSequence();
    }
};

function checkSequence() {
    if (playerSequence[playerSequence.length - 1] !== simonSeq[playerSequence.length - 1]) {
        // Change counter to NO and Replay the game from previous level
        displayCountMemory.innerHTML = "NO"
        play(level)
    } else {
        if (playerSequence.length == level){
            displayCountMemory.innerHTML = "YES"
            level ++
            play(level)
        }
    }
};


// PlaySound //
function playSound(soundId){
    if(sound){
        soundId.play();
    }
};

// function play(sound) {

//     if (noise) {
//         let audio = document.getElementById("soundB");
//         audio.play(sound);
//     }
//     noise = true;
//     $("#shapeB").css("background-color", "red");
// }

// if (noise) {
//         let audio = document.getElementById("soundY");
//         audio.play(sound);
// }
// noise = true;
// $("#shapeY").css ("background-color","red");


// if (noise) {
//     let audio = document.getElementById("soundG");
//     audio.play(sound);

//     noise = true;
//     $("#shapeG").css ("background-color","LawnGreen"); //#7CFC00
// }
// if (noise) {
//     let audio = document.getElementById("soundO");
//     audio.play(sound);
// }
// noise = true;
// $("#shapeO").css ("background-color","Indigo"); //#4B0082


