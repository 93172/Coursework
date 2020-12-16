//ConservativeDynamicObject
class ConservativeDynamicObject extends  DynamicObject{
    //Constructor
    constructor(name, x, y, xVelocity, yVelocity, xDimention, yDimention, xMomentum, yMomentum, mass, e) {
        super(name, x, y, xVelocity, yVelocity, xDimention, yDimention,e);
        this.xMomentum = xMomentum;
        this.yMomentum = yMomentum;
        this.tempXMomentum = xMomentum;
        this.tempYMomentum = yMomentum;
        this.mass = mass;
        this.e = e;
    }



    //Getters
    getXMomentum(){
        return(this.xMomentum);
    }

    getYMomentum(){
        return(this.yMomentum);
    }

    getTempXMomentum(){
        return(this.tempXMomentum);
    }

    getTempYMomentum(){
        return(this.tempYMomentum);
    }

    getObjectType() {
        return("ConservativeDynamicObject");
    }

    getMass(){
        return(this.mass);
    }



    //Setters
    setXMomentum(xMomentum){
        this.xMomentum = xMomentum;
    }

    setYMomentum(yMomentum){
        this.yMomentum = yMomentum;
    }

    setTempXMomentum(xMomentum){
        this.tempXMomentum = xMomentum;
    }

    setTempYMomentum(yMomentum){
        this.tempYMomentum = yMomentum;
    }

    setMass(mass){
        this.mass = mass;
    }
}