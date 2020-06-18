// const game = {
//     playerSequence: [],   //array containing the users selection
//     // simonSequence: [], //array containing generated random buttons

//     // turn: 00, //



// };
// // const boardSound = [
//     "https://freesound.org/data/previews/151/151022_1838182-lq.mp3",    // blue button
//     "https://freesound.org/data/previews/156/156859_2538033-lq.mp3",	// yellow button
//     "https://freesound.org/data/previews/171/171495_2437358-lq.mp3",   // green button
//     "https://freesound.org/data/previews/191/191591_2437358-lq.mp3",    // orange button
//     "https://freesound.org/data/previews/151/151605_57789-lq.mp3",    // winner button
// ];


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
let playerSequence = []; // user sequence
let simonSeq =[]; //computer sequence flash tracker//
let genCompTurn; // computerturn or user turn (boolean)//
let displayCount = 1; //  keep track of turn//
 
let strict = false;
let numLevels = 20; //Total number to declare a winner
let simonCount; //computer turn
let intervalId = 0;
let clearIntervalId;
let noise;
let randNum;
let level = 1;
// let activeRunning = false;
// let activeMemory;
// let trackCount; //keep track of turn
// let memoryArray=[];
let flash;
let sound = true;
let win;

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
        console.log('Power', power);
    } else {
        $("#displayCount").text("OFF");
        power = false;
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
if(power){
play(clickSound);

startGame();


};

    console.log('Start playing');



    //Fuction for game start //
function startGame(){
    simonSeq = [];
    // playerSequence = [];
    flash = 0;
    intervalId = 0;
    win = false;
    displayCount = 1;
    displayCountMemory.innerHTML = displayCount;
    positive = true;
    generateRandomNum();
}
});


function generateRandomNum() {
    for (var i = 0; i < numLevels; i++) {
        let randNum = (Math.floor(Math.random() * 4) + 1);
        simonSeq.push(randNum);
    }
    console.log('simon Sequence', simonSeq);
}

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


//The simonseq flash//
function flashColor() {
    
 shapeB.style.backgroundColor = "lightblue";
 shapeY.style.backgroundColor = "lightyellow";
  shapeG.style.backgroundColor = "SpringGreen";//#00FF7F
 shapeO.style.backgroundColor = "OrangeRed";//#FF4500


};





// Sound for simonSeq button//

function playButtonPad(id){
switch (id) {
    case 0:
    $(shapeB).addClass ('blue');
    play(soundB);
    break;

case 1:
    $(shapeY).addClass ('yellow');
    play(soundY);
    break;
case 2:
    $(shapeG).addClass('green');
    play(soundG);
    break;

case 3:
    $(shapeO).addClass ('orange');
    play(soundO);
    break;
}
};


function clearColor() {
    shapeB.style.backgroundColor = "blue";
    shapeY.style.backgroundColor = "yellow";
    shapeG.style.backgroundColor = "green";
    shapeO.style.backgroundColor = "orange";
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
    if (power) {
        playerSequence.push(id);
        checkSequence();
        playButtonPad(id);
        flashColor();
        if (!win) {
            setTimeout(() => {
                clearColor();
            }, 200);
        }
    }
};


// PlaySound //

function play(sound){
    if(sound){
        soundid.play();
    } else{
        soundid.stop();
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


function checkSequence() {
    if (playerSequence[playerSequence.length - 1] !== simonSeq[playerSequence.length - 1]) {
        positive = false;
    };
    if (playerSequence.length == numLevels && positive) {
        WinGame();
    }
};