let gameCards = [
    new Card("imgs/example.png", "Klement", "Zaměstnanec", "Mám manželku a 9 dětí, musím je živit. Potřebuji dostat přidáno.", "blue", [-15, 5, 0, 0], [20, -15, 0, 0], false, 4, 0),
    new Card("imgs/example.png", "Klement", "Zaměstnanec", "Zvyšuje se inflace a stěží  vyjdu s penězi.", "blue", [-10, 0, 0, 0], [15, -10, 0, 0], false, 1, 1),
    new Card("imgs/example.png", "Klement", "Zaměstnanec", "Již tady nějakou dobu pracuji, nemohl bych dostat přidáno?", "blue", [-10, 0, 0, 0], [10, -10, 0, 0], false, 3, 3),
    new Card("imgs/example.png", "Marie", "Zaměstnanec", "Ženy nemají stejné platové podmínky jako muži!", "blue", [-20, 5, 0, 0], [20, -15, 0, 0], false, 1, 0),
    new Card("imgs/example.png", "Marie", "Zaměstnanec", "Firma se rozrůstá, ale plat mám pořád stejný. Zvažuji výpověď.", "blue", [-10, 10, 0, 0], [10, -10, 0, 0], false, 3, 3),
    new Card("imgs/example.png", "Marie", "Zaměstnanec", "Právě se mi narodilo dítě, mohu dostat placenou dovolenou?", "blue", [-20, 10, 0, 0], [20, -20, 0, 0], false, 2, 4),
    new Card("imgs/example.png", "Karel Schinzel", "Vynálezce", "Dobrý den, snažím se rozšířit barevnou fotografii a mám pro Vás nabídku. Můžu jimi vylepšit vaše instruktážní materiály pro zaměstnance.", "blue", [-10, 0, -10, 0], [10, -10, 20, 0], true, 1, 1),
    new Card("imgs/example.png", "Otto Wichterle", "Vynálezce", "Zdravím, pane řediteli, můžu usnadnit práci Vašim zaměstnancům. Kontaktní čočky jim zpříjemní život. ", "blue", [-10, 0, -10, 0], [10, -10, 0, 0], true, 1, 3),
    new Card("imgs/example.png", "František Gahura", "Architekt", "Dobrý den, zaměstnanci si stěžují na nedostupnou zdravotní péčí. Mám pro Vás plány nové nemocnice. ", "blue", [-20, 0, 0, -20], [25, -15, 0, 20], true, 1, 2),
    new Card("imgs/example.png", "František Gahura", "Architekt", "Zdravím, šéfe, rozšiřujete firmu a zaměstnaci nemají kde bydlet. Postavte jim nové domky.", "blue", [-20, -10, 0, -15], [15, -10, 0, 10], false, 3, 2),
    new Card("imgs/example.png", "František Gahura", "Architekt", "Dobrý den, mám pro Vás návrhy nového obchodního domu. Chcete jej vystavět?", "blue", [-10, 0, 0, -10], [10, -15, 0, 15], false, 2, 1),
    new Card("imgs/example.png", "František Gahura", "Architekt", "Zdravím, ve Zlíně chybí kino, mám hotový návrh, ale musíme zničit dva domky. ", "blue", [0, -10, -10, -5], [0, -15, 0, 10], true, 2, 4),
    new Card("imgs/example.png", "Jan Jánský", "Lékař", "Dobrý den, ve firmě Vám chybí lékař, měl bych zájem. ", "blue", [-10, 0, 0, 0], [10, -10, 0, 0], true, 4, 0),
    new Card("imgs/example.png", "Jan Jánský", "Lékař", "Zdravím, chtěl bych ve Vaší nemocnici představit můj nový objev. ", "blue", [-10, 0, -10, 0], [10, 0, 10, 0], false, 3, 5),
    new Card("imgs/example.png", "Josef Ressel", "Vynálezce", "Zdravím, pane Baťo,  vytvořil jsem nový stroj, který nahradí některé zaměstnance. ", "blue", [0, -5, 0, -10], [-10, -10, 0, 10], false, 5, 3),
    new Card("imgs/example.png", "Josef Ressel", "Vynálezce", "Dobrý den, mám pro Vás návrh výstavby vodního kanálu. ", "blue", [-5, 0, 0, -10], [10, -10, 0, 10], true, 5, 2),
    new Card("imgs/example.png", "František Křižík", "Vynálezce", "Dobrý den, pane Baťo, navrhuji výstavbu osvětlení ve výrobě, ale osvětlovači přijdou o práci. ", "blue", [0, 0, 0, -10], [10, -10, 0, 10], true, 5, 0),
    new Card("imgs/example.png", "František Křižík", "Vynálezce", "Dobrý den, lidé nejsou spokojeni s noční podobou města, chcete vystavět pouliční lampy?", "blue", [-10, 0, 0, -10], [10, -10, 0, 15], false, 3, 1),
    new Card("imgs/example.png", "Ámos", "Učitel", "Lidé jsou nespokojeni s poskytovaným vzdělaním. Navrhuji výstavbu školy práce.", "blue", [-10, 0, -25, -15], [20, -20, 25, 15], true, 2, 0),
    new Card("imgs/example.png", "Ámos", "Učitel", "Máme nedostatečný počet učitelů. Chcete zvýšit jejich počet?", "blue", [0, 0, -15, 0], [5, -10, 20, 0], false, 2, 1),
    new Card("imgs/example.png", "Ámos", "Učitel", "Chybí nám zde vysoká škola. Chcete ji vystavět?", "blue", [-10, 0, -15, -10], [10, -20, 20, 10], true, 3, 4),
    new Card("imgs/example.png", "Ámos", "Učitel", "Přidáme mezi vyučované předměty i řízení podniku? Budeme ale muset rozšířit kapacitu školy.", "blue", [0, 0, -10, -10], [10, -15, 15, 10], true, 5, 0),
    new Card("imgs/example.png", "Ludmila", "Učitelka", "Některé předměty mi přijdou nezajímavé. Chcete nahradit výuku obuvnictví dějinami výtvarné kultury? ", "blue", [10, 0, 0, 0], [-10, -5, 5, 0], true, 3, 1),
    new Card("imgs/example.png", "Ludmila", "Učitelka", "Ve škole učí větší počet mužů. Přijmete více žen?", "blue", [-20, 0, 0, 0], [20, -5, 5, 0], false, 3, 1),
    new Card("imgs/example.png", "Milan", "Asistent", "Šéfe, konkurenční firma zkopírovala návrh našich bot. Podáme žalobu?", "blue", [0, -30, 0, 0], [0, -5, 0, 0], false, 3, 0),
    new Card("imgs/example.png", "Milan", "Asistent", "Pane řediteli, zaměstnanci navrhli vytvoření odborů, povolíme jim to?", "blue", [-30, 0, 0, 0], [30, -5, 0, 0], true, 3, 1),
    new Card("imgs/example.png", "Milan", "Asistent", "Firma se rozrůstá a můžeme otevřít novou továrnu, ale na nejvhodnějším místě nám zavazí domky. Postavíme ji zde?", "blue", [-15, 10, 0, 10], [10, -10, 0, -10], false, 1, 1),
    new Card("imgs/example.png", "Milan", "Asistent", "Nastala finanční krize, propustíme část zaměstnanců?", "blue", [20, -30, 0, 0], [-30, 20, 0, -10], false, 2, 1),
    new Card("imgs/example.png", "Milan", "Asistent", "Začala se nám rozšiřovat televize. Měli bychom začít vytvářet reklamy. Chcete vystavět filmové ateliéry?", "blue", [0, -10, 0, -15], [0, 20, 0, 10], true, 3, 3),
    new Card("imgs/example.png", "Milan", "Asistent", "Dělníci se bouří, začala stávka. Chcete ji násilně potlačit?", "blue", [20, -15, 0, -5], [-35, -10, 0, 0], false, 2, 1),
    new Card("imgs/example.png", "Milan", "Asistent", "Vedoucí pracovníci žádají o větší podíl ze zisku. Vyhovíme jim?", "blue", [-15, 10, 0, 0], [20, -15, 0, 0], false, 3, 1),
    new Card("imgs/example.png", "Milan", "Asistent", "Jeden z návrhů z poslední schůze bylo zavedení cen končící číslem 9. Výsledek ale není jistý.", "blue", [0, -20, 0, 0], [0, 25, 0, 0], true, 5, 1),
    new Card("imgs/example.png", "Alois Rašín", "Ministr financí", "Naše vláda navrhuje vyšší zdanění firem a nižší pro zaměstnance. Jste pro?", "blue", [-20, 10, 0, 0], [20, -20, 0, 0], true, 3, 2),
    new Card("imgs/example.png", "Josef Lada", "Malíř", "Měl byste zájem o mé malby?", "blue", [-10, 0, 10, 0], [10, -10, -5, 0], true, 1, 1),
    new Card("imgs/example.png", "Jan Werich", "Herec a scénárista", "Chtěl bych uvést moji novou divadelní hru ve Zlíně. Máte zájem?", "blue", [-10, -10, 0, 0], [10, 15, 10, 0], false, 5, 2),
    new Card("imgs/example.png", "Lída Baarová", "Herečka", "Chtěla bych natočit můj nový film ve Zlíně, ale potřebuji sponzory.", "blue", [-10, 10, 0, 0], [15, -10, 0, 0], true, 3, 2),
    new Card("imgs/example.png", "Joe", "Podnikatel", "Nabízím Vám stáž v mé New Yorské obuvnické společnosti. Získáté mnoho zkušeností, ale budu chtít malý úplatek.", "blue", [0, -10, -30, 0], [0, -10, 30, 0], true, 5, 0),
    new Card("imgs/example.png", "Franz", "Člen rakousko-uherské vlády ", "Potřebujeme vyrobit obuv pro naši armádu. Vaši zaměstnanci nebudou muset narukovat.", "blue", [-30, 10, -5, 5], [30, -20, 5, 5], true, 5, 2),
    new Card("imgs/example.png", "Henry Ford", "Podnikatel", "Myslím, že pásová výroby by zvýšila produkci, ale její začátek je velmi nákladný.", "blue", [-10, -5, 0, -10], [30, -20, 5, 5], true, 3, 0),
    new Card("imgs/example.png", "Karel", "Vedoucí pracovník", "Zvyšme počet pracovních hodin na 12.", "blue", [15, -10, 0, 0], [-20, 10, -10, 10], false, 4, 0),
    new Card("imgs/example.png", "Milena", "Lékařka", "V nemocnici máme zastaralé vybavení. Nakoupíte nové?", "blue", [-15, 10, -5, -10], [20, -10, 5, 10], false, 4, 0),
    new Card("imgs/example.png", "Josef", "Člen městské rady", "Firma by měla přispívat více peněz do městského rozpočtu.", "blue", [-10, 10, -10, -10], [10, -10, 5, 10], false, 5, 0),
    new Card("imgs/example.png", "Josef", "Člen městské rady", "Škola je příliš nákladná – zrušme ji.", "blue", [20, -10, 25, 10], [-25, 10, -35, 10], true, 3, 2),
    new Card("imgs/example.png", "Josef", "Člen městské rady", "Město Vám nabízí pozemky na výstavbu budov. Máte zájem?", "blue", [-10, 10, 0, -20], [15, -15, 0, 20], false, 3, 0),
    new Card("imgs/example.png", "Honza", "Správce kina", "Kino potřebuje rekonstrukci", "blue", [-15, 10, -5, -10], [15, -20, 10, 10], false, 2, 1),
    new Card("imgs/example.png", "Emil", "Sportovní nadšenec", "Ve městě chybí sport. Založte fotbalový klub.", "blue", [-15, 10, 0, 0], [15, -20, 0, 5], true, 2, 1)
];

let rarityQuantity = [[], [], [], [], []];
updateRarityQuantity();

function updateRarityQuantity() {
    rarityQuantity = [[], [], [], [], []];
    for (let i = 0; i < 5; i++) {
        for (let x = 0; x < gameCards.length; x++) {
            if (gameCards[x].rarity == (i + 1)) {
                rarityQuantity[i].push(x);
            }
        }
    }
}


// First card
nextCard();
