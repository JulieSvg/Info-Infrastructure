const titleRef = document.getElementById("title");

console.log (titleRef)

const itemRef = document.getElementsByClassName("item");

console.log  (itemRef)

const altTitleRef = document.querySelector("#title")

console.log(altTitleRef)

const itemAltRef = document.querySelector (".item")

console.log(itemAltRef)

console.log(titleRef.innerHTML)

const ulRef = document.querySelector("body>ul")

console.log (ulRef.innerHTML)

titleRef.innerHTML = "DOM Manipulation >:)";

ulRef.innerHTML = ""

const melons = ["Cantaloupe" , "Watermelon" , "Muskmelon", "Regular melon", "Blind Melon", "Honeydew"]

for (let i = 0; i < melons.length; i++) {
    const melon = melons[i];
    ulRef.innerHTML += "<li class='item'>"+ melon + "</li>";
    
}

titleRef.style.backgroundColor = "red"
titleRef.style.color = "#00ff00"
titleRef.style.fontSize = "2em"
// em = 16px

document.querySelector("body > ul li").style.display = "none"
document.querySelector("body > ul li").style.display = "list-item"


document.querySelector("nav ul").style.display ="flex"

const firstAref = document.querySelector("a")

console.log("first a", firstAref)

firstAref.href = "dom.html"
firstAref.setAttribute("target", "_blank");










