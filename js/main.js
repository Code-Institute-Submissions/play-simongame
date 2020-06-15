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

let power= false;
let playerSequence = [];
let genSequence=[];
let displayCount = 1;
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

$("#onoffSwitch").click(function () {
    if (power == false) {
        $("#displayText").text("ON");
        power = true;
        console.log(power);
     
    }
    else {

        $("#displayText").text("OFF");
        power = false;
        strict = false;
        console.log(power);



    }
});


