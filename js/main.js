//Variables
let displayCountMemory = document.getElementById("displayCount");
let playerSequence = []; // user sequence
let simonSeq = []; //computer sequence flash tracker//
let level = 0; //  keep track of turn
let power = false;
let gameStarted = false;
let strict = false;
let numLevels = 20; //Total number to declare a winner
let flashes = 0
let sound = true;
let onoffSwitch = false; //power button on or off function
let blueSound = new Audio("https://freesound.org/data/previews/151/151022_1838182-lq.mp3");
let yellowSound = new Audio("https://freesound.org/data/previews/156/156859_2538033-lq.mp3");
let greenSound = new Audio("https://freesound.org/data/previews/171/171495_2437358-lq.mp3");
let orangeSound = new Audio("https://freesound.org/data/previews/191/191591_2437358-lq.mp3");
let winSound = new Audio("https://freesound.org/data/previews/151/151605_57789-lq.mp3");
let clickSound = new Audio("https://freesound.org/data/previews/522/522720_10058132-lq.mp3");
/* ****  *** ********** */
// Power button to test the game button switch
$("#onoffSwitch").click(function () {
    if (power == false) {
        $("#displayCount").text("ON");
        power = true;
        playSound(clickSound);
        
    } else {
        $("#displayCount").text("OFF");
        power = false;
        gameStarted = false;
        let playerSequence = [];
        let simonSeq = [];
       
    }
});
//Strict Button Functionality
$("#strictButton").click(function () {
    if (power == true) {
        if (strict == false) {
            $("#strictButton").css("background", "coral");
            $("#strictButton").addClass("fa fa-check");
            strict = true;
           
        }
        else if (strict == true) {
            $("#strictButton").css("background", "white");
            $("#strictButton").removeClass("fa fa-check");
            $("#startButton").css("background", "red");
            strict = false;
            
        }
    }
});
//Start Button Functionality
$("#startButton").click(function() {
    if(power && !gameStarted){
        startGame();
        gameStarted = true;
    }
    function startGame(){
        level = 1;
        generateRandomNum();
        play(level);
    }
});
function generateRandomNum() {
    for (let i = 0; i < numLevels; i++) {
        let randNum = (Math.floor(Math.random() * 4) + 1);
        simonSeq.push(randNum);
    }
    
}
function play(stage){
    displayCountMemory.innerHTML = stage;
    flashes = 0 ;
    for(let i = 0; i < stage; i++){
        playButton(i);
    }
}
function playButton(index){
    setTimeout(function(){
        // console.log("Play " + simonSeq[index])
        playButtonPad(simonSeq[index]);
        flashes++;
    }, 2000 * (index + 1));
}
// Plays a button by Id
function playButtonPad(id){
    if (power){
        switch (id) {
            case 1:
                $("#shapeB").addClass('blue-active');
                playSound(blueSound);
                break;
            case 2:
                $("#shapeY").addClass('yellow-active');
                playSound(yellowSound);
                break;
            case 3:
                $("#shapeG").addClass('green-active');
                playSound(greenSound);
                break;
            case 4:
                $("#shapeO").addClass('orange-active');
                playSound(orangeSound);
                break;
        }
        removeClass(id);
    }
}
function removeClass(id){
    setTimeout(function(){
        switch (id) {
            case 1:
                $("#shapeB").removeClass('blue-active');
                break;
            case 2:
                $("#shapeY").removeClass('yellow-active');
                break;
            case 3:
                $("#shapeG").removeClass('green-active');
                break;
            case 4:
                $("#shapeO").removeClass('orange-active');
                break;
        }
    }, 1000);
}
// Allow user clicks
$("#shapeB").click(function () {
    addpplayerSequence(1);
});
$("#shapeY").click(function () {
    addpplayerSequence(2);
});
$("#shapeG").click(function () {
    addpplayerSequence(3);
});
$("#shapeO").click(function () {
    addpplayerSequence(4);
});
function addpplayerSequence(id) {
    if (power && gameStarted && flashes === level) {
        playButtonPad(id);
        playerSequence.push(id);
        checkSequence();
    }
}
function checkSequence() {
    if (playerSequence[playerSequence.length - 1] !== simonSeq[playerSequence.length - 1]) {
        // Change counter to NO and Replay the game from same level
        displayCountMemory.innerHTML = "NO";
        flashes = 0 ;
        playerSequence = [];
        setTimeout(function(){play(level)}, 2000);
    } else {
        if (playerSequence.length === level){
            displayCountMemory.innerHTML = "YES";
            level ++;
            flashes = 0 ;
            playerSequence = [];
            setTimeout(function(){play(level)}, 2000);
        }
    }
}

function playerWin(){
playSound(winSound);
displayCountMemory.innerHTML =("WIN!");
win= true;
setTimeout(function(){
    power = false;
    restartGame();
},300);
}


// Play a sounnd by Id
function playSound(soundId){
    if(sound){
        soundId.play();
    }
}
//function to restart game when player wins
function restartGame(){
    playerSequence=[];
    simonSeq=[];
    level=0;
    win =false;
}