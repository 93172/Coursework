//Function for pick up, gives players different abilities/changes how world works
function fctnPickUp(index){
    //Reverses gravity
    if (arrObjectArray[index].getCollectableType() == "reverseGravity"){
        fctnChangeGravity();
    }
}

//Reverses gravity
function fctnChangeGravity(){
    //Changes the direction, not the magnitude of gravity
    intGravityDirection = intGravityDirection *-1;
}
