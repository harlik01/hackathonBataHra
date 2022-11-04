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

    // Generate card from range
    console.log("random: " + randomNum);
    console.log("numRarity: " + numRarity);

    let randomCardIndex = Math.floor(Math.random() * rarityQuantity[numRarity - 1].length);
    let generatedCard = gameCards[rarityQuantity[numRarity - 1][randomCardIndex]];
    
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
    profilePicture.src = generatedCard.imgPath;
    text.innerHTML = generatedCard.text;
}

function updateValues(generatedCard) {

}

function animeChangedValue() { 
}