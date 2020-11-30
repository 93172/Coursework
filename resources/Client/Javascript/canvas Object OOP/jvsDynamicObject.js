//DynamicObject
class DynamicObject extends DynamicPointObject {
    //Constructor
    constructor(name, x, y, xVelocity, yVelocity, xDimention, yDimention,e) {
        super(name, x, y, xVelocity, yVelocity);
        this.xDimention = xDimention;
        this.yDimention = yDimention;
        this.e = e;
    }



    //Getters
    getXDimention(){
        return(this.xDimention);
    }

    getYDimention(){
        return(this.yDimention);
    }

    getE(){
        return(this.e);
    }

    getObjectType() {
        return("DynamicObject");
    }

    //Setters
    setXDimention(xDimention){
        this.xDimention = xDimention;
    }

    setYDimention(yDimention){
        this.yDimention = yDimention;
    }

    setE(e){
        this.e = e;
    }
}