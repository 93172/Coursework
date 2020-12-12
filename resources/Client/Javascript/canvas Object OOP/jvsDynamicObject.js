//DynamicObject
class DynamicObject extends DynamicPointObject {
    //Constructor
    constructor(name, x, y, xVelocity, yVelocity, xDimention, yDimention,axis,bound1,bound2,e) {
        super(name, x, y, xVelocity, yVelocity);
        this.xDimention = xDimention;
        this.yDimention = yDimention;
        this.e = e;
        this.bound1 = bound1;
        this.bound2 = bound2;
        this.axis = axis;
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

    getBound1() {
        return(this.bound1);
    }

    getBound2() {
        return(this.bound2);
    }

    getAxis() {
        return(this.axis);
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

    setBound1(bound1) {
        this.bound1 = bound1;
    }

    setBound2(bound2) {
        this.bound2 = bound2;
    }

    setAxis(axis) {
        this.axis = axis;
    }
}