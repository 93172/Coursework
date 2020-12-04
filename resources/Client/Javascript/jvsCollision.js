//Detects if any collisions have taken place
function fctnDetectCollisons(indexObj1,indexObj2){
    if ((arrObjectArray[indexObj1].getObjectType() != "PointObject") && (arrObjectArray[indexObj2].getObjectType() != "PointObject") ){

        //Finds if collision has taken place
        if ( ( ( (arrObjectArray[indexObj1].getTempX() + arrObjectArray[indexObj1].getXDimention()) > arrObjectArray[indexObj2].getTempX() ) && ( (arrObjectArray[indexObj2].getTempX() > arrObjectArray[indexObj1].getTempX() ||  (arrObjectArray[indexObj2].getTempX() + arrObjectArray[indexObj2].getXDimention()) > arrObjectArray[indexObj1].getTempX() ) ) && ( ( (arrObjectArray[indexObj1].getYDimention() + arrObjectArray[indexObj1].getTempY()) > arrObjectArray[indexObj2].getTempY()) && ( (arrObjectArray[indexObj2].getTempY() > arrObjectArray[indexObj1].getTempY()) || (arrObjectArray[indexObj2].getTempY() + arrObjectArray[indexObj2].getYDimention()) > arrObjectArray[indexObj1].getTempY() ) ) ) ){
            fctnCollision(indexObj1,indexObj2);
        }
    }
}

//Finding out what type of collision takes place and starting relevent function


function fctnCollision(indexObj1,indexObj2){
    var axis;
    var u1;
    var u2;
    //Collision happens on Y axis
    if (( ( (arrObjectArray[indexObj1].getTempX() + arrObjectArray[indexObj1].getXDimention()) > arrObjectArray[indexObj2].getTempX() ) && ( (arrObjectArray[indexObj2].getTempX() > arrObjectArray[indexObj1].getTempX() ||  (arrObjectArray[indexObj2].getTempX() + arrObjectArray[indexObj2].getXDimention()) > arrObjectArray[indexObj1].getTempX() ) ) && ( ( (arrObjectArray[indexObj1].getYDimention() + arrObjectArray[indexObj1].getY()) > arrObjectArray[indexObj2].getY()) && ( (arrObjectArray[indexObj2].getY() > arrObjectArray[indexObj1].getY()) || (arrObjectArray[indexObj2].getY() + arrObjectArray[indexObj2].getYDimention()) > arrObjectArray[indexObj1].getY() ) ) )){
        axis = "x";
    } else {
        axis = "y";
        if (indexObj1 == 0){
            movementObj.setBoolCollided(true);
        }
    }




    if (arrObjectArray[indexObj1].getObjectType() == "ConservativeDynamicObject" && arrObjectArray[indexObj2].getObjectType() == "ConservativeDynamicObject"){
        //This means momentum is conserved in the collision
        if (axis == "x"){
            u1 = arrObjectArray[indexObj1].getTempXVelocity();
            u2 = arrObjectArray[indexObj2].getTempXVelocity();
        } else {
            u1 = arrObjectArray[indexObj1].getTempYVelocity();
            u2 = arrObjectArray[indexObj2].getTempYVelocity();
        }

        fctnConservativeCollision(indexObj1,indexObj2,u1,u2,axis);
    } else if (arrObjectArray[indexObj1].getObjectType() == "StaticObject" && arrObjectArray[indexObj2.getObjectType() == "ConservativeDynamicObject"]){
        //Conservative collision with static object, making sure conservative object is object 1
        fctnConservativeStaticCollision(indexObj2,indexObj1,axis);
    } else if (arrObjectArray[indexObj1].getObjectType() == "ConservativeDynamicObject" && arrObjectArray[indexObj2].getObjectType() == "StaticObject"){
        //Conservative collision with static object, making sure conservative object is object 1
        fctnConservativeStaticCollision(indexObj1,indexObj2,axis);
    }


    //Conservative collision with static object
}



function fctnConservativeStaticCollision(obj1,obj2,axis){
    //In this function the value of e used will be that of object 2
    var e = arrObjectArray[obj2].getE();
    var m = arrObjectArray[obj1].getMass();



    //Finding if time for x collision > time for y collision
    if (axis == "x"){
        //X axis collides
        //Finding u on X axis
        var u = arrObjectArray[obj1].getTempXVelocity();

        //Finding new final velocity
        var v = -e*u;
        //Setting new velocity
        arrObjectArray[obj1].setTempXVelocity(v);
        //Setting new momentum
        arrObjectArray[obj1].setTempXMomentum(v/m);
        //Setting new position
        arrObjectArray[obj1].setTempX(arrObjectArray[obj1].getX() + v);
    } else {
        //Y axis collides
        //Finding u on Y axis
        var u = arrObjectArray[obj1].getTempYVelocity();

        //Finding new final velocity
        var v = -e*u;
        //Setting new velocity
        arrObjectArray[obj1].setTempYVelocity(v);
        //Setting new momentum
        arrObjectArray[obj1].setTempYMomentum(v/m);
        //Setting new position
        arrObjectArray[obj1].setTempY(arrObjectArray[obj1].getY() + v);
    }

}




//Finds out velocities for a collision involving 2 conservative dynamic objects
function fctnConservativeCollision(indexObj1,indexObj2,u1,u2,axis) {
    //Finding values that will be constants in the function
    var e = (arrObjectArray[indexObj1].getE() + arrObjectArray[indexObj1].getE())/2;
    var m1 = arrObjectArray[indexObj1].getMass();
    var m2 = arrObjectArray[indexObj2].getMass();


    //Finding new final velocities
    var v1 = ((m1*u1) + (m2*u2) - (m2*e*(u1-u2)))/(m1+m2);
    var v2 = e*(u1-u2) + v1;

    if (axis == "x"){

        //Setting new velocities
        arrObjectArray[indexObj1].setTempXVelocity(v1);
        arrObjectArray[indexObj2].setTempXVelocity(v2);
        //Setting new momentum
        arrObjectArray[indexObj1].setTempXMomentum(v1 / m1);
        arrObjectArray[indexObj2].setTempXMomentum(v2 / m2);
        //Setting new pos
        arrObjectArray[indexObj1].setTempX(arrObjectArray[indexObj1].getX() + v1);
        arrObjectArray[indexObj2].setTempX(arrObjectArray[indexObj2].getX() + v2);
    } else {
        //Setting new velocities
        arrObjectArray[indexObj1].setTempYVelocity(v1);
        arrObjectArray[indexObj2].setTempYVelocity(v2);
        //Setting new momentum
        arrObjectArray[indexObj1].setTempYMomentum(v1 / m1);
        arrObjectArray[indexObj2].setTempYMomentum(v2 / m2);
        //Setting new pos
        arrObjectArray[indexObj1].setTempY(arrObjectArray[indexObj1].getY() + v1);
        arrObjectArray[indexObj2].setTempY(arrObjectArray[indexObj2].getY() + v2);
    }

}





/*
//Finding difference between two objects closest sides/difference in velocity
//Offset index is if is x or y 0 for x 1 for y
function fctnFindTimeForCollision(obj1,obj2,offsetIndex) {
    var diffVelocity = arrObjectProporties[obj2][8 + offsetIndex] - arrObjectProporties[obj1][8 + offsetIndex];

    var obj2coord;
    var obj1coord;

    //Finding which sides will collide
    if (diffVelocity > 0){
        obj2coord = arrObjectProporties[obj2][2 + offsetIndex] + arrObjectProporties[obj2][4 + offsetIndex];
        obj1coord = arrObjectProporties[obj1][2 + offsetIndex];
    } else {
        obj1coord = arrObjectProporties[obj1][2 + offsetIndex] + arrObjectProporties[obj1][4 + offsetIndex];
        obj2coord = arrObjectProporties[obj2][2 + offsetIndex];
    }

    return (obj2coord - obj1coord)/diffVelocity;
}
*/