
// Descrizione:
// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
// Consigli del giorno:
// * Pensate prima in italiano.
// * Dividete in piccoli problemi la consegna.
// * Individuate gli elementi di cui avete bisogno per realizzare il programma.

// 1. Visualizzare in pagina 5 numeri casuali
// 2.far partire un timer di 30s 
// 3. Alla fine dei 30s far scomparire i numeri e far uscire un promt 
// 4. Verificare se l'utente has azzecato = il software deve dire quanti e quali numeri sono stati indovinati 


const randomNumbers = document.getElementById("random-numbers");
const alertEl = document.getElementById("sostituto-alert");
const numRandom = getRandomNumbers(1, 50, 5);



randomNumbers.innerHTML = `<div class="m-3">${numRandom.join('  ')}</div>`;

setTimeout(startTimer, 30000);

function startTimer(){
    randomNumbers.classList.add("d-none");
}
setTimeout(userGuess, 35000);

function userGuess(){
    const userNum = prompt("che numero ti ricordi?");
    
        if(numRandom === userNum){
            alert("Mi dispiace ma i numeri inseriti non sono corretti, riprova", userNum);
        }else{
            randomNumbers.classList.add("d-block");
            alertEl.classList.add("text-danger");
            alertEl.innerHTML = `Questi sono i numeri che hai scelto <br> ${userNum} vs ${numRandom.join(" ")}`;
            alertEl.append(randomNumbers);
        }
    
}

function getRandomNumbers (min, max, length) {
    const array = [];

    while (array.length < length) {
      const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

        if (!array.includes(randomNumber)) {
        array.push(randomNumber);
        }
    }

    return array;
}


