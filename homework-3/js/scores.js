const scores = [95 , 72 , 88, 45, 60, 79, 82, 91, 50, 38]


const ulRef = document.getElementById("score_list");

const pRef = document.getElementById("average-score");


for (let i = 0; i < scores.length; i++) {
    const score = scores[i];
    ulRef.innerHTML += "<li>" + score + "</li>";
}

let totalScore = 0;
for (let i = 0; i < scores.length; i++) {
    totalScore += scores[i]; 
}

let averageScore = totalScore / scores.length; 


pRef.textContent = `Average Score: ${averageScore}`; 
