//Detects if any collisions have taken place
function fctnDetectCollisons(indexObj1,indexObj2){
    if ((arrObjectArray[indexObj1].getObjectType() != "PointObject") && (arrObjectArray[indexObj2].getObjectType() != "PointObject") ){

        //Finds if collision has taken place
        if ( ( ( (arrObjectArray[indexObj1].getTempX() + arrObjectArray[indexObj1].getXDimention()) > arrObjectArray[indexObj2].getTempX() ) && ( (arrObjectArray[indexObj2].getTempX() > arrObjectArray[indexObj1].getTempX() ||  (arrObjectArray[indexObj2].getTempX() + arrObjectArray[indexObj2].getXDimention()) > arrObjectArray[indexObj1].getTempX() ) ) && ( ( (arrObjectArray[indexObj1].getYDimention() + arrObjectArray[indexObj1].getTempY()) > arrObjectArray[indexObj2].getTempY()) && ( (arrObjectArray[indexObj2].getTempY() > arrObjectArray[indexObj1].getTempY()) || (arrObjectArray[indexObj2].getTempY() + arrObjectArray[indexObj2].getYDimention()) > arrObjectArray[indexObj1].getTempY() ) ) ) ){
            if (indexObj1 == 0){
                movementObj.setboolCollided(true);
            }

            return true;
        }

    }
    return false;
}





//Finding out what type of collision takes place and starting relevent function
function fctnCollision(indexObj1,indexObj2){
    var u1;
    var u2;
    var axis = fctnFindCollisionAxis(indexObj1,indexObj2);




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
    } else if (arrObjectArray[indexObj1].getObjectType() == "StaticObject" && arrObjectArray[indexObj2].getObjectType() == "ConservativeDynamicObject"){
        //Conservative collision with static object, making sure conservative object is object 1
        fctnConservativeStaticCollision(indexObj2,indexObj1,axis);
    } else if (arrObjectArray[indexObj1].getObjectType() == "ConservativeDynamicObject" && arrObjectArray[indexObj2].getObjectType() == "StaticObject"){
        //Conservative collision with static object, making sure conservative object is object 1
        fctnConservativeStaticCollision(indexObj1,indexObj2,axis);
    } else if (arrObjectArray[indexObj1].getObjectType() == "ConservativeDynamicObject" && arrObjectArray[indexObj2].getObjectType() == "DynamicObject"){
        //Collisions between dynamic and conservative dynamic objects with conservativeDynamic as object 1
        fctnConservativeConservativeDynamicCollision(indexObj1,indexObj2,axis);
    } else if (arrObjectArray[indexObj2].getObjectType() == "ConservativeDynamicObject" && arrObjectArray[indexObj1].getObjectType() == "DynamicObject"){
        //Collisions between dynamic and conservative dynamic objects with conservativeDynamic as object 1
        fctnConservativeConservativeDynamicCollision(indexObj2,indexObj1,axis);
    }


    //Conservative collision with static object
}



function fctnConservativeStaticCollision(obj1,obj2,axis){
    //In this function the value of e used will be that of object 2
    var e = arrObjectArray[obj2].getE();
    var m = arrObjectArray[obj1].getMass();


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
        arrObjectArray[obj1].setTempX(arrObjectArray[obj1].getX() + v );
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

//Finds Results of collisions between dynamic objects and conservative dynamic objects
function fctnConservativeConservativeDynamicCollision(indexObj1,indexObj2,axis){
//In this function the value of e used will be that of object 2
    var e = arrObjectArray[indexObj2].getE();
    var m = arrObjectArray[indexObj1].getMass();



    if (axis == "x"){
        //X axis collides
        //Finding u on X axis
        var u = arrObjectArray[indexObj1].getTempXVelocity();
        var u2 = arrObjectArray[indexObj2].getXVelocity();
        //Finding new final velocity
        v = e*u;
        if ((u2 >= 0 && u <= 0) || (v <= 0 && u2 >= 0)){
            v = -e*u;
        }
        var v = u2  + v;


        //Setting new velocity
        arrObjectArray[indexObj1].setTempXVelocity(v);
        //Setting new momentum
        arrObjectArray[indexObj1].setTempXMomentum(v/m);
        //Setting new position
        arrObjectArray[indexObj1].setTempX(arrObjectArray[indexObj1].getX() + v );
    } else {
        //Y axis collides
        //Finding u on Y axis
        var u = arrObjectArray[indexObj1].getTempYVelocity();
        //Finding new final velocity
        v = e*u;
        if ((u2 >= 0 && u <= 0) || (v <= 0 && u2 >= 0)){
            v = -e*u;
        }
        var v = u2  + v;

        //Finding new final velocity
        var v = -e*u;
        //Setting new velocity
        arrObjectArray[indexObj1].setTempYVelocity(v);
        //Setting new momentum
        arrObjectArray[indexObj1].setTempYMomentum(v/m);
        //Setting new position
        arrObjectArray[indexObj1].setTempY(arrObjectArray[indexObj1].getY() + v);
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

        if (fctnDetectCollisons(indexObj1,indexObj2)){
            fctnConservativeCollision(indexObj1,indexObj2,0,0,"y")
        }


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

function fctnCollisionLoop(){
    //Finding new positions if a collision takes place
    for (var indexObj1 = 0; indexObj1 < arrObjectArray.length; indexObj1++) {
        for (var indexObj2 = indexObj1 + 1; indexObj2 < arrObjectArray.length; indexObj2++) {
            //Checks to see if collision has occured between 2 objects and finds new position
            if (fctnDetectCollisons(indexObj1, indexObj2) == true) {
                fctnCollision(indexObj1, indexObj2);
            }

        }
    }
}



//Find axis the collision will happen on
function fctnFindCollisionAxis(indexObj1,indexObj2) {
    if (( ( (arrObjectArray[indexObj1].getTempX() + arrObjectArray[indexObj1].getXDimention()) > arrObjectArray[indexObj2].getTempX() ) && ( (arrObjectArray[indexObj2].getTempX() > arrObjectArray[indexObj1].getTempX() ||  (arrObjectArray[indexObj2].getTempX() + arrObjectArray[indexObj2].getXDimention()) > arrObjectArray[indexObj1].getTempX() ) ) && ( ( (arrObjectArray[indexObj1].getYDimention() + arrObjectArray[indexObj1].getY()) > arrObjectArray[indexObj2].getY()) && ( (arrObjectArray[indexObj2].getY() > arrObjectArray[indexObj1].getY()) || (arrObjectArray[indexObj2].getY() + arrObjectArray[indexObj2].getYDimention()) > arrObjectArray[indexObj1].getY() ) ) )){
        return("x");
    } else {
        return ("y");
    }

}





