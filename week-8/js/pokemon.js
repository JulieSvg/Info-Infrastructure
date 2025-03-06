console.log("pokemon")


function showAlert () {
    alert("Annoying message");
}

const confirmBtnRef = document.querySelector("#confirm-btn");

function showConfirm(){
    const userConfirmed = confirm("You are a robot, right?");
    console.log(userConfirmed);

}

confirmBtnRef.onclick= showConfirm; 

console.log(confirmBtnRef); 

function showPrompt(){
    const userInput= prompt ("What's your favoritee flavor of ice cream?","vanilla"
    );
    console.log(userInput);
}

// Code for pokemon journey

const journeyRef = document.querySelector("#journey")

function startJourney(){
    journeyRef.innerHTML= "<p>You are so exited, today you get your first pokemo! Sitting in front of you are pokeballs for Bulbasaur, Charmander, Squirtle. Choose your pokemon:</p>";

    const starterPokemon = [
        {name:"Bulbasaur", img: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png",}, 
        {name: "Charmander", img: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/004.png",}, {name: "Squirtle", img:"https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/007.png",},
    ];


    for (let i = 0; i < starterPokemon.length; i++) {
        const pokemon = starterPokemon[i];

        const newSection = document.createElement("section");
        newSection.innerHTML += "<img height='100' src= '" + pokemon.img + "' alt='" + pokemon.name +  "' />"; 


        // this do the same as the line 43
        // const newImg = document.createElement("img");
        // newImg.height = "100";
        // newImg.src = pokemon.img;
        // newImg.alt = pokemon.name;
        // newSection.appendChild(newImg);

        newSection.innerHTML += "<h4>" + pokemon.name + "</h4>";

        newSection.dataset.pokemonName= pokemon.name;
        newSection.dataset.pokemonImage= pokemon.img;
        newSection.onclick = choosePokemon; 

        journeyRef.appendChild(newSection);

        console.log(pokemon);
        
    }

}

function choosePokemon(e) {
    console.log(e.currentTarget);
    const pokemonName = e.currentTarget.dataset.pokemonName;
    const pokemonImg = e.currentTarget.dataset.pokemonImage;

    const confirmChoice = confirm("You chose " + pokemonName);

    if (confirmChoice) {
        journeyRef.innerHTML += "You chose " + pokemonName + "as your starter pokemon."

        myPokemon = { name: pokemonName, img: pokemonImg}
    }


}