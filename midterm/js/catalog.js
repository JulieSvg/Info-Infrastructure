const catalogRef = document.querySelector("#catalog");
// "<img src'images/i210-midterm-product1.webp' />"

const catalogItems = [
    {
      image:"images/i210-midterm-product1.webp",
      name: "My First Fire",
    },
    {
      image:
        "images/i210-midterm-product6.webp",
      name: "Handy Hand",
    },
    {
      image:
        "images/i210-midterm-product2.webp",
      name: "NapSack",
    },
    {
      image:
        "images/i210-midterm-product3.webp",
      name: "Strawberry Hot Tub Wildlife Feeder",
    },
    {
        image:
          "images/i210-midterm-product4.webp",
        name: "Toilet Meadow",
    },

    {
        image:
          "images/i210-midterm-product5.webp",
        name: "Pudding Pouch",
    },
      
  ];

  catalogRef.innerHTML = "";

  for (let index = 0; index < catalogItems.length; index++) {
    const item = catalogItems[index];
  
    const newArticle = document.createElement("article");
    const newImg = document.createElement("img");
    newImg.src = item.image;
    newImg.height = 200;
    newImg.width = 200;
    newArticle.appendChild(newImg);


    const newP = "<p>" + item.name + "</p>";
    newArticle.innerHTML += newP;
    catalogRef.appendChild(newArticle);
    ;
}
