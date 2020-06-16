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
/* ****  *** ********** */

// Power button to test the game button switch//

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

 $("#startButton").click(function () {
        if (power || win) {
            play(sound);
            
        };
    });



    //  Start of th game //

     //function to start the game
    function play(sound) {
     genSequence = [];
      playerSequence=[];
        flash = 0;
        intervalId = 0;
        win = false;
        displayCount= 1;
        displayCountMemory.innerHTML = 1;
        positive = true;
        generateRandomNum();

    function generateRandomNum(){
           for (var i = 0; i < numLevels; i++) {
               let randNum = (Math.floor(Math.random() * 4) + 1);
    genSequence.push(randNum);
    console.log(genSequence);
        }
    }
    }

    //flashing light  //

function gameCount(){
    power= false ;
    if(flash==displayCount);
    clearIntervalId(intervalId);
    genSequence =false;
    power= true;
    clearColor(button);
    
};
if (simonCount){
    power= false;
    clearColor();
    setTimeOut(function(){
        flashColor(genSequence[flash])
        flash++;
    },300);
    }

function flash(id){
        shapeB.style.backgroundColor = "lightblue" ;
        shapeY.style.backgroundColor = "lightyellow";
        shapeG.style.backgroundColor = "SpringGreen" ;//#00FF7F
        shapeO.style.backgroundColor = "OrangeRed" ;//#FF4500


    };
function clearColor(){

};;;;;
     
   