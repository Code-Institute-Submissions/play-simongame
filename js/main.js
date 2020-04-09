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
let off ;
let strict = false;
let on;
let intervalId;
let active =false;
let activeMemory;
let flash;
levelCount= 1;
let win;
let flashTracker

let blueSound = new Audio( "https://freesound.org/data/previews/151/151022_1838182-lq.mp3")
 let yellowSound = new Audio ("https://freesound.org/data/previews/156/156859_2538033-lq.mp3")  
let greenSound = new Audio ("https://freesound.org/data/previews/171/171495_2437358-lq.mp3" )
let orangeSound = new Audio ("https://freesound.org/data/previews/191/191591_2437358-lq.mp3")
let winSound = new Audio ( "https://freesound.org/data/previews/151/151605_57789-lq.mp3")


$("#onoffSwitch").on("click", function () {
    if (power == false) {
          $("#displayText").css("opacity", "0.1");
        power = true;
    }
    else if (power == true) {
        $("#displayText").css("opacity", "0.8" );
        power = false;
        strict= false;
        $("#strictButton").css("background","lime");
         $("#strictButton").removeClass("fa-fa check");
         active=false;
        clearInterval(activeMemory);
    };

});
//StrictButton  Function

$("#strictButton").on("click",function(){
    if (power== true ){
        if (strict == false){
 $("#strictButton").css("background", "coral");
   $("#strictButton").addClass("fa fa-check");
  strict = "true";

        }
    else if (strict = true){
    $("#strictButton").css("background", "navy");
   $("#strictButton").removeClass("fa fa-check");
  strict = "false";
    }
}
});
//Start button 

startButton.addEventListener('click',(event)=>{
       $("#displayText").text("01");
  
     let number = generateRandomNumber()
    game.playerSequence.push(number)
    play(game.playerSequence)
});

function generateRandomNumber(){
    return Math.floor(Math.random() * 4) 
}
function derive(number){
    switch(number){
        case 0:
            return [blue, boardSound[0], "blue-active"]
        case 1:
            return [green, boardSound[1], "green-active"]
        case 2:
            return [orange, boardSound[2], "orange-active"]
        case 3:
            return [yellow, boardSound[3], "yellow-active"]
    }
};

function play(sequence){
    sequence.forEach(function (number) {
        let [button, sound, className] = derive(number)
        button.classList.add(className)
        new Audio(sound).play()
    })
}
   
         
function playerSequence(number){
    color, sound, colorName = deriveButton(number)
    color.changebackground(colorName)
    sound.play()
}






  



