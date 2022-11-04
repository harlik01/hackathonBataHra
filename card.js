class Card {
    constructor(imgPath, name, role, text, bgColor, optionNo, optionYes, unique, rarity, pack) {
        this.imgPath = imgPath;
        this.name = name;
        this.role = role;
        this.text = text;
        this.bgColor = bgColor;
        this.optionYes = optionYes;
        this.optionNo = optionNo;
        this.rarity = rarity;
        this.unique = unique;
        this.pack = pack;
    }
}

let cards = [];
let rarity = [1,2,3,4,5];
let raritySum = rarity.reduce((partialSum, a) => partialSum + a, 0) - 1;
let ranges = [[0], [1,2], [3,4,5], [6,7,8,9], [10,11,12,13,14]];


function nextCard() {
    // Get card category
    let randomNum = Math.floor(Math.random() * raritySum) + 1;
    let numRarity = null;
    for(let i = 0; i < ranges.length; i++) {
        console.log(i);
        for(let y = 0; y < ranges[i].length; y++) {
            if(randomNum == ranges[i][y]) {
                console.log(ranges[i][y]);
                numRarity = i + 1;
                break;
            }
        }
        if(numRarity != null) {
            break;
        }
    }
    console.log("Random: " + randomNum);
    console.log("Range:" + numRarity);
    // Generate card from range
    

}