class Game {
    constructor() {
        this.morality = 50;
        this.money = 50;
        this.education = 50;
        this.technology = 50;
        this.year = 1895;
    }
}

let game = new Game();

function startStory() {
    document.getElementById("start-page").style.visibility = "hidden";
    document.getElementById('body').style.background = "transparent url('./imgs/industrial-background.png') no-repeat fixed center";
    document.getElementById('body').style.backgroundSize = "cover";
}