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
    fltGravity = 0.05;
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
    fltGravity = 0.05;
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
    pickUp1 = new CollectableObjects("reverseGravityPickup",1900,150,"reverseGravity","#e6da00",25);
    //Creating next level pickups
    nextLevel2_2 = new CollectableObjects("NextLevel2-2",1000,25,"level2-2","#ff6708",25);
    nextLevel3_1 = new CollectableObjects("NextLevel3-1",500,200,"level3-1","#ff6708",25);
    //Initialising the object array for this level
    arrObjectArray = [playerObject,floor,leftWall,rightWall,ceiling, platform1,platform2,platform3,platform4,box1,pickUp1,nextLevel2_2,nextLevel3_1];
}

function fctnLevel2_2() {
    //Making sure all constants are the right value
    fltGravity = 0.05;
    intGravityDirection = 1;
    fltAirResistance = 0.995;
    intJumpHeight = 5;
    boolCanFly = false;

    arrObjectArray = [playerObject,floor,leftWall,rightWall,ceiling];
}

function fctnLevel3_1() {
    //Making sure all constants are the right value
    fltGravity = 0.05;
    intGravityDirection = 1;
    fltAirResistance = 0.995;
    intJumpHeight = 5;
    boolCanFly = false;

    arrObjectArray = [playerObject,floor,leftWall,rightWall,ceiling];
}