let numberOfPack = 0;
let counter = 0;
let score = 0;
counter++;

function startEdu(counter, numberOfPack) {
    this.numberOfPack = numberOfPack;
    console.log(numberOfPack);
    document.getElementById("start-page").style.visibility = "hidden";
    setNewCard(numberOfPack, counter);
}


function setNewCard(numberOfPack, counter) {
    console.log("counter: " + counter);
    console.log("delka:" + typeQuantity[numberOfPack].length);
    console.log("type " + typeQuantity[numberOfPack]);
    if((counter - 1) > (parseInt(typeQuantity[numberOfPack].length))) {
        document.getElementById("end-text").style.innerHTML = "Dosáhl jsi " + score + " bodů z " + instuctors[numberOfPack][counter].length;
        document.getElementById("end-container").style.visibility = "visible";
    } else {
        let role = document.getElementById("role");
        let name = document.getElementById("name");
        let profilePicture = document.getElementById("img-path");
        let text = document.getElementById("text");

        role.innerHTML = typeQuantity[numberOfPack][counter - 1].role;
        name.innerHTML = typeQuantity[numberOfPack][counter - 1].name;
        profilePicture.src = "imgs/" + typeQuantity[numberOfPack][counter - 1].name + ".png";
        text.innerHTML = typeQuantity[numberOfPack][counter - 1].text;
    }
}