//DynamicPointObject
class DynamicPointObject extends PointObject{
    //Constructor
    constructor(name, x, y, xVelocity, yVelocity) {
        super(name,x,y);
        this.xVelocity = xVelocity;
        this.yVelocity = yVelocity;
        this.tempXVelocity = xVelocity;
        this.tempYVelocity = yVelocity;
    }



    //Getters
    getXVelocity(){
        return(this.xVelocity);
    }

    getYVelocity(){
        return(this.yVelocity);
    }

    getTempXVelocity(){
        return(this.tempXVelocity);
    }

    getTempYVelocity(){
        return(this.tempYVelocity);
    }

    getObjectType() {
        return("DynamicPointObject");
    }

    //Setters
    setXVelocity(xVelocity){
        this.xVelocity = xVelocity;
    }

    setYVelocity(yVelocity){
        this.yVelocity = yVelocity;
    }

    setTempXVelocity(xVelocity){
        this.tempXVelocity = xVelocity;
    }

    setTempYVelocity(yVelocity){
        this.tempYVelocity = yVelocity;
    }
}