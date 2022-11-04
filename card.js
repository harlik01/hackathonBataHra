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
        this.pack = pack;
    }
}

let cards = [];
let rarity = [1,2,3,4,5];
let raritySum = rarity.reduce((partialSum, a) => partialSum + a, 0);

function nextCard() {
    let randomNum = Math.floor(Math.random() * raritySum) + 1;
    // beforeSum - (beforeSum + value - 1)
    console.log("Random: " + randomNum);
}