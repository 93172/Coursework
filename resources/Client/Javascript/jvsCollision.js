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


function fctnCollision(obj1,obj2){
    if (arrObjectArray[obj1].getObjectType() == "ConservativeDynamicObject" && arrObjectArray[obj2].getObjectType() == "ConservativeDynamicObject"){
        //This means momentum is conserved in the collision
        fctnConservativeCollision(obj1,obj2);
    }
    //Conservative collision with static object, making sure conservative object is object 1

    //Conservative collision with static object
}


/*
function fctnConservativeStaticCollision(obj1,obj2){
    //In this function the value of e used will be that of object 2
    var e = arrObjectProporties[obj2][12];
    var m = arrObjectProporties[obj1][10];



    //Finding if time for x collision > time for y collision
    if (fctnFindTimeForCollision(obj1,obj2,0) > fctnFindTimeForCollision(obj1,obj2,1)){
        //X axis collides
        //Finding u on X axis
        var u = arrObjectProporties[obj1][8];

        //Finding new final velocity
        var v = -e*u;
        //Setting new velocity
        arrTempObjectProporties[obj1][8] = v;
        //Setting new momentum
        arrTempObjectProporties[obj1][6] = v/m;
        //Setting new position
        arrTempObjectProporties[obj1][2] = arrObjectProporties[obj1][2] + v;
    } else {
        //Y axis collides
        //Finding u on Y axis
        var u = arrObjectProporties[obj1][9];

        //Finding new final velocity
        var v = -e*u;
        //Setting new velocity
        arrTempObjectProporties[obj1][9] = v;
        //Setting new momentum
        arrTempObjectProporties[obj1][7] = v/m;
        //Setting new position
        arrTempObjectProporties[obj1][3] = arrObjectProporties[obj1][3] + v;

    }

}
*/



//Finds out velocities for a collision involving 2 conservative dynamic objects
function fctnConservativeCollision(obj1,obj2) {
    //Finding values that will be constants in the function
    var e = (arrObjectArray[obj1].getE() + arrObjectArray[obj2].getE())/2;
    var m1 = arrObjectArray[obj1].getMass();
    var m2 = arrObjectArray[obj2].getMass();

    //Finding axis collision happens on
    if(( (arrObjectArray[obj1].getTempX() + arrObjectArray[obj1].getXDimention()) > arrObjectArray[obj2].getTempX()) && ( (arrObjectArray[obj2].getTempX() > arrObjectArray[obj1].getTempX()) ||  (arrObjectArray[obj2].getTempX() + arrObjectArray[obj2].getXDimention()) > arrObjectArray[obj1].getTempX() ) ){
        //X axis collides
        //Finding u on x axis
        var u1 = arrObjectArray[obj1].getTempXVelocity();
        var u2 = arrObjectArray[obj2].getTempXVelocity();

        //Finding new final velocities
        var v1 = ((m1*u1) + (m2*u2) - (m2*e*(u1-u2)))/(m1+m2);
        var v2 = e*(u1-u2) + v1;

        //Setting new velocities
        arrObjectArray[obj1].setTempXVelocity(v1);
        arrObjectArray[obj2].setTempXVelocity(v2);
        //Setting new momentum
        arrObjectArray[obj1].setTempXMomentum(v1/m1);
        arrObjectArray[obj2].setTempXMomentum(v2/m2);
        //Setting new pos
        arrObjectArray[obj1].setTempX(arrObjectArray[obj1].getTempX() + v1);
        arrObjectArray[obj2].setTempX(arrObjectArray[obj2].getTempX() + v2);

    } else {
        //Y axis collides
        //Finding u on x axis
        var u1 = arrObjectArray[obj1].getTempYVelocity();
        var u2 = arrObjectArray[obj2].getTempYVelocity();

        //Finding new final velocities
        var v1 = ((m1*u1) + (m2*u2) - (m2*e*(u1-u2)))/(m1+m2);
        var v2 = e*(u1-u2) + v1;

        //Setting new velocities
        arrObjectArray[obj1].setTempYVelocity(v1);
        arrObjectArray[obj2].setTempYVelocity(v2);
        //Setting new momentum
        arrObjectArray[obj1].setTempYMomentum(v1/m1);
        arrObjectArray[obj2].setTempYMomentum(v2/m2);
        //Setting new pos
        arrObjectArray[obj1].setTempY(arrObjectArray[obj1].getTempY() + v1);
        arrObjectArray[obj2].setTempY(arrObjectArray[obj2].getTempY() + v2);
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