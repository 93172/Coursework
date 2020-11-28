//PointObject constructor
function PointObject(name,x,y){
    this.name = name;
    this.x = x;
    this.y = y;
}

//Setters
PointObject.prototype.setName = function (name) {
    this.name = name;
}

PointObject.prototype.setX = function (x) {
    this.x = x;
}

PointObject.prototype.setY = function(y) {
    this.y = y;
}

//Getters
PointObject.prototype.getName = function () {
    return(this.name);
}

PointObject.prototype.getX = function () {
    return(this.x);
}

PointObject.prototype.getY = function () {
    return(this.y);
}


