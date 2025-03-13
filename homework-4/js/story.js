let wetClothes = false; 

const storyRef = document.querySelector("#story");
const choicesRef = document.querySelector("#choices"); 


function startAdventure() {
    storyRef.innerHTML = "<p>Today, you have decided to go on a hike. After about 30 minutes of hiking, you come across a river. What do you do?</p>";

    choicesRef.innerHTML = "";

    addChoice("You decided to turn around, it's not worth it.", endAdventure);
    addChoice("You take off your shoes and decide to walk in the water to cross.", crossRiver);
    addChoice("You decide to jump on rocks to cross.", slipAndFall);
}

function addChoice(text, action) {
    let button = document.createElement("button");
    button.innerText = text;
    button.onclick = action;
    choicesRef.appendChild(button);
}

function endAdventure() {
    storyRef.innerHTML = "<p>You decide to turn around, you didn't want to get wet, you will come an other day with better shoes to croos. You go back to your car and go home.</p>";
    choicesRef.innerHTML = "";
}

function crossRiver() {
    storyRef.innerHTML = "<p> You remove your shoes and step into the cold, rushing water. The riverbed is slippery, but you manage to cross safely. Your feet are wet, but you dry them off before moving on.</p>";
    continueHiking();
}


function slipAndFall() {
    storyRef.innerHTML = "<p>You attempt to hop across the rocks, but one is slick with moss. Your foot slips, and with a splash, you're plunged into the icy water. Drenched from head to toe, you shiver as you climb out. With no dry clothes, the cold clings to you as you continue on.</p>";
    wetClothes = true;
    continueHiking();
}

function continueHiking() {
    storyRef.innerHTML = "<p>You keep walking, but the weather is getting colder. You start walking faster, eager to get home. You get to a part of the path that split in two, but you don't remember which way you need to take to go back to your car, you need to make a choice. Which way do you go?</p>";
    choicesRef.innerHTML = "";

    addChoice("Go Left", goLeft);
    addChoice("Go Right", goRight);
}

function goLeft() {
    storyRef.innerHTML = "<p>You take the left path and keep walking, but soon realize you're lost. Unfortunently, you will never find your way back. </p>";
    choicesRef.innerHTML = "";
}


function goRight() {
    if (wetClothes) {
        storyRef.innerHTML = "<p>It's too cold, and your clothes aren’t drying. As the night falls, you seek shelter under a tree, trying to escape the biting wind. You need to decide if you want to light a fire to get warmer or endure the night in the cold?</p>";
        choicesRef.innerHTML = "";

        addChoice("Start a fire", confirmFire);
        addChoice("Stay in the dark", stayDark);
    }    
    else {
        storyRef.innerHTML = "<p> Despite the cold, you continue to walk, your steady pace is keeping you warm. An hour later, you see your car. You made it!</p>";
        choicesRef.innerHTML = "";
    }
}

function confirmFire() {
    let confirmChoice = confirm("You want to start a fire, right?");

    if (confirmChoice) {
        startFire();
    } else {
        stayDark();
    }

}

function startFire() {
    storyRef.innerHTML = "<p>You start a fire to stay warm, but the bushes catch fire! The flames spread too fast, the whole forest start burning, and you are trapped. There is nowhere to go, you die.</p>";
    choicesRef.innerHTML = "";
    
}

function stayDark() {
    storyRef.innerHTML = "<p>You curl up, shivering. Suddenly, a pair of glowing eyes stare at you through the darkness, it's a wolf. What do you do?</p>";
    choicesRef.innerHTML = "";

    addChoice("Stay still", stayWithWolf);
    addChoice("Run", runAway);
}


function stayWithWolf() {
    storyRef.innerHTML = "<p>The wolf comes close and curls up beside you, keeping you warm. In the morning, you wake up the wolf is gone and you decide to keep walking, after an hour you finally made your way back to your car. You survived!</p>";
    choicesRef.innerHTML = "";
}

function runAway() {
    storyRef.innerHTML = "<p>Panic takes over, and you bolt into the darkness. You run in fear, but you get lost in the dark. Unfortunatly, you are lost and do not survive the night.</p>";
    choicesRef.innerHTML = "";
}