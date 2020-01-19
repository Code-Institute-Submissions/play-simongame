//variables 

// create game object with key and values

var game={ //game object
	level: 0, //current level
	turn: 0, //current turn
	strict: 1, // user difficulty
    score: 0, //current score
	active: false, //whether a turn is active or not
	handler: false, // whether the click and sound handlers are active
	shape: '.shape', // cached string for the button class
	UserSequence: [], //array containing the generated/random button
    playSequence: [], //array containing the users selected button 
    let win ; //winner sound display 
    let flash; //this will flash the button wich trigger the sound 
