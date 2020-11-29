//ConservativeDynamicObject
class ConservativeDynamicObject extends  DynamicObject{
    //Constructor
    constructor(name, x, y, xVelocity, yVelocity, xDimention, yDimention, xMomentum, yMomentum,e) {
        super(name, x, y, xVelocity, yVelocity, xDimention, yDimention,e);
        this.xMomentum = xMomentum;
        this.yMomentum = yMomentum;
    }



    //Getters
    getXMomentum(){
        return(this.xMomentum);
    }

    getYMomentum(){
        return(this.yMomentum);
    }

    //Setters
    setXMomentum(xMomentum){
        this.xMomentum = xMomentum;
    }

    setYMomentum(yMomentum){
        this.yMomentum = yMomentum;
    }
}