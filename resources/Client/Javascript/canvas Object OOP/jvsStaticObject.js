//StaticObject
class StaticObject extends PointObject{
    //Constructor
    constructor(name, x, y, xDimention, yDimention, e) {
        super(name, x, y);

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
        return("StaticObject");
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