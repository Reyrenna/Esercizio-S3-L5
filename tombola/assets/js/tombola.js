const tombolaus = document.getElementById("tombolaus");

const numeriUsciti = [];
caselle();

function caselle() {
  for (let i = 0; i < 90; i++) {
    const divNumeri = document.createElement("div");
    divNumeri.innerText = i + 1;
    tombolaus.appendChild(divNumeri);
    divNumeri.classList.add("caselle");
  }
}
const button = document.getElementById("estraiNumeri");

estraiNumeri.addEventListener("click", function (e) {
  e.preventDefault();
  let numero = Math.floor(Math.random() * 90) + 1;
  numeriUsciti.push(numero);
  const celle = document.querySelectorAll("#tombolaus div");
  for (let i = 0; i < celle.length; i++) {
    if (parseInt(celle[i].innerText) === numero) {
        celle[i].classList.add("numeroUscito");
    }
  }
});

function check(){
        for(let i = 0; i < numeriUsciti; i++){
         numero === i
        }
}