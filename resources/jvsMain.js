//Setting up canvas variables
let cnvs = document.getElementById("cnvsCanvasMain");
let cnvsContext = cnvs.getContext("2d");
//Finding camvas width and using it to calculate height
let cnvsWidth = document.body.clientWidth;
let cnvsHeight = (cnvsWidth/1.5)

//array to store objects in
//Cube info [0.Type of object,1.objectID/Name,2.Xpos,3.Ypos,4.Xlength,5.Ylength,6.Horizontal momentum,7.Vertical momentum,8.Horizontal speed,9.Vertical speed,10.Mass, 11.coefficient of restitution, 12.coefficient of friction]
var arrCubeInfo = [["CD", "playerObject",20,20,100,100,0,0,0,0,1,false,false],["SO", "wall",50,50,100,100,0,0,0,0,1,0.5,0.5]];

//Initialises game, resizes canvas to previously calculated values
function fctnInitialiseGame() {
    console.log("fctnInitialiseGame called");
    cnvs.width = cnvsWidth;
    cnvs.height = cnvsHeight;
}



//Listening for key pressed
window.addEventListener("keydown",function(Direction){


},false);


fctnInitialiseGame();