
// create game object with key and values




//variabes for game  
let game= {
    UserSequence= [], //array containing the generated/random button
    playSequence= [], //array containing the users selected button 
    Numlevels =20,
    flash= [],//no of button flashes 
    level :1 ,//current level
    turn : 0, //current turn
	strict :false, // user difficulty mode.
    score: 0, //current score
	active: false, //whether a turn is active or not
	handler: false, // whether the click and sound handlers are active
	shape: 'shape', //  string for the color button class

};


const newLocal = newFunction();
let boardSound =[
    newLocal,						
    
  "https://freesound.org/data/previews/337/337112_5872390-lq.mp3",  //blue button
  "https://freesound.org/data/previews/128/128229_2238068-lq.mp3" ,	 // green button					
   

 "https://freesound.org/data/previews/151/151022_1838182-lq.mp3" , //orange button 						

 "https://freesound.org/data/previews/128/128349_2238068-lq.mp3", //yellow	button					


"https://freesound.org/data/previews/151/151605_57789-lq.mp3",// winner button			 


];

  

const blue = document.querySelector('shapeB');
const yellow = document.querySelector('shapeY ');
const green = document.querySelector('shapeG');
const orange = document.querySelector('shapeO');

button.addEventListener('click', (event) =>{

    $(".score").text("")
    $("start") .addEventListener('click', event => {
        
    }
       strict = false;
    const newLocal = level = 0;
        level ++;
        simonSeq=[];
        userSeq=[];
        SimonSequence();
}

function newFunction() {
    return "https://freesound.org/data/previews/337/337112_5872390-lq.mp3";
}

function generateRandomNumber(){
    return Math.floor(Math.random() * 4)
}
function deriveButton(number){
    switch(number){
        case 1:
            return (green, greenSound, "")
    }
}
function generateRandomNumber(){
    return Math.floor(Math.random() * 4)
}
function deriveButton(number){
    switch(number){
        case 1:
            return (green, greenSound, "lightgreen")
    }
}
function playSequence(number){
    color, sound, colorName = deriveButton(number)
    color.changebackground(colorName)
    sound.play()
}
for (number in playSequence){
    userSequence(number)
}  

