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

let generatedCard = null;
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

    // Update rarityQuantity
    rarityQuantity = [[], [], [], [], []];
    updateRarityQuantity();

    let randomCardIndex = Math.floor(Math.random() * rarityQuantity[numRarity - 1].length);
    generatedCard = gameCards[rarityQuantity[numRarity - 1][randomCardIndex]];

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

    // Update year
    game.year++;
    document.getElementById("year").innerHTML = game.year;

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

function updateValues(index, generatedCard, game) {
    let answer = [];
    if(index == 0) {
        for(let i = 0; i < generatedCard.optionNo.length; i++) {
            answer.push(generatedCard.optionNo[i]);
        }
    }
    else {
        for(let i = 0; i < generatedCard.optionYes.length; i++) {
            answer.push(generatedCard.optionYes[i]);
        }
    }

    console.log("answer:" + answer);

    for(let i = 0; i < answer.length; i++) {
        if(answer[i] < 0) {
            answer[i] = Math.abs(answer[i]);
        }
        else if(answer[i] > 0) {
           answer[i] = -Math.abs(answer[i]);
        }
        else {

        }
    }

    console.log("vyska před: " + document.getElementById("progress-knowledge").style.height);

    let userValue = parseInt(document.getElementById("progress-user").offsetHeight + (answer[0] / 2));
    let dollarValue = parseInt(document.getElementById("progress-dollar").offsetHeight + (answer[1] / 2));
    let progressValue = parseInt(document.getElementById("progress-knowledge").offsetHeight + (answer[2] / 2));
    let infrastructureValue = parseInt(document.getElementById("progress-infrastructure").offsetHeight + (answer[3] / 2));


    document.getElementById("progress-user").style.height = parseInt(userValue) + "px";
    document.getElementById("progress-dollar").style.height = parseInt(dollarValue) + "px";
    document.getElementById("progress-knowledge").style.height = parseInt(progressValue) + "px";
    document.getElementById("progress-infrastructure").style.height = parseInt(infrastructureValue) + "px";

    console.log("vyska před: " + document.getElementById("progress-knowledge").style.height);

    console.log("user: " + userValue);
    controlOverflowAndEnd(userValue, dollarValue, progressValue, infrastructureValue);
}

function controlOverflowAndEnd(userValue, dollarValue, progressValue, infrastructureValue) {
    let max = 0;
    let min = 50;
    if(userValue < max) {
        document.getElementById("progress-user").style.height = parseInt(max) + "px";
    } else if(userValue > min) {
        document.getElementById("progress-user").style.height = parseInt(min) + "px";
        document.getElementById("end-text").innerHTML = "Lidé byli s politikou firmy nespokojení a podnikli dělnické povstávní. Byl jsi nalezen mrtvý ve své pracovně s nožem v zádech.";
        document.getElementById("end-h1").innerHTML += " v roce " + game.year + ".";
        document.getElementById("end-container").style.visibility = "visible";
    }
    if(dollarValue < max) {
        document.getElementById("progress-dollar").style.height = parseInt(max) + "px";
    } else if(dollarValue > min) {
        document.getElementById("progress-dollar").style.height = parseInt(min) + "px";
        document.getElementById("end-text").innerHTML = "Byli jste příliš štědří, vaší firmě došli finance.";
        document.getElementById("end-h1").innerHTML += " v roce " + game.year + ".";
        document.getElementById("end-container").style.visibility = "visible";
    }
    if(progressValue < max) {
        document.getElementById("progress-knowledge").style.height = parseInt(max) + "px";
    } else if(progressValue > min) {
        document.getElementById("progress-knowledge").style.height = parseInt(min) + "px";
        document.getElementById("end-text").innerHTML = "Vaši dělníci nebyli dostatečně poučeni a jeden z dělníků se přiotrávil lepidlem. Vy jste za něj nesl odpovědnost, a proto jste skončil ve vězení.";
        document.getElementById("end-h1").innerHTML += " v roce " + game.year + ".";
        document.getElementById("end-container").style.visibility = "visible";
    }
    if(infrastructureValue < max) {
        document.getElementById("progress-infrastructure").style.height = parseInt(max) + "px";
    } else if(infrastructureValue > min) {
        document.getElementById("progress-infrastructure").style.height = parseInt(min) + "px";
        document.getElementById("end-text").innerHTML = "Kvalita městské infrastruktury není konkurence schopná, a proto vás opustili klíčový investoři.";
        document.getElementById("end-h1").innerHTML += " v roce " + game.year + ".";
        document.getElementById("end-container").style.visibility = "visible";
    }
}