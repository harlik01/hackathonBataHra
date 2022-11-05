class Game {
    constructor() {
        this.morality = 50;
        this.money = 50;
        this.education = 50;
        this.technology = 50;
    }
}

let game = new Game();

function startStory() {
    document.getElementById("start-page").style.visibility = "hidden";
}