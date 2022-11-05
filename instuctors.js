class LearningCards {
    constructor(imgPath, name, role, text, bgColor, optionNo, optionYes, type) {
        this.imgPath = imgPath;
        this.name = name;
        this.role = role;
        this.text = text;
        this.bgColor = bgColor;
        this.optionNo = optionNo;
        this.optionYes = optionYes;
        this.type = type;
    }
}

let instuctors = [
    new LearningCards("", "Instruktor", "Manažer", "Visual Studio je aplikace pro správu týmu.", "blue", 1, 0, 0),
    new LearningCards("", "Instruktor", "Manažer", "Konkurenční firma nám zkopírovala design. Mělo by se to řešit?", "blue", 0, 1, 0),
    new LearningCards("", "Instruktor", "Manažer", "Bitcoin je měna z jihovýchodní Asie.", "blue", 1, 0, 0),
    new LearningCards("", "Instruktor", "Manažer", "Akcie jsou cenné kovy.", "blue", 1, 0, 0),
    new LearningCards("", "Instruktor", "Obuvník", "Kopytům se v obuvnictví říká formě na výrobu bot.", "blue", 0, 1, 1),
    new LearningCards("", "Instruktor", "Obuvník", "Pro udržení zdvihu kopyta se nesmí do boty vkládat pružina.", "blue", 1, 0, 1),
    new LearningCards("", "Instruktor", "Obuvník", "Kopyto se vytvoří dříve než šablona", "blue", 0, 1, 1),
    new LearningCards("", "Instruktor", "Obuvník", "Na podšívku i svršek se využívá jeden střih.", "blue", 1, 0, 1),
    new LearningCards("", "Instruktor", "Obuvník", "Aby se šití hned neprochodilo, kůži z boku musíme naříznout a udělat drážku do které se schová šev", "blue", 0, 1, 1),
    new LearningCards("", "Instruktor", "Obuvník", "Konec šití je pod špičkou boty.", "blue", 0, 1, 1),
    new LearningCards("", "Instruktor", "IT pracovník", "Konstruktor se volá v každém cyklu", "blue", 1, 0, 2),
    new LearningCards("", "Instruktor", "IT pracovník", "Node.js běží na straně serveru", 0, "blue", 1, 2),
    new LearningCards("", "Instruktor", "IT pracovník", "Java je typově závislá", "blue", 0, 1, 2),
    new LearningCards("", "Instruktor", "IT pracovník", "Vývoj Java aplikací probíhá hlavně v sublime text", "blue", 1, 0, 2),

];

let typeQuantity = [[], [], []];
updateTypeQuantity();

function updateTypeQuantity() {
    for (let i = 0; i < 3; i++) {
        for (let x = 0; x < instuctors.length; x++) {
            if (instuctors[x].type == (i)) {
                typeQuantity[i].push(x);
            }
        }
    }
}