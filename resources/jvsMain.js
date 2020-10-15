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
var arrObjectProporties = [["CD", "wall",50.0,50.0,100.0,100.0,0.0,0.0,0.0,0.0,1.0,0.5,0.5]];
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

},false);

//Initialises game, resizes canvas to previously calculated values
function fctnInitialiseGame() {
    cnvs.width = cnvsWidth;
    cnvs.height = cnvsHeight;
    fctnMain();
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
        for (var intLoopDecCol2 = intLoopDecCol1; intLoopDecCol2 < arrTempObjectProporties.length; intLoopDecCol2++){
            //Checks to see if collision has occured between 2 objects
            var boolCol = fctnDetectCollisons(intLoopDecCol1,intLoopDecCol2);
            //If collision has occured
            if (boolCol == true){
                //Find new positions after collision
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

        //Checks to see if the object has collided
        if((xDif < xDim1) && (yDif < yDim1)){
            return true;
        }
        return  false;
    }

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