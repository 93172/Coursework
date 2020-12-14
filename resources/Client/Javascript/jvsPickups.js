//Function for pick up, gives players different abilities/changes how world works
function fctnPickUp(index){
    //Reverses gravity
    if (arrObjectArray[index].getCollectableType() == "reverseGravity"){
        fctnChangeGravity();
    //Increases jump height
    } else if (arrObjectArray[index].getCollectableType() == "increaseJumpHeight"){
        fctnIncreaseJumpHeight();
    //Makes object smaller and weigh less
    } else if (arrObjectArray[index].getCollectableType() == "makeSmaller"){
        fctnMakeSmaller();
    //Makes object larger and weigh more
    } else if (arrObjectArray[index].getCollectableType() == "makeLarger"){
        fctnMakeLarger();
    //Reduces gravity
    } else if (arrObjectArray[index].getCollectableType() == "reduceGravity"){
        fctnReduceGravity();
    //Allows player to fly
    } else if (arrObjectArray[index].getCollectableType() == "letPlayerFly"){
        fctnLetPlayerFly();
    }
}

//Reverses gravity -- Make this type of object blue
function fctnChangeGravity(){
    //Changes the direction, not the magnitude of gravity
    intGravityDirection = intGravityDirection *-1;
}

//Reverses gravity -- Make this type of object yellow
function fctnIncreaseJumpHeight(){
    //Increases the jump constant
    intJumpHeight = intJumpHeight += 5;
}

//Makes the playerObject smaller and have less mass -- Make this type of object green
function fctnMakeSmaller(){
    //Makes object half the size
    playerObject.setXDimention(25);
    playerObject.setYDimention(25);
    //Makes object weight half as much
    playerObject.setMass(1);
}

//Makes the playerObject larger and have more mass -- Make this type of object purple
function fctnMakeLarger() {
    //Makes object double the size
    playerObject.setXDimention(100);
    playerObject.setYDimention(100);
    //Makes object weight twice as much
    playerObject.setMass(4);
}

//Halves gravity -- Make this type of object light blue
function fctnReduceGravity() {
    fltGravity = fltGravity/2;
}

//Allows player to fly and stops them being able to jump, can move freely in y like in x -- make red
function fctnLetPlayerFly() {
    boolCanFly = true;
}