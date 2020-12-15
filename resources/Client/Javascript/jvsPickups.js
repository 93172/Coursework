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
    //Sends player to start of level 1 -- This will be red
    } else if (arrObjectArray[index].getCollectableType() == "level1"){
        fctnLevel1();
    //Sends player to start of level 2 -- This will be red #ff0000 to reset level or orange #ff6708 to move onto the next level
    } else if (arrObjectArray[index].getCollectableType() == "level2-1"){
        fctnLevel2_1();
    } else if (arrObjectArray[index].getCollectableType() == "level2-2"){
        fctnLevel2_2();
    } else if (arrObjectArray[index].getCollectableType() == "level3-1"){
        fctnLevel3_1();
    }
}

//Reverses gravity -- Make this type of object blue
function fctnChangeGravity(){
    //Changes the direction, not the magnitude of gravity
    intGravityDirection = intGravityDirection *-1;
}

//Increases jump height -- Make this type of object yellow #e6da00
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

//Allows player to fly and stops them being able to jump, can move freely in y like in x -- make dark blue
function fctnLetPlayerFly() {
    boolCanFly = true;
}

