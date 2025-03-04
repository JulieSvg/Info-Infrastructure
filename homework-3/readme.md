## Homework 2

### Create a Reference Variables

- const ulRef = document.getElementById("name of the ID");
- const altTitleRef = document.querySelector("#title")
- const itemRef = document.getElementsByClassName("item");

### Data Variables

- const instruments = ["Piano" , "Guitar" , "Violin", "Drums", "Saxophone", "Flute"]

- If variable numbers that we want to use later to do math we need to not put "" around the numbers.

### Create For Loop

- type For and choose For Loop to get this
  for (let i = 0; i < instruments.length; i++) {
  const instru = instruments[i];
  ulRef.innerHTML += "<li>" + instru + "</li>";
  }
