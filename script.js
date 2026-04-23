const questions = [
  {question:"Which country is part of QUAD?", options:["China","India","Russia","Germany"], answer:"India"},
  {question:"Year of Kargil War?", options:["1995","1999","2001","2005"], answer:"1999"},
  {question:"Capital of Japan?", options:["Seoul","Beijing","Tokyo","Bangkok"], answer:"Tokyo"},
  {question:"NATO headquarters is in?", options:["Paris","Berlin","Brussels","Rome"], answer:"Brussels"},
  {question:"UN founded in?", options:["1945","1939","1950","1920"], answer:"1945"},
  {question:"Currency of China?", options:["Yen","Won","Yuan","Dollar"], answer:"Yuan"},
  {question:"Which country is not in G7?", options:["USA","India","Germany","France"], answer:"India"},
  {question:"India became republic in?", options:["1947","1950","1952","1960"], answer:"1950"},
  {question:"Largest democracy?", options:["USA","India","Brazil","UK"], answer:"India"},
  {question:"China's capital?", options:["Shanghai","Beijing","Guangzhou","Wuhan"], answer:"Beijing"},
  {question:"Cold War was between?", options:["USA & USSR","USA & China","India & Pak","UK & Germany"], answer:"USA & USSR"},
  {question:"ASEAN stands for?", options:["Asian Economic Union","Association of Southeast Asian Nations","Asian Security Network","None"], answer:"Association of Southeast Asian Nations"}
];

let current = 0;
let score = 0;

const qEl = document.getElementById("question");
const optEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const resultEl = document.getElementById("result");
const progressEl = document.getElementById("progress");

function loadQ() {
  const q = questions[current];
  qEl.textContent = q.question;
  optEl.innerHTML = "";
  nextBtn.style.display = "none";

  progressEl.textContent = `Question ${current+1} of ${questions.length}`;

  q.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.textContent = opt;

    btn.onclick = () => {
      const buttons = document.querySelectorAll("#options button");

      buttons.forEach(b => b.disabled = true);

      if(opt === q.answer){
        btn.classList.add("correct");
        score += 4;
      } else {
        btn.classList.add("wrong");
        score -= 1;
        buttons.forEach(b => {
          if(b.textContent === q.answer){
            b.classList.add("correct");
          }
        });
      }

      nextBtn.style.display = "block";
    };

    optEl.appendChild(btn);
  });
}

nextBtn.onclick = () => {
  current++;
  if(current < questions.length){
    loadQ();
  } else {
    showResult();
  }
};

function showResult(){
  qEl.textContent = "Quiz Completed!";
  optEl.innerHTML = "";
  nextBtn.style.display = "none";

  let message = "";
  if(score > 30) message = "🔥 Strong knowledge!";
  else if(score > 15) message = "👍 Good job!";
  else message = "📚 Keep learning";

  resultEl.textContent = `Score: ${score} | ${message}`;
}

loadQ();