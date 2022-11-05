class Card {
    constructor(imgPath, name, role, text, bgColor, optionNo, optionYes, unique, rarity, pack) {
        this.imgPath = imgPath;
        this.name = name;
        this.role = role;
        this.text = text;
        this.bgColor = bgColor;
        this.optionYes = optionYes;
        this.optionNo = optionNo;
        this.unique = unique;
        this.rarity = rarity;
        this.pack = pack;
    }
}

class LearningCards {
    constructor(imgPath, name, role, text, bgColor, optionNo, optionYes, type) {
        this.imgPath = imgPath;
        this.name = name;
        this.role = role;
        this.text.text = text;
        this.bgColor = bgColor;
        this.optionNo = optionNo;
        this.optionYes = optionYes;
        this.type = type;
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

    // Generate card from range
    console.log("random: " + randomNum);
    console.log("numRarity: " + numRarity);

    let randomCardIndex = Math.floor(Math.random() * rarityQuantity[numRarity - 1].length);
    let generatedCard = gameCards[rarityQuantity[numRarity - 1][randomCardIndex]];

    console.log("index: " + rarityQuantity[numRarity - 1][randomCardIndex]);
    
    // If past card = unique, delete card
    console.log("Unikátnout: " + generatedCard.unique);
    if(generatedCard.unique == true) {
        gameCards.splice(rarityQuantity[numRarity - 1][randomCardIndex], 1);
        console.log("Unikátní karta smazána!");
    }

    console.log("randomCardIndex: " + randomCardIndex);
    console.log("generatedCard: " + generatedCard.text);

    // Set next card
    setNewCard(generatedCard);

}

function setNewCard(generatedCard) {
    let role = document.getElementById("role");
    let name = document.getElementById("name");
    let profilePicture = document.getElementById("img-path");
    let text = document.getElementById("text");

    role.innerHTML = generatedCard.role;
    name.innerHTML = generatedCard.name;
    profilePicture.src = "imgs/" + generatedCard.name + ".png";
    text.innerHTML = generatedCard.text;
}

function updateValues(generatedCard) {

}

function animeChangedValue() {

}