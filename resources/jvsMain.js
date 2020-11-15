//Setting up canvas variables
var cnvs = document.getElementById("cnvsCanvasMain");
var cnvsContext = cnvs.getContext("2d");
//Finding camvas width and using it to calculate height
var cnvsWidth = (0.9*document.body.clientWidth);
var cnvsHeight = (cnvsWidth/2.5);
var ratio = cnvsWidth/2000;

//All calculations until the objects are being drawn will assume the game takes place in a 2000 by 800 canvas, the positions will then be adjusted when being drawn
//array to store objects in
//Cube info [0.Type of object,1.objectID/Name,2.Xpos,3.Ypos,4.Xlength,5.Ylength,6.Horizontal momentum,7.Vertical momentum,8.Horizontal speed,9.Vertical speed,10.Mass, 11.coefficient of restitution, 12.coefficient of friction]
var arrObjectProporties = [["CD", "player",50.0,50.0,100.0,100.0,0.0,0.0,0.0,0.0,1.0,0.5,0.5],["CD", "wall",500,300,100,50,0,0,0,0,1.0,0.5,0.5]];
var arrTempObjectProporties = arrObjectProporties;

//Listening for key pressed
window.addEventListener("keydown",function(event){
    //How much momentum added per tick
    var fltMomentumStep = 1;
    //Adds momentum to player object
    if (event.key === "d"){
        arrObjectProporties[0][6] += fltMomentumStep;
    } else if (event.key === "a"){
        arrObjectProporties[0][6] -= fltMomentumStep;
    }

    if (event.key === "s"){
        arrObjectProporties[0][7] += fltMomentumStep;
    } else if (event.key === "w"){
        arrObjectProporties[0][7] -= fltMomentumStep;
    }

},false);
//Changes canvas size whenever the screen size is changed
window.addEventListener("resize",fctnChangeSize);

//Initialises game, resizes canvas to previously calculated values
function fctnInitialiseGame() {
    fctnChangeSize();
    fctnMain();
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
    //Finding new position in temp array
    arrTempObjectProporties = arrObjectProporties;
    for (var intLoopPos = 0; intLoopPos < arrObjectProporties.length; intLoopPos ++){
        fctnFindNewPos(intLoopPos);
    }


    //Finding new positions if a collision takes place
    for (var intLoopDecCol1 = 0; intLoopDecCol1 < arrTempObjectProporties.length; intLoopDecCol1 ++){
        for (var intLoopDecCol2 = (intLoopDecCol1 +1); intLoopDecCol2 < arrTempObjectProporties.length; intLoopDecCol2++){
            //Checks to see if collision has occured between 2 objects
            var boolCol = fctnDetectCollisons(intLoopDecCol1,intLoopDecCol2);
            //If collision has occured
            if (boolCol == true){
                //Find new positions after collision
                fctnCollisionType(intLoopDecCol1,intLoopDecCol2);
            }

        }
    }
    arrObjectProporties = arrTempObjectProporties;


    fctnDrawObjects();
    setTimeout(fctnMain,5);

}

//Detects if any collisions have taken place
function fctnDetectCollisons(indexObj1,indexObj2){
    if ((arrObjectProporties[indexObj1][0] != "PO") && (arrObjectProporties[indexObj2][0] != "PO") ){
        //Gets objects dimensions
        var xDim1 = arrTempObjectProporties[indexObj1][4];
        var yDim1 = arrTempObjectProporties[indexObj1][5];
        var xDim2 = arrTempObjectProporties[indexObj2][4];
        var yDim2 = arrTempObjectProporties[indexObj2][5];
        var x1 = arrTempObjectProporties[indexObj1][2];
        var x2 = arrTempObjectProporties[indexObj2][2];
        var y1 = arrTempObjectProporties[indexObj1][3];
        var y2 = arrTempObjectProporties[indexObj2][3];

        if ( ( ( (x1 + xDim1) > x2) && ( (x2 > x1) ||  (x2 + xDim2) > x1 ) ) && ( ( (y1 + yDim1) > y2) && ( (y2 > y1) || (y2 + yDim2) > y1 ) ) ){

            return true;
        }

        return  false;



    }

}
//Finding out what type of collision takes place
function fctnCollisionType(obj1,obj2){

    if (arrObjectProporties[obj1][0] == "CD" && arrObjectProporties[obj2][0] == "CD"){
        //This means momentum is conserved in the collision
        fctnConservativeCollision(obj1,obj2);
    } else if (arrObjectProporties[obj1][0] == "CD" || arrObjectProporties[obj2][0] == "CD"){
        //This means momentum is not conserved

    }
}

//Finds out velocities for a collision involving 2 conservative dynamic objects
function fctnConservativeCollision(obj1,obj2) {
    //Finding value for e used for the collision
    var e = (arrObjectProporties[obj1][12] + arrObjectProporties[obj2][12])/2;
    var m1 = arrObjectProporties[obj1][10];
    var m2 = arrObjectProporties[obj2][10];


    //Finding if time for x collision > time for y collision
    if (fctnFindTimeForCollision(obj1,obj2,0) > fctnFindTimeForCollision(obj1,obj2,1)){
        //X axis collides
        //Finding u on x axis
        var u1 = arrObjectProporties[obj1][8];
        var u2 = arrObjectProporties[obj2][8];

        //Finding new final velocities
        var v1 = ((m1*u1) + (m2*u2) - (m2*e*(u1-u2)))/(m1+m2);
        var v2 = e*(u1-u2) + v1;

        //Setting new velocities
        arrTempObjectProporties[obj1][8] = v1;
        arrTempObjectProporties[obj2][8] = v2;
        //Setting new momentum
        arrTempObjectProporties[obj1][6] = v1/m1;
        arrTempObjectProporties[obj2][6] = v2/m2;
        //Setting new pos
        arrTempObjectProporties[obj1][2] = arrObjectProporties[obj1][2] + v1;
        arrTempObjectProporties[obj2][2] = arrObjectProporties[obj2][2] + v2;

    } else {
        //Y axis collides
        //Finding u on x axis
        var u1 = arrObjectProporties[obj1][9];
        var u2 = arrObjectProporties[obj2][9];

        //Finding new final velocities
        var v1 = ((m1*u1) + (m2*u2) - (m2*e*(u1-u2)))/(m1+m2);
        var v2 = e*(u1-u2) + v1;

        //Setting new velocities
        arrTempObjectProporties[obj1][9] = v1;
        arrTempObjectProporties[obj2][9] = v2;
        //Setting new momentum
        arrTempObjectProporties[obj1][7] = v1/m1;
        arrTempObjectProporties[obj2][7] = v2/m2;
        //Setting new pos
        arrTempObjectProporties[obj1][3] = arrObjectProporties[obj1][3] + v1;
        arrTempObjectProporties[obj2][3] = arrObjectProporties[obj2][3] + v2;
    }

}

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



//Uses temporary array to calculate new position of object, assuming no new collisions take place
function fctnFindNewPos(index){
    //Calculating velocity of object
    arrTempObjectProporties[index][8] = arrTempObjectProporties[index][6]/arrTempObjectProporties[index][10];
    arrTempObjectProporties[index][9] = arrTempObjectProporties[index][7]/arrTempObjectProporties[index][11];
    //Calculating new positions
    arrTempObjectProporties[index][2] += arrTempObjectProporties[index][8];
    arrTempObjectProporties[index][3] += arrTempObjectProporties[index][9];


}

function fctnDrawObjects(){

    cnvsContext.clearRect(0,0,2000*ratio,800*ratio);
    for (var intLoop = 0; intLoop < arrObjectProporties.length; intLoop++){
        cnvsContext.beginPath();
        cnvsContext.moveTo((arrObjectProporties[intLoop][0])*ratio,(arrObjectProporties[intLoop][3])*ratio);
        cnvsContext.rect((arrObjectProporties[intLoop][2])*ratio, (arrObjectProporties[intLoop][3])*ratio, (arrObjectProporties[intLoop][4])*ratio, (arrObjectProporties[intLoop][5])*ratio);
        cnvsContext.stroke();

    }
}


fctnInitialiseGame();