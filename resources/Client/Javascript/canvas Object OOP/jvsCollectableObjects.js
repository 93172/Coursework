class CollectableObjects extends PointObject {
    constructor(name, x, y, collectable, color, radius) {
        super(name,x,y);
        this.collectable = collectable;
        this.color = color;
        this.radius = radius;
    }

    //Getters
    getObjectType() {
        return("CollectableObject");
    }

    getCollectableType() {
        return(this.collectable);
    }

    getColor() {
        return(this.color);
    }

    getRadius() {
        return(this.radius);
    }

    //Setters
    setCollectable(collectable) {
        this.collectable = collectable;
    }

    setColor(color) {
        this.color = color;
    }

    setRadius(radius) {
        this.radius = radius;
    }

}