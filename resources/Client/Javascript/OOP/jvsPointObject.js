//PointObject
class PointObject{
    //Constructor
    constructor(name, x, y) {
        this.name = name;
        this.x = x;
        this.y = y;
    }



    //Getters
    getX() {
        return(this.x);
    }

    getY() {
        return(this.y);
    }



    //Setters
    setX(x) {
        this.x = x;
    }

    setY(y) {
        this.y = y;
    }
}