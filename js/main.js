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
//  let onButton =  document.getElementById("#onoffSwitch");
// let displayCount = document.getElementById("displayText");
// let boardSwitch = document.querySelector(".boardSwitch");
let strictButton = document.getElementById("strict");
let startButton = document.getElementById("start");



let power =false;
let off;
let strict = false;
let on;
let intervalId;
let active =false;
let activeMemory;

let blueSound = new Audio( "https://freesound.org/data/previews/151/151022_1838182-lq.mp3")
 let yellowSound = new Audio ("https://freesound.org/data/previews/156/156859_2538033-lq.mp3")  
let greenSound = new Audio ("https://freesound.org/data/previews/171/171495_2437358-lq.mp3" )
let orangeSound = new Audio ("https://freesound.org/data/previews/191/191591_2437358-lq.mp3")
let winSound = new Audio ( "https://freesound.org/data/previews/151/151605_57789-lq.mp3")


$("#powerSwitch").on("click", function () {
    if (power == false) {
        $("#displayText").css("opacity", "0.1");
        power = true;
    }
    else if (power == true) {
        displayText.innerHTML = "--";
        power = false;
        strict= false;
        $("#strictButton").css("background","lime");
         $("#strictButton").removeClass("fa fa-check");
         active =false;
         $("#startButton").css("background", "tan")
         clearInterval(activeMemory);
    };

});

$("#strictButton").on("click",function(){
    if (power== true ){
        if (strict == false){
 $("#strictButton").css("background", "coral");
   $("#strictButton").addClass("fa fa-check");
  strict = "true";

        }
    else if (strict = true){
    $("#strictButton").css("background", "coral");
   $("#strictButton").removeClass("fa fa-check");
  strict = "false";
    }
}
});
    
            



  



