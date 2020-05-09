const game = {
    playerSequence: [], //array containing the users selection
    simonSequence: [], //array containing generated random buttons
    numLevels: 20,
    turn: 00, //





};
const boardSound = [
    "https://freesound.org/data/previews/151/151022_1838182-lq.mp3",    // blue button
    "https://freesound.org/data/previews/156/156859_2538033-lq.mp3",	// yellow button
    "https://freesound.org/data/previews/171/171495_2437358-lq.mp3",   // green button
    "https://freesound.org/data/previews/191/191591_2437358-lq.mp3",    // orange button
    "https://freesound.org/data/previews/151/151605_57789-lq.mp3",    // winner button
];

let green = document.getElementById("shapeG");
let blue = document.getElementById("shapeB");
let orange = document.getElementById("shapeO");
let yellow = document.getElementById("shapeY");
let onButton = document.getElementById("#onoffSwitch");
// let displayCount = document.getElementById("displayText");
// let boardSwitch = document.querySelector(".boardSwitch");
let strictButton = document.getElementById("strict");
let startButton = document.getElementById("start");
let displayCountMemory = document.getElementById("displayCount");



let power = false;
// let off;
let displayCount = 1;
let strict = false;
let on;
let intervalId;
let activeRunning = false;
let activeMemory;
let flash;
let win;
let flashTracker;
let gameStatus = true;
let playGame;
let  onoffSwitch =false;

let blueSound = new Audio("https://freesound.org/data/previews/151/151022_1838182-lq.mp3")
let yellowSound = new Audio("https://freesound.org/data/previews/156/156859_2538033-lq.mp3")
let greenSound = new Audio("https://freesound.org/data/previews/171/171495_2437358-lq.mp3")
let orangeSound = new Audio("https://freesound.org/data/previews/191/191591_2437358-lq.mp3")
let winSound = new Audio("https://freesound.org/data/previews/151/151605_57789-lq.mp3")


$("#onoffSwitch").click(function () {
    if (power == false){
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

//Strict button function

$("#strictButton").click(function () {
    if (power == true) {
        if (strict == false) {
            $("#strictButton").css("background", "coral");
            $("#strictButton").addClass("fa fa-check");
            strict = "true";

        }

        else if (strict == true)
         {
            $("#strictButton").css("background", "navy");
            $("#strictButton").removeClass("fa fa-check");

            strict = "false";
        }
    }

    $("#startButton").click(function () {
        if (on || win) {
            playGame();
        };
    });


    function playGame() {   
        flashTracker = [];
        flash = 0;
        intervalId = 0;
        win = false;
        displayCount = 1;
        displayText.innerHTML = 1;
        gameStatus = true;
        for (var i = 0; i < 20; i++) {
            flashTracker.push(Math.floor(Math.random() * 4) + 1);
            console.log(flashTracker);
        }
        {

        }
    }
});





