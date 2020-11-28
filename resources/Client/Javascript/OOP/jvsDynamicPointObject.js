function DynamicPointObject(name,x,y,xVelocity,yVelocity){
    PointObject.call(this, name, x, y);

    this.xVelocity = xVelocity;
    this.yVelocity = yVelocity;
}

//Setters
DynamicPointObject.prototype.setXVelocity = function (xVelocity) {
    this.xVelocity = xVelocity;
}

DynamicPointObject.prototype.setYVelocity = function (yVelocity) {
    this.yVelocity = yVelocity;
}

//Getters
DynamicPointObject.prototype.getXVelocity = function () {
    return(this.xVelocity);
}

DynamicPointObject.prototype.getYVelocity = function () {
    return(this.yVelocity);
}