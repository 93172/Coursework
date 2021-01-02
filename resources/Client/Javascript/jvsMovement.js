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

    getboolCollided(){
        return(this.boolCollided);
    }

    //Setters
    setBoolMoved(boolMoved){
        this.boolMoved = boolMoved;
    }

    setStrKey(strKey){
        this.strKey = strKey;
    }

    setboolCollided(boolCollided){
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
    } else if (movementObj.getStrKey() === "w" && boolCanFly == true){
        //If player can fly then this allows them to freely move in the y axis
        playerObject.setTempYMomentum(playerObject.getTempYMomentum() - fltMomentumStep);
    } else if (movementObj.getStrKey() === "s" && boolCanFly == true){
        //If player can fly then this allows them to freely move in the y axis
        playerObject.setTempYMomentum(playerObject.getTempYMomentum() + fltMomentumStep);
    }


}

//Allows player to jump
function fctnPlayerAbilityJump(){
    playerObject.setTempYMomentum(playerObject.getTempYMomentum()-intJumpHeight*intGravityDirection);
}

//Uses temporary array to calculate new position of object, assuming no new collisions take place
function fctnFindNewPos(index) {

    //If the conservative object reaches its bounds it switches direction
    if (arrObjectArray[index].getObjectType() == "DynamicObject") {
        //If bound is in x axis
        if (arrObjectArray[index].getAxis() == "x") {
            if (((arrObjectArray[index].getX() < arrObjectArray[index].getBound1() && arrObjectArray[index].getXVelocity() < 0) || (arrObjectArray[index].getX() > arrObjectArray[index].getBound2()) && arrObjectArray[index].getXVelocity() > 0)) {
                arrObjectArray[index].setTempXVelocity(arrObjectArray[index].getXVelocity() * -1);
                arrObjectArray[index].setXVelocity(arrObjectArray[index].getTempXVelocity());
            }
        //If bound is in y axis
        } else if (((arrObjectArray[index].getY() < arrObjectArray[index].getBound1() && arrObjectArray[index].getYVelocity() < 0) || (arrObjectArray[index].getY() > arrObjectArray[index].getBound2()) && arrObjectArray[index].getYVelocity() > 0)) {
            arrObjectArray[index].setTempYVelocity(arrObjectArray[index].getYVelocity()*-1);
            arrObjectArray[index].setYVelocity(arrObjectArray[index].getTempYVelocity());
        }
    }

    //Implementing gravity and air resistance
    if (arrObjectArray[index].getObjectType() == "ConservativeDynamicObject") {
        arrObjectArray[index].setTempYMomentum(arrObjectArray[index].getTempYMomentum() + intGravityDirection*fltGravity*arrObjectArray[index].getMass());
        //Air resistance
        arrObjectArray[index].setTempXMomentum(arrObjectArray[index].getTempXMomentum() * fltAirResistance);
        arrObjectArray[index].setTempYMomentum(arrObjectArray[index].getTempYMomentum() * fltAirResistance);
    }

    if (fctnHasVelocity(index) == true) {
        if (fctnHasMomentum(index) == true) {
            //Calculating velocity of object
            arrObjectArray[index].setTempXVelocity(arrObjectArray[index].getTempXMomentum() / arrObjectArray[index].getMass());
            arrObjectArray[index].setTempYVelocity(arrObjectArray[index].getTempYMomentum() / arrObjectArray[index].getMass());
        }
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


