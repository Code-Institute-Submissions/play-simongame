const game = {
    playerSequence: [], //array containing the generated/random button
    simonSequence: [], //array containing the users selected button
    numLevels: 20

};
const boardSound = [
    "https://freesound.org/data/previews/151/151022_1838182-lq.mp3",    // blue button
    "https://freesound.org/data/previews/156/156859_2538033-lq.mp3",	// yellow button
    "https://freesound.org/data/previews/171/171495_2437358-lq.mp3",   // green button
    "https://freesound.org/data/previews/191/191591_2437358-lq.mp33",    // orange button
    "https://freesound.org/data/previews/151/151605_57789-lq.mp3",    // winner button
];

let green = document.getElementById("shapeG")
let blue = document.getElementById("shapeB")
let orange = document.getElementById("shapeO")
let yellow = document.getElementById("shapeY")

let strict=false;
let levelCount=1;
let noise =true;
let win;

let on =false;

//Start board console 
//Power button

if (powerSwitch.addEventListener('click' , (event) =>{
    if (power =="off")
    

        $("strictButton".addclass("fa fa-check"));
        strict="on";
    }
    });






//To turn the button On 
onButton.addEventListener('click' , (event)=>{
    if (buttonOn.checked ==true){
        strict=true;
    }else{
        strict =false;

    }
});
//start 
strictButton.addEventListener('click' , (event)=>{
    if (strictButton.checked =true){
        strict=true;
    }else{
        strict =false;

        $("strictButton".addclass("fa fa-check"));
        strict="on";
    }
    });









    


//     function generateRandomNumber() {
//         return Math.floor(Math.random() * 4)

//         function derive(number) {
//             switch (number) {
//                 case 0:
//                     return [blue, boardSound[0], "blue-active"]
//                 case 1:
//                     return [green, boardSound[1], "green-active"]
//                 case 2:
//                     return [orange, boardSound[2], "orange-active"]
//                 case 3:
//                     return [yellow, boardSound[3], "yellow-active"]
//             }
//         }
//     }
// });

// //     start.addEventListener('click', (event) => {
// //       $(".counter").text("01");
// //         let number = generateRandomNumber()
// //     game.simonSequence.push(number)
// //     play(game.simonSequence)
// // });
// // function generateRandomNumber(){
// //     return Math.floor(Math.random() * 4)
// // }
// // function derive(number){
// //     switch(number){
// //         case 0:
// //             return [blue, boardSound[0], "blue-active"]
// //         case 1:
// //             return [green, boardSound[1], "green-active"]
// //         case 2:
// //             return [orange, boardSound[2], "orange-active"]
// //         case 3:
// //             return [yellow, boardSound[3], "yellow-active"]
// //     }
// // }
// // function play(sequence){
// //     sequence.forEach(function (number) {
// //         let [button, sound, className] = derive(number)
// //         button.classList.add(className)
// //         new Audio(sound).play()
// //     })
// // }
// // function play(){
// //     playerSequence =[];
// //     simonSequence=[0,1,2,];
// //     flash=0;
// //     for (var i =0; i <20; i++){
// //         simonSequence.push(Math.floor(Math.random()*4 )+1);
// //         console.log(simonSequence);
// //     }
// //     simonSequence =true;
// //     intervalId = setInterval(counter,1000 ); {
// //     }
// // }
// // function playSound (id){
// //     var sound = new Audio (boardSound[id]);
// //                sound.play();
// // }