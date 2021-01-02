//Creating object for movement
var movementObj = new Movement(false,false,null)
//Creating objects for canvas
var playerObject = new ConservativeDynamicObject("PlayerObject",150,50,0,0,50,50,0,0,2,1.5);
var floor = new StaticObject("floor",0,800,2000,100,0.5);
var leftWall = new StaticObject("leftWall",0,0,-50,800,1.5);
var rightWall = new StaticObject("rightWall",2000,0,50,800,1.5);
var ceiling = new StaticObject("ceiling",0,-50,2000,50,1.5);


function fctnLevel1() {
    //Making sure all constants are the right value
    fltGravity = 0.01;
    intGravityDirection = 1;
    fltAirResistance = 0.995;
    intJumpHeight = 5;
    boolCanFly = false;

    playerObject = new ConservativeDynamicObject("PlayerObject",5,740,0,0,50,50,0,0,2,0.5);
    //Creating pillars the players will jump up to get to the next level
    box1 = new StaticObject("box1",500,700,100,100,0.9);
    box2 = new StaticObject("box2",750,600,100,200,0.9);
    box3 = new StaticObject("box3",1000,500,100,300,0.9);
    box4 = new StaticObject("box4",1250,400,100,400,0.9);
    box5 = new StaticObject("box5",1500,300,100,500,0.9);
    box6 = new StaticObject("box6",1750,200,250,600,0.9);
    //Creating pickups that send the player back to the start if they fail a jump, also stops from getting stuck
    restartPickUp1 = new CollectableObjects("pickup1",925,700,"level1","#ff0000",50);
    restartPickUp2 = new CollectableObjects("Rpickup1",1175,700,"level1","#ff0000",50);
    restartPickUp3 = new CollectableObjects("Rpickup2",1425,700,"level1","#ff0000",50);
    restartPickUp4 = new CollectableObjects("Rpickup3",1675,700,"level1","#ff0000",50);
    //Creating the pickup that will send the player to the next level
    nextLevel = new CollectableObjects("NextLevel2-1",1825,150,"level2-1","#ff6708",25)
    //Initialising the object array for this level
    arrObjectArray = [playerObject,floor,leftWall,rightWall,ceiling,box1,box2,box3,box4,box5,box6,restartPickUp1,restartPickUp2,restartPickUp3,restartPickUp4,nextLevel];
}

function fctnLevel2_1() {
    //Making sure all constants are the right value
    fltGravity = 0.01;
    intGravityDirection = 1;
    fltAirResistance = 0.995;
    intJumpHeight = 5;
    boolCanFly = false;

    playerObject = new ConservativeDynamicObject("PlayerObject",5,740,0,0,50,50,0,0,2,0.5);
    //Creating moving platforms the player has to jump up
    platform1 = new DynamicObject("platform1",0,675,1,0,100,50,"x",0,1900,0.5);
    platform2 = new DynamicObject("platfrom2",100,550,0.75,0,100,50,"x",0,1900,0.5);
    platform3 = new DynamicObject("platfrom3",200,425,0.60,0,100,50,"x",0,1900,0.5);
    platform4 = new DynamicObject("platfrom4",300,300,0.5,0,100,50,"x",0,1900,0.5);
    //Creating static platform for reverse gravity pickup, and gravity pickup
    box1 = new StaticObject("boxForGravityPickup",1800,200,200,100,0.5);
    pickUp1 = new CollectableObjects("reverseGravityPickup",1900,150,"reverseGravity","#0404d1",25);
    //Creating next level pickups
    nextLevel2_2 = new CollectableObjects("NextLevel2-2",1000,25,"level2-2","#ff6708",25);
    nextLevel3_1 = new CollectableObjects("NextLevel3-1",500,200,"level3-1","#ff6708",25);
    //Initialising the object array for this level
    arrObjectArray = [playerObject,floor,leftWall,rightWall,ceiling, platform1,platform2,platform3,platform4,box1,pickUp1,nextLevel2_2,nextLevel3_1];
}

function fctnLevel2_2() {
    //Making sure all constants are the right value
    fltGravity = 0.01;
    intGravityDirection = 1;
    fltAirResistance = 0.995;
    intJumpHeight = 5;
    boolCanFly = false;

    playerObject = new ConservativeDynamicObject("PlayerObject",5,740,0,0,50,50,0,0,2,0.5);
    //Creating the horizontal moving platforms
    hPlatform1 = new DynamicObject("HorizontalPlatform1",150,700,1,0,100,50,"x",100,1900,0.5);
    hPlatform2 = new DynamicObject("HorizontalPlatform2",1900,150,-1,0,100,50,"x",100,1900,0.5);
    //Creating vertical moving platform
    vPlatform1 = new DynamicObject("VerticalPlatform1",1800,100,0,0.306,100,50,"y",100,650,0.5);
    //Creating next level pickup
    nextLevel3_2 = new CollectableObjects("NextLevel3-2",200,75,"level3-2","#ff6708",25);
    //Initialising object array for this level
    arrObjectArray = [playerObject,floor,leftWall,rightWall,ceiling,hPlatform1,hPlatform2,vPlatform1,nextLevel3_2];
}

function fctnLevel3_1() {
    //Making sure all constants are the right value
    fltGravity = 0.01;
    intGravityDirection = 1;
    fltAirResistance = 0.995;
    intJumpHeight = 5;
    boolCanFly = false;

    playerObject = new ConservativeDynamicObject("PlayerObject",5,740,0,0,50,50,0,0,2,0.5);
    //Creating Static objects
    staticPlatform1 = new StaticObject("Platform1",500,600,500,50,0.5);
    staticPlatform2 = new StaticObject("Platform1Wall",900,400,100,200,0.5);
    staticPlatform3 = new StaticObject("PickupPlatform",1800,200,200,100,0.5);
    //Creating conservative dynamic objects, will be used to move between platforms
    cube1 = new ConservativeDynamicObject("Cube to get to platform1",200,690,0,0,100,100,0,0,2,0.5);
    cube2 = new ConservativeDynamicObject("Cube on platform1",600,490,0,0,100,100,0,0,2,0.5);
    //Creating dynamic platform to let player get to next level pickup
    movingPlatform = new DynamicObject("Moving platform",1100,300,1,0,150,50,"x",1100,1650,0.5);
    //Creating pickup for next level
    nextLevel4_1 = new CollectableObjects("NextLevel4-1",1900,150,"level4-1","#ff6708",25);
    //Initialising object array for this level
    arrObjectArray = [playerObject,floor,leftWall,rightWall,ceiling,cube1,cube2,staticPlatform1,staticPlatform2,staticPlatform3,movingPlatform,nextLevel4_1];
}

function fctnLevel3_2() {
    //Making sure all constants are the right value
    fltGravity = 0.01;
    intGravityDirection = 1;
    fltAirResistance = 0.995;
    intJumpHeight = 5;
    boolCanFly = false;

    playerObject = new ConservativeDynamicObject("PlayerObject",5,100,0,0,50,50,0,0,2,0.5);
    //Creating Static objects
    bounceFloor = new StaticObject("bounceFloor",0,800,2000,100,12.5); //This will replace the floor for this level and has an extremely high e to allow the player to bounce to the next platform
    staticPlatform1 = new StaticObject("Platform1",0,200,500,600,0.5);
    staticPlatform2 = new StaticObject("Platform2",1500,200,500,500,0.5);
    //Creating pickups
    restartPickup = new CollectableObjects("NextLevel4-1",1900,750,"level4-1","#ff0000",25);
    nextLevel4_2 = new CollectableObjects("NextLevel4-2",1900,150,"level4-2","#ff6708",25); //Next level pickup
    //Initialising object array for this level
    arrObjectArray = [playerObject,bounceFloor,leftWall,rightWall,ceiling,staticPlatform1,staticPlatform2,nextLevel4_2,restartPickup];
}

function fctnLevel4_1() {
    //Making sure all constants are the right value
    fltGravity = 0.01;
    intGravityDirection = 1;
    fltAirResistance = 0.995;
    intJumpHeight = 5;
    boolCanFly = false;

    playerObject = new ConservativeDynamicObject("PlayerObject",250,740,0,0,50,50,0,0,2,0.5);
    //Creating static objects
    wall = new StaticObject("Wall to stop player getting to pickup",100,100,100,665,0.5);
    platform1 = new StaticObject("Platform1",1500,600,100,50,0.5);
    platform2 = new StaticObject("Platform2",1500,300,100,50,0.5);
    platform3 = new StaticObject("platform3 for make smaller pickup",750,450,100,50,0.5);
    //Creating dynamic objects
    movingPlatform1 = new DynamicObject("Moving platform 1",1000,750,1,0,100,50,"x",1000,1900,0.5);
    movingPlatform2 = new DynamicObject("Moving platform 2",1900,450,-1,0,100,50,"x",1000,1900,0.5);
    movingPlatform3 = new DynamicObject("Moving platform 3",1900,150,-1,0,100,50,"x",1000,1900,0.5);
    //Creating pickups
    pickUp1 = new CollectableObjects("Pickup make smaller",775,425,"makeSmaller","#3be319",25);
    pickUp2 = new CollectableObjects("Pickup let fly",50,750,"letPlayerFly","#0404d1",25);
    nextLevel5 = new CollectableObjects("NextLevel5",1900,50,"level5","#ff6708",25); //Next level pickup
    //Initialising object array for this level
    arrObjectArray = [playerObject,floor,leftWall,rightWall,ceiling,wall,platform1,platform2,platform3,movingPlatform1,movingPlatform2,movingPlatform3,pickUp1,pickUp2,nextLevel5];
}

function fctnLevel4_2() {
    //Making sure all constants are the right value
    fltGravity = 0.01;
    intGravityDirection = 1;
    fltAirResistance = 0.995;
    intJumpHeight = 5;
    boolCanFly = false;

    playerObject = new ConservativeDynamicObject("PlayerObject",250,740,0,0,50,50,0,0,2,0.5);
    //Creating static objects
    platform1 = new StaticObject("Platform1",1000,680,100,50,0.5);
    //Creating pickups
    pickUp1 = new CollectableObjects("pickUp1 reverse gravity",1500,530,"reverseGravity","#0404d1",25);
    pickUp2 = new CollectableObjects("pickUp2 increases jump height",250,50,"increaseJumpHeight","#e6da00",25);
    nextLevel4_1 = new CollectableObjects("NextLevel4-1",1000,400,"level4-1","#ff6708",25); //Next level pickup
    //Initialising object array for this level
    arrObjectArray = [playerObject,floor,leftWall,rightWall,ceiling,platform1,pickUp1,pickUp2,nextLevel4_1];
}

function fctnLevel5() {
    //Making sure all constants are the right value
    fltGravity = 0.01;
    intGravityDirection = 1;
    fltAirResistance = 0.995;
    intJumpHeight = 5;
    boolCanFly = false;

    playerObject = new ConservativeDynamicObject("PlayerObject",1000,740,0,0,50,50,0,0,2,0.5);
    //Creating static objects
    platform1 = new StaticObject("Platform1 for make small pickup",0,600,200,200,0.5);
    platform2 = new StaticObject("platform2 for reverse gravity pickup",1800,600,200,160,0.5);
    wall1 = new StaticObject("top wall for end game object",800,100,400,50,0.5);
    wall2 = new StaticObject("left wall for end game object",800,200,50,200,0.5);
    wall3 = new StaticObject("right wall for end game object",1150,200,50,200,0.5);
    wall4 = new StaticObject("bottom wall for end game object",800,450,400,50,0.5);
    //Creating dynamic objects
    movingPlatform1 = new DynamicObject("Moving platform",250,550,1,0,100,50,"x",250,1600,0.5);
    //Creating conservative dynamic objects
    box1 = new ConservativeDynamicObject("box1",500,700,0,0,100,100,0,0,2,0.5);
    //Creating pickups
    pickUp1 = new CollectableObjects("pickUp1 make smaller",50,550,"makeSmaller","#3be319",25);
    pickUp2 = new CollectableObjects("pickUp2 reverse gravity",1950,550,"reverseGravity","#0404d1",25);
    pickUp3 = new CollectableObjects("pickUp3 reduce gravity",1950,775,"reduceGravity","#04a5d1",5);
    //Add in pickUp to end game
    endGame = new CollectableObjects("End game pickup",1000,325,"endGame","#ff6708",25);

    //Initialising object array for this level
    arrObjectArray = [playerObject,floor,leftWall,rightWall,ceiling,platform1,platform2,wall1,wall2,wall3,wall4,movingPlatform1,box1,pickUp1,pickUp2,pickUp3,endGame];
}