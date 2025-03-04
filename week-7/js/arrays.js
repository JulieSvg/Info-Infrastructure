const favoriteReptiles = ["Gecko", "Komodo Dragon", "Bearded Dragon"];

console.log(favoriteReptiles);
console.table (favoriteReptiles);

console.log("First things:", favoriteReptiles[0])

console.log("# of favorite reptiles:", favoriteReptiles.length)


// type For and choose For Loop to get this
for (let i = 0; i < favoriteReptiles.length; i++) {
    const reptiles = favoriteReptiles[i];
    console.log(reptiles);
}

for (let i = favoriteReptiles.length - 1; i > -1; i--) {
    console.log("Index:", i);
    
}


