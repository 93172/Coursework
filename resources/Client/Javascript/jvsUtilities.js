//Finds if a < b < c
function fctnInBounds(a,b,c){
    if (a <= b && b <= c){
        return true;
    } else {
        return false;
    }
}

//Finds distance between 2 points
function fctnFindDifference(a,b){
    if (a-b < 0){
        return(-1*(a-b));
    } else {
        return(a-b);
    }
}

function fctnSendToMenu() {
    window.location.replace("Menu.html");
}

function fctnSendToGame() {
    window.location.replace("Game.html");
}