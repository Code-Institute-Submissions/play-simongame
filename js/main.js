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
let displayCountMemory = document.getElementById("displayCount");




let power =false;
let off ;
let displayCount;
let strict = false;
let on;
let intervalId;
let active =false;
let activeMemory;
let flash;
levelCount= 1;
let win;
let flashTracker;
let gameStatus= true;


let blueSound = new Audio( "https://freesound.org/data/previews/151/151022_1838182-lq.mp3")
 let yellowSound = new Audio ("https://freesound.org/data/previews/156/156859_2538033-lq.mp3")  
let greenSound = new Audio ("https://freesound.org/data/previews/171/171495_2437358-lq.mp3" )
let orangeSound = new Audio ("https://freesound.org/data/previews/191/191591_2437358-lq.mp3")
let winSound = new Audio ( "https://freesound.org/data/previews/151/151605_57789-lq.mp3")


$("#onoffSwitch").on("click", function () {
    if (power == false) {
          $("#displayText").text("@")
        power = true;
    }
    else if(power == true){
        $("displayText").text("!")
            power=false;
            strict= false;
        $("#strictButton").css("background","lime");
         $("#strictButton").removeClass("fa-fa check");
         active=false;
        clearInterval(activeMemory);
   }



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

start.addEventListener('click',(event)=>{
if(on|| win)
playSound();
});

function playSound(){
flashTracker=[];
playerSequence=[];
flash=0;
displayCount= 1;
 displayCountMemory.innerHTML =1;
gameStatus=true;
for( var i =0; i < 20; i++){
    playerSequence.push(Math.floor(Math.random() *4) +1);

}

simonSequence =true;

var myInterval =setInterval(function(){
   myInterval =setInterval(gameTurn,1000);


   function gameTurn() {
       on =false;

       if (flash == turn ){
           clearInterval(myInterval);
           simonSequence = false;
           clearColor();
           on =true;
       }
       if (simonSequence){
           clearColor();
           setTimeout(()=>{

            if(flashTracker[flash]== 0)blue();
             if(flashTracker[flash]== 1)green();
             if(flashTracker[flash]== 2)orange();
             if(flashTracker[flash]==3) yellow();
               flash++;
            }, 50);

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
    };
};
function play(sequence){
    sequence.forEach(function (number) {
        let [button, sound, className] = derive(number)
        button.classList.add(className)
        new Audio(sound).play();
    }  
};
