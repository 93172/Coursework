//PointObject
class PointObject{
    //Constructor
    constructor(name, x, y) {
        this.name = name;
        this.x = x;
        this.y = y;
        this.tempX = x;
        this.tempY = y;
    }



    //Getters
    getX() {
        return(this.x);
    }

    getY() {
        return(this.y);
    }

    getTempX() {
        return(this.tempX);
    }

    getTempY() {
        return(this.tempY);
    }

    getObjectType() {
        return("PointObject");
    }



    //Setters
    setX(x) {
        this.x = x;
    }

    setY(y) {
        this.y = y;
    }

    setTempX(x){
        this.tempX = x;
    }

    setTempY(y){
        this.tempY = y;
    }
}