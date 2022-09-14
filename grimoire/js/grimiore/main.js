const getAllSpells = () => {
    
    const allSpells = [
        {
            name: "Turn enemy into a newt",
            isEvil: true,
            energyRequired: 5.1
        },
        {
            name: "Conjure some gold for a local charity",
            isEvil: false,
            energyRequired: 2.99
        },
        {
            name: "Give a deaf person the ability to heal",
            isEvil: false,
            energyRequired: 12.2
        },
        {
            name: "Make yourself emperor of the universe",
            isEvil: true,
            energyRequired: 100.0
        },
        {
            name: "Convince your relatives your political views are correct",
            isEvil: false,
            energyRequired: 2921.5
        }
    ];
    
    return allSpells;
}

const makeEvilSpellBook = (allSpells) => {

    const goodBook = {
        title: "Good Book",
        spells: allSpells.filter(spell => !spell.isEvil)
    };

    return goodBook;
}

const makeGoodSpellBook = (allSpells) => {

    const evilBook = {
        title: "Evil Book",
        spells: allSpells.filter(spell => spell.isEvil)
    };

    return evilBook;
}

const displaySpellBook = (book) => {

    console.log(book.title);
    for (const spell of book.spells) {
        
        console.log(`   ${spell.name}`);
    };
}
console.log("Do you believe in magic?");
console.log("------------------------");

const allSpells = getAllSpells();
const goodBook = makeGoodSpellBook(allSpells);
const evilBook = makeEvilSpellBook(allSpells);

displaySpellBook(evilBook);
console.log();
displaySpellBook(goodBook);
