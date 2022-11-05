let counter = 0;
let score = 0;

setNewCard(counter);


function setNewCard(counter) {
    if(counter == typeQuantity[numberOfPack].length) {
        document.getElementById("end-text").style.innerHTML = "Dosáhl jsi " + score + " bodů z " + instuctors[numberOfPack][counter].length;
        document.getElementById("end-container").style.visibility = "visible";
    } else {
        let role = document.getElementById("role");
        let name = document.getElementById("name");
        let profilePicture = document.getElementById("img-path");
        let text = document.getElementById("text");

        role.innerHTML = typeQuantity[numberOfPack][counter].role;
        name.innerHTML = typeQuantity[numberOfPack][counter].name;
        profilePicture.src = "imgs/" + typeQuantity[numberOfPack][counter].name + ".png";
        text.innerHTML = typeQuantity[numberOfPack][counter].text;
    }
}