//Function for pick up, gives players different abilities/changes how world works
function fctnPickUp(index) {
    //Reverses gravity
    if (arrObjectArray[index].getCollectableType() == "reverseGravity") {
        fltScore += 5;
        fctnChangeGravity();
        //Increases jump height
    } else if (arrObjectArray[index].getCollectableType() == "increaseJumpHeight") {
        fltScore += 5;
        fctnIncreaseJumpHeight();
        //Makes object smaller and weigh less
    } else if (arrObjectArray[index].getCollectableType() == "makeSmaller") {
        fltScore += 5;
        fctnMakeSmaller();
        //Makes object larger and weigh more
    } else if (arrObjectArray[index].getCollectableType() == "makeLarger") {
        fltScore += 5;
        fctnMakeLarger();
        //Reduces gravity
    } else if (arrObjectArray[index].getCollectableType() == "reduceGravity") {
        fltScore += 5;
        fctnReduceGravity();
        //Allows player to fly
    } else if (arrObjectArray[index].getCollectableType() == "letPlayerFly") {
        fltScore += 5;
        fctnLetPlayerFly();
        //Sends player to start of level 1 -- This will be red
    } else if (arrObjectArray[index].getCollectableType() == "level1") {
        fctnLevel1();
        //Sends player to start of level 2-1 -- This will be red #ff0000 to reset level or orange #ff6708 to move onto the next level
    } else if (arrObjectArray[index].getCollectableType() == "level2-1") {
        fctnLevel2_1();
        //Sends player to start of level 2-2 -- This will be red #ff0000 to reset level or orange #ff6708 to move onto the next level
    } else if (arrObjectArray[index].getCollectableType() == "level2-2") {
        fctnLevel2_2();
        //Sends player to start of level 3-1 -- This will be red #ff0000 to reset level or orange #ff6708 to move onto the next level
    } else if (arrObjectArray[index].getCollectableType() == "level3-1") {
        fctnLevel3_1();
        //Sends player to start of level 3-2 -- This will be red #ff0000 to reset level or orange #ff6708 to move onto the next level
    } else if (arrObjectArray[index].getCollectableType() == "level3-2") {
        fctnLevel3_2();
        //Sends player to start of level 4-1 -- This will be red #ff0000 to reset level or orange #ff6708 to move onto the next level
    } else if (arrObjectArray[index].getCollectableType() == "level4-1") {
        fctnLevel4_1();
        //Sends player to start of level 4-2 -- This will be red #ff0000 to reset level or orange #ff6708 to move onto the next level
    } else if (arrObjectArray[index].getCollectableType() == "level4-2") {
        fctnLevel4_2();
        //Sends player to start of level 5 -- This will be red #ff0000 to reset level or orange #ff6708 to move onto the next level
    } else if (arrObjectArray[index].getCollectableType() == "level5") {
        fctnLevel5();
    } else if (arrObjectArray[index].getCollectableType() == "endGame") {
        localStorage.setItem("Score",fltScore.toFixed(1));
        localStorage.setItem("Time",fltTime.toFixed(1));
        window.location.replace("AddToLeaderboard.html");
    }

}

//Reverses gravity -- Make this type of object blue #0404d1
function fctnChangeGravity(){
    //Changes the direction, not the magnitude of gravity
    intGravityDirection = intGravityDirection *-1;
}

//Increases jump height -- Make this type of object yellow #e6da00
function fctnIncreaseJumpHeight(){
    //Increases the jump constant
    intJumpHeight = intJumpHeight += 5;
}

//Makes the playerObject smaller and have less mass -- Make this type of object green #3be319
function fctnMakeSmaller(){
    //Makes object half the size
    playerObject.setXDimention(25);
    playerObject.setYDimention(25);
    //Makes object weight less
    playerObject.setMass(1.5);
}

//Makes the playerObject larger and have more mass -- Make this type of object purple
function fctnMakeLarger() {
    //Makes object double the size
    playerObject.setXDimention(100);
    playerObject.setYDimention(100);
    //Makes object weight twice as much
    playerObject.setMass(4);
}

//Halves gravity -- Make this type of object light blue #04a5d1
function fctnReduceGravity() {
    fltGravity = fltGravity/2;
}

//Allows player to fly and stops them being able to jump, can move freely in y like in x -- make dark blue #0404d1
function fctnLetPlayerFly() {
    boolCanFly = true;
}

