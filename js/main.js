const game = {
    userSequence: [], //array containing the generated/random button
    playSequence: [], //array containing the users selected button
    numLevels: 20
     
};
const boardSound = [
    "https://freesound.org/data/previews/151/151022_1838182-lq.mp3",    // blue button
    "https://freesound.org/data/previews/156/156859_2538033-lq.mp3",	// yellow button
    "https://freesound.org/data/previews/171/171495_2437358-lq.mp3",   // green button
    "https://freesound.org/data/previews/191/191591_2437358-lq.mp33",    // orange button
    "https://freesound.org/data/previews/151/151605_57789-lq.mp3"  ,    // winner button
];
const blue = document.querySelector('#shapeB');
const green = document.querySelector('#shapeY');
const orange = document.querySelector('#shapeG');
const yellow = document.querySelector('#shapeO');
const start = document.querySelector('.start');
start.addEventListener('click', (event) => {
      $(".counter").text("01");
        let number = generateRandomNumber()
    game.playSequence.push(number)
    play(game.playSequence)
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
}
function play(sequence){
    sequence.forEach(function (number) {
        let [button, sound, className] = derive(number)
        button.classList.add(className)
        new Audio(sound).play()
    })
}
