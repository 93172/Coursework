//MovementObject used to store
class Movement{
    //Constructor
    constructor() {
        this.boolCollided = false;
        this.boolMoved = false;
        this.strKey = "";
    }



    //Getters
    getBoolMoved(){
        return(this.boolMoved);
    }

    getStrKey(){
        return(this.strKey);
    }

    getBoolCollided(){
        return(this.boolCollided);
    }

    //Setters
    setBoolMoved(boolMoved){
        this.boolMoved = boolMoved;
    }

    setStrKey(strKey){
        this.strKey = strKey;
    }

    setBoolCollided(boolCollided){
        this.boolCollided = boolCollided;
    }
}


//If player has pressed key to move object this function adds momentum at the appropriate time
function fctnMovePlayerObject(){
    //How much momentum added per tick
    var fltMomentumStep = 1;
    //Adds momentum to player object
    if (movementObj.getStrKey() === "d"){
        playerObject.setTempXMomentum(playerObject.getTempXMomentum() + fltMomentumStep);
    } else if (movementObj.getStrKey() === "a"){
        playerObject.setTempXMomentum(playerObject.getTempXMomentum() - fltMomentumStep);
    }

    if (movementObj.getStrKey() === "s"){
        //playerObject.setTempYMomentum(playerObject.getTempYMomentum() + fltMomentumStep);
    } else if (movementObj.getStrKey() === "w"){
        if (movementObj.getBoolCollided() == true){
            playerObject.setTempYMomentum(-5);
        }
    }
}


//Uses temporary array to calculate new position of object, assuming no new collisions take place
function fctnFindNewPos(index) {

    //Implementing gravity and air resistance
    if (arrObjectArray[index].getObjectType() == "ConservativeDynamicObject") {
        arrObjectArray[index].setTempYMomentum(arrObjectArray[index].getTempYMomentum() + fltGravity);
        //Air resistance
        arrObjectArray[index].setTempXMomentum(arrObjectArray[index].getTempXMomentum() * fltAirResistance);
        arrObjectArray[index].setTempYMomentum(arrObjectArray[index].getTempYMomentum() * fltAirResistance);
    }

    if (fctnHasVelocity(index) == true) {
        //Calculating velocity of object
        arrObjectArray[index].setTempXVelocity(arrObjectArray[index].getTempXMomentum() / arrObjectArray[index].getMass());
        arrObjectArray[index].setTempYVelocity(arrObjectArray[index].getTempYMomentum() / arrObjectArray[index].getMass());

        //Finding new position of the object
        arrObjectArray[index].setTempX(arrObjectArray[index].getTempX() + arrObjectArray[index].getTempXVelocity());
        arrObjectArray[index].setTempY(arrObjectArray[index].getTempY() + arrObjectArray[index].getTempYVelocity());
    }
}

function fctnHasVelocity(index) {
    if (arrObjectArray[index].getObjectType() == "ConservativeDynamicObject" || arrObjectArray[index].getObjectType() == "DynamicPointObject" || arrObjectArray[index].getObjectType() == "DynamicObject"){
        return true;
    }
    return false;
}

function fctnHasMomentum(index) {
    if (arrObjectArray[index].getObjectType() == "ConservativeDynamicObject"){
        return true;
    }
    return false;
}


