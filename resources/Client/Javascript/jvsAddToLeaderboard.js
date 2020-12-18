function fctnGetlocalStorageContainer(name,id){
    document.getElementById(id).innerHTML = name + ": " + localStorage.getItem(name);
}

function fctnSendToMenu() {
    window.location.replace("Menu.html");
}
fctnGetlocalStorageContainer("Score","ScoreDisplay");
fctnGetlocalStorageContainer("Time","TimeDisplay");