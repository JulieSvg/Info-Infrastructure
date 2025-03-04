const instruments = ["Piano" , "Guitar" , "Violin", "Drums", "Saxophone", "Flute"]

const ulRef = document.getElementById("instrument-list");

for (let i = 0; i < instruments.length; i++) {
    const instru = instruments[i];
    ulRef.innerHTML += "<li>" + instru + "</li>";

}

    