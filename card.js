class Card {
    constructor(imgPath, name, role, text, bgColor, optionNo, optionYes, rarity) {
        this.imgPath = imgPath;
        this.name = name;
        this.role = role;
        this.text = text;
        this.bgColor = bgColor;
        this.optionYes = optionYes;
        this.optionNo = optionNo;
        this.rarity = rarity;
    }
}

cards = [];

function nextCard() {
    let randomNum = Math.floor(Math.random() * 5) + 1;
    console.log("Random: " + randomNum);
}