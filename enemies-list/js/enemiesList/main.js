// Put your code here
console.log("My Enemies List!");
console.log("----------------");

const enemies = [
    {
        firstName: "Joshua",
        lastName: "Flowers",
        offenses: [
            "Being a jerk to me in elementary school",
            "Not being nice to me in elementary school"
        ],
        isReallyHated: true
    },
    {
        firstName: "Darth",
        lastName: "Flowers",
        offenses: [
            "Cut off Luke's hand",
            "Not being nice to me in elementary school"
        ],
        isReallyHated: false
    },
    {
        firstName: "Betty",
        lastName: "Flowers",
        offenses: [
            "Phone calls in the theater",
            "Not being nice to me in elementary school"
        ],
        isReallyHated: true
    },
    {
        firstName: "Leon",
        lastName: "Flowers",
        offenses: [
            "Keeps giving me a hotplate",
            "Not being nice to me in elementary school"
        ],
        isReallyHated: false
    },
];

for (const myEnemy of enemies) {
    if (myEnemy.isReallyHated) {
        console.log(`${myEnemy.firstName} ${myEnemy.lastName} (Really, really dislike!)`);
    }
    else {
        console.log(`${myEnemy.firstName} ${myEnemy.lastName}`);
    }
}
