//DynamicPointObject
class DynamicPointObject extends PointObject{
    //Constructor
    constructor(name, x, y, xVelocity, yVelocity) {
        super(name,x,y);
        this.xVelocity = xVelocity;
        this.yVelocity = yVelocity;
    }



    //Getters
    getXVelocity(){
        return(this.xVelocity);
    }

    getYVelocity(){
        return(this.yVelocity);
    }

    //Setters
    setXVelocity(xVelocity){
        this.xVelocity = xVelocity;
    }

    setYVelocity(yVelocity){
        this.yVelocity = yVelocity;
    }
}