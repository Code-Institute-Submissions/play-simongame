//variables 

// create game object with key and values

//variabes for game  

    UserSequence= []; //array containing the generated/random button
    playSequence= []; //array containing the users selected button 
    const Numlevels =20;
    var id, color,level =0; //current level
    var strict  =false;
    var error =false;
    	turn= 0, //current turn
	strict= 1, // user difficulty
    score= 0, //current score
	active= false, //whether a turn is active or not
	handler= false, // whether the click and sound handlers are active
	shape= shape, // cached string for the button class
var boardSound [
    "https://freesound.org/data/previews/337/337112_5872390-lq.mp3"	, //blue
    "https://freesound.org/data/previews/128/128229_2238068-lq.mp3",	//green
	
        "https://freesound.org/data/previews/151/151022_1838182-lq.mp3", //oranges
        
        "https://freesound.org/data/previews/128/128349_2238068-lq.mp3", //yellow
        "https://freesound.org/data/previews/151/151605_57789-lq.mp3",//winner
	
};

 //start board sequence 
 $(document). ready(function(){
$(".score").text("");


 })
$("start").click(function(){
strict =false;
error =false;
level=0;
level++;
playSequence=[];
UserSequence=[];
strict=true;
playSequence();


})