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
var arrObjectProporties = [["CD", "player",50.0,50.0,100.0,100.0,0.0,0.0,0.0,0.0,1.0,0.5,0.5],["SO", "wall",500,300,100,50,0,0,0,0,1.0,0.5,0.5]];
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
                fctnFindCollisionPos(intLoopDecCol1,intLoopDecCol2);
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
        //Gets difference of objects x and y coords
        var xDif = arrTempObjectProporties[indexObj2][2] - arrTempObjectProporties[indexObj1][2];
        var yDif = arrTempObjectProporties[indexObj2][3] - arrTempObjectProporties[indexObj1][3];

        //If a object 1s x or y coordinate is < object 2s finds the difference of the x or y coordinate + x or y dimension
        if (xDif < 0){
            xDif += xDim2;
        } else if (yDif < 0){
            yDif += yDim2;
        }

        console.log(xDif, xDim1);
        //Checks to see if the object has collided
        if((xDif < xDim1) && (yDif < yDim1)){
            return true;

        }
        return  false;
    }

}
//Finds position of collision
function fctnFindCollisionPos(indexObj1,indexObj2) {
    //[index][2] = x pos
    //[index][3] = y pos
    //[index][6] = x momentum
    //[index][7] = y momentum

    //The side of object 2 the collision is on, if it is false object 1 is to the left of object 2 or object 1 is above object 2
    var boolXSide = false;
    var boolYSide = false;
    //Finds the difference in x between object 1 and object 2
    var xDif = arrTempObjectProporties[indexObj2][2] - arrTempObjectProporties[indexObj1][2];
    var yDif = arrTempObjectProporties[indexObj2][3] - arrTempObjectProporties[indexObj1][3];
    //In case object 2 is to the left or above of object 1
    if (xDif < 0){
        xDif += arrObjectProporties[indexObj2][4];
        boolXSide = true;
    }
    if (yDif < 0){
        yDif += arrObjectProporties[indexObj2][5];
        boolYSide = true;
    }

    //Finding a ratio of distance to speed, the dimension that has the smallest ratio overlaps last, therefor is the dimension to collide
    var fltXDistSpeedRatio = xDif/arrObjectProporties[indexObj1][8];
    var fltYDistSpeedRatio = yDif/arrObjectProporties[indexObj1][9];

    if (fltXDistSpeedRatio < 0){
        fltXDistSpeedRatio = fltXDistSpeedRatio*-1;
    }
    if (fltYDistSpeedRatio < 0){
        fltYDistSpeedRatio = fltYDistSpeedRatio*-1;
    }


    if (1==1) {
        /*
        //Finding collision Pos
        if (fltXDistSpeedRatio < fltYDistSpeedRatio){

            var fltXCollisionPos;
            var fltYCollisionPos;

            //The x collision position is the x pos of one of the sides of the shape if x boundaries collide
            fltXCollisionPos = arrTempObjectProporties[indexObj2][2];
            if (boolXSide == true){
                fltXCollisionPos += arrTempObjectProporties[indexObj2][4]
            }
            //fractionMoved is distance moved/velocity
            var fractionMoved = (fltXCollisionPos - arrTempObjectProporties[indexObj1][2])/arrObjectProporties[indexObj1][8];
            //Y collides at original position + y speed * fraction moved
            fltYCollisionPos = arrTempObjectProporties[indexObj1][3] += arrTempObjectProporties[indexObj1][9]*fractionMoved;

            //Changes objects velocity to new velocity post collision
            arrTempObjectProporties[indexObj1][8] = fctnFindVelocityPostCollision(indexObj1,indexObj2,2)
            //Finds objects new momentum
            arrTempObjectProporties[indexObj1][6] = arrTempObjectProporties[indexObj1][10] * arrTempObjectProporties[indexObj1][8];

            //If object 2 is dynamic finds its velocity
            if (arrObjectProporties[indexObj2][0] == "CD" || arrObjectProporties[indexObj2][0] == "Dy"){
                arrTempObjectProporties[indexObj2][8] = arrObjectProporties[indexObj2][11](arrObjectProporties[indexObj2][6] - arrObjectProporties[indexObj1][6]) + arrTempObjectProporties[indexObj1][8];
                arrTempObjectProporties[indexObj2][6] = arrTempObjectProporties[indexObj2][10] * arrTempObjectProporties[indexObj2][8];
            }

        } else {

            //The y collision position is the x pos of one of the sides of the shape if x boundaries collide
            fltYCollisionPos = arrTempObjectProporties[indexObj2][3];
            if (boolXSide == true){
                fltYCollisionPos += arrTempObjectProporties[indexObj2][5]
            }
            //fractionMoved is distance moved/velocity
            var fractionMoved = (fltYCollisionPos - arrTempObjectProporties[indexObj1][3])/arrObjectProporties[indexObj1][9];
            //Y collides at original position + y speed * fraction moved
            fltXCollisionPos = arrTempObjectProporties[indexObj1][2] += arrTempObjectProporties[indexObj1][8]*fractionMoved;

            //Changes objects velocity to new velocity post collision
            arrTempObjectProporties[indexObj1][9] = fctnFindVelocityPostCollision(indexObj1,indexObj2,3)
            arrTempObjectProporties[indexObj1][7] = arrTempObjectProporties[indexObj1][10] * arrTempObjectProporties[indexObj1][9];

            //Changes objects velocity to new velocity post collision
            arrTempObjectProporties[indexObj1][9] = fctnFindVelocityPostCollision(indexObj1,indexObj2,3)
            //Finds objects new momentum
            arrTempObjectProporties[indexObj1][7] = arrTempObjectProporties[indexObj1][10] * arrTempObjectProporties[indexObj1][9];

            //If object 2 is dynamic finds its velocity
            if (arrObjectProporties[indexObj2][0] == "CD" || arrObjectProporties[indexObj2][0] == "Dy"){
                arrTempObjectProporties[indexObj2][9] = arrObjectProporties[indexObj2][11]*(arrObjectProporties[indexObj2][7] - arrObjectProporties[indexObj1][7]) + arrTempObjectProporties[indexObj1][9];
                arrTempObjectProporties[indexObj2][7] = arrTempObjectProporties[indexObj2][10] * arrTempObjectProporties[indexObj2][9];
            }
        }
        */
    } //code stored here


}

//Finds velocity of object 1 after a collision
function fctnFindVelocityPostCollision(indexObj1,indexObj2,speedIndex) {
    var mass1 = arrObjectProporties[indexObj1][10];
    var mass2 = arrObjectProporties[indexObj2][10];
    var e = arrObjectProporties[indexObj2][11];
    var speed1 = arrObjectProporties[indexObj1][speedIndex];
    var speed2 = arrObjectProporties[indexObj2][speedIndex];

    var postCollisionSpeed = ((mass1*speed1 + mass2*speed2)-mass2*(e*(speed1-speed2)))/(mass1+mass2);
    return postCollisionSpeed;
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