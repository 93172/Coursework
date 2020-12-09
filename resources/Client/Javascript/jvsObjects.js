
//Creating object for movement
var movementObj = new Movement(false,false,null)
//Creating objects for canvas
var playerObject = new ConservativeDynamicObject("PlayerObject",150,0,0,0,50,50,0,0,2,0.5);
var cube2 = new ConservativeDynamicObject("bop",50,0,0,0,50,50,0,0,2,0.5);
var floor = new StaticObject("floor",0,800,2000,100,0.5);
var leftWall = new StaticObject("leftWall",0,0,-50,800,0.5);

