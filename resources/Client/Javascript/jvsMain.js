//Setting up canvas variables
var cnvs = document.getElementById("cnvsCanvasMain");
var cnvsContext = cnvs.getContext("2d");
//Finding canvas width and using it to calculate height
var cnvsWidth = (0.9*document.body.clientWidth);
var cnvsHeight = (cnvsWidth/2.5);
var ratio = cnvsWidth/2000;
//Constants
var fltGravity = 0.05;
var fltAirResistance = 1;
//Object Array
arrObjectArray = [playerObject,obj3,floor,leftWall];
//Var holds frames in which player jumps after pressing w
var intJump = 0;


//Listening for key pressed
window.addEventListener("keydown",function(event) {
    if (event.key == "a" ||event.key == "d"){
        movementObj.setBoolMoved(true);
        movementObj.setStrKey(event.key);
    } else if (event.key == "w") {
        intJump = 10;
    }
},false);

//Changes canvas size whenever the screen size is changed
window.addEventListener("resize",fctnChangeSize);


//Initialises game, resizes canvas to previously calculated values
function fctnInitialiseGame() {
    fctnChangeSize();
    fctnMain();
}

function fctnDrawObjects(){

    cnvsContext.clearRect(0,0,2000*ratio,800*ratio);
    for (var intLoop = 0; intLoop < arrObjectArray.length; intLoop++){
        if (arrObjectArray[intLoop].getObjectType() != "CollectableObject") {
            cnvsContext.beginPath();
            cnvsContext.moveTo(ratio * arrObjectArray[intLoop].getX(), ratio * arrObjectArray[intLoop].getY());
            cnvsContext.rect(ratio * arrObjectArray[intLoop].getX(), ratio * arrObjectArray[intLoop].getY(), ratio * arrObjectArray[intLoop].getXDimention(), ratio * arrObjectArray[intLoop].getYDimention());
            cnvsContext.stroke();
        } else {
            //Draws a circle, if object is a collectable
            //Setting color
            cnvsContext.strokeStyle = "#FF0000";
            cnvsContext.beginPath();
            cnvsContext.arc(ratio * arrObjectArray[intLoop].getX(),ratio * arrObjectArray[intLoop].getY(),ratio * arrObjectArray[intLoop].getRadius(),0,2*Math.PI);
            cnvsContext.stroke();
            cnvsContext.strokeStyle = "#000000";
        }
    }
}

//Changes canvas size
function fctnChangeSize() {
    cnvsWidth = (0.9*document.body.clientWidth);
    cnvsHeight = (cnvsWidth/2.5);
    cnvs.width = cnvsWidth;
    cnvs.height = cnvsHeight;
    ratio = cnvsWidth/2000;
}

//The main game
function fctnMain(){


    //Momentum is only added to player if player has pressed wasd, and is only added once per frame
    if (movementObj.getBoolMoved() == true) {
        fctnMovePlayerObject();
    }
    //Setting movementObj to values that assume no key has been pressed and no collision has occured
    movementObj.setBoolMoved(false);
    movementObj.setStrKey(null);
    movementObj.setboolCollided(false);
    intJump -= 1;





    for (var intLoopPos = 0; intLoopPos < arrObjectArray.length; intLoopPos ++){
        fctnFindNewPos(intLoopPos);
    }


    fctnCollisionLoop();


    if (movementObj.boolCollided == true && intJump > 0){
        intJump = 0 ;
        fctnPlayerAbilityJump();
    }

    //Setting initial values to temp values
    for (var i = 0; i < arrObjectArray.length; i++){
        arrObjectArray[i].setX(arrObjectArray[i].getTempX());
        arrObjectArray[i].setY(arrObjectArray[i].getTempY());
        if (fctnHasVelocity(i) == true){
            arrObjectArray[i].setXVelocity(arrObjectArray[i].getTempXVelocity());
            arrObjectArray[i].setYVelocity(arrObjectArray[i].getTempYVelocity());
            if (fctnHasMomentum(i) == true) {
                arrObjectArray[i].setXMomentum(arrObjectArray[i].getTempXMomentum());
                arrObjectArray[i].setYMomentum(arrObjectArray[i].getTempYMomentum());
            }
        }
    }

    fctnDrawObjects();
    setTimeout(fctnMain,5);



}













fctnInitialiseGame();