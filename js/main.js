//variables 

// create game object with key and values

var game={ //game object

    UserSequence: [], //array containing the generated/random button
    playSequence: [], //array containing the users selected button 
	level: 0, //current level
	turn: 0, //current turn
	strict: 1, // user difficulty
    score: 0, //current score
	active: false, //whether a turn is active or not
	handler: false, // whether the click and sound handlers are active
<<<<<<< HEAD
	shape: shape, // cached string for the button class
}
var boardSound =[

			
    "https://freesound.org/data/previews/337/337112_5872390-lq.mp3"	 //blue
    "https://freesound.org/data/previews/128/128229_2238068-lq.mp3"	//green
	
        "https://freesound.org/data/previews/151/151022_1838182-lq.mp3" //oranges
        
        "https://freesound.org/data/previews/128/128349_2238068-lq.mp3" //yellow
        "https://freesound.org/data/previews/151/151605_57789-lq.mp3"//winner
	
];
=======
    shape: shape, // cached string for the button class
    flash :'function', // to make the button flash
}

//start game sequence 
$(document).ready(function() {
    $("start").click(function() {
        level++;
        startSequence();
    })
})

//playSequence
functon startSequence() {
    $(".display").text(level);
}


>>>>>>> 48811b68f4ea6d372b2a354ab98282293e078888
