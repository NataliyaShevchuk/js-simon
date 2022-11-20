//ESERCITAZIONE A LEZIONE 

// const seconds = prompt("Quanti secondi mancano alla cottura deella pasta?");

//questa funzione verrà eseguita dopo un tot di teempo (aka quello che ha inserito l'utente)
//uso la funzioone setTimeout con una funzione anonima
// setTimeout(function() { 
//     alert("la pasta è pronta");
// }, seconds * 1000); //essendo l'unità di misura della funzione i millisecondi, dovrò converitre il risultato dell'utente in tali per essere lletti da JS

//------------------------
//                  TIMER SEMPLICE
//per prima cosa creiamo un piccolo layout in html del nostro orologio
//succesivamente recuperiamo gli elementi via le variabili 

// const hoursEl = document.querySelector(".hours");
// const minutesEl = document.querySelector(".minutes");
// const secondsEl = document.querySelector(".seconds");

// //contrlliamo che il recupero degli elementi sia avvenuto in maniera corretta
// console.log(hoursEl, minutesEl, secondsEl);

// //ora bisogna assegnare il valore ad ogni bloccco
// //prima recupero l'rario attuale del pc e in seguito da questa data possiamo usare le funzione dei seconds, minute ecc.

// // const now = new Date();

// //questo mi recupera l'ora attuale e me lo segna nel mio span
// // hoursEl.textContent = now.getHours(); 
// // minutesEl.textContent = now.getMinutes();
// // secondsEl.textContent = now.getSeconds();
// //i secondi sono quelli più "attivi" e devono essere aggiornati
// //quindi usiamo la funzione 

// //ora facciamo il setInterval che leggerà la funziione ogni secondo
// setInterval( updateClock, 500 ); //usando i 500 millisecondi ci permette di evitare i ritardi e dunque essere più puntali

// function updateClock() { //la funzione dice che ogni volta che essa viene eseguita la const now leggerà il tempo in quel preciso momento (aggiornato) del pc
//     //ho spostato il blocco del data timing per farsì che il tempo sia sempre il più attendibile possibile all'orario del pc
//     const now = new Date();

// //questo mi recupera l'ora attuale e me lo segna nel mio span
//     hoursEl.textContent = now.getHours(); 
//     minutesEl.textContent = now.getMinutes();
//     secondsEl.textContent = now.getSeconds();
// }

//--------------------------------
//                          Timer
// //per prima cosa creiamo un piccolo layout in html del nostro orologio
// //succesivamente recuperiamo gli elementi via le variabili 

// const hoursEl = document.querySelector(".hours");
// const minutesEl = document.querySelector(".minutes");
// const secondsEl = document.querySelector(".seconds");

// //contrlliamo che il recupero degli elementi sia avvenuto in maniera corretta
// console.log(hoursEl, minutesEl, secondsEl);

// //elementi del timer
// const timerEl = document.querySelector(".timer");
// const btnStart = document.querySelector(".btn-start");
// const btnPause = document.querySelector(".btn-pause");
// const btnReset = document.querySelector(".btn-reset");
// //ora recuperiamo l'input con un name
// const inputTimerLenght = document.querySelector("[name='durata-timer']");

// //ci serve una varibaile globale (let perchè i secondi si aggiornano quindi variano) dove salvare i secondi passati
// //questa var sarà usata dal cronometro e conterrà il  numero di secondi
// let timer = 0; //partiamo da zero

// //salviamo in una variabile let il setInterval per poi poter usarla usare nel clearInterval 
// let intervalId; 

// //ora facciamo il setInterval che leggerà la funziione ogni secondo
// setInterval( updateClock, 500 ); //usando i 500 millisecondi ci permette di evitare i ritardi e dunque essere più puntali

// function updateClock() { //la funzione dice che ogni volta che essa viene eseguita la const now leggerà il tempo in quel preciso momento (aggiornato) del pc
//     //ho spostato il blocco del data timing per farsì che il tempo sia sempre il più attendibile possibile all'orario del pc
//     const now = new Date();

// //questo mi recupera l'ora attuale e me lo segna nel mio span
//     hoursEl.textContent = now.getHours(); 
//     minutesEl.textContent = now.getMinutes();
//     secondsEl.textContent = now.getSeconds();
// }
// //----------------------------------------------
// //codice del timer

// btnStart.addEventListener("click",  function(){
//     startTimer();
// });

// //una volta che l'abbiamo aavviato ci occorre anche un modo per metterlo in pausa
// //quindi mettiiamo un event listener sul btnPause
// btnPause.addEventListener("click", function(){
//     pauseTimer(); //scrivo il nome della funzione che si occuperà di stoppare il timer
// });

// //ora attivo il btnReset = questo bloccherà del tutto il timer
// btnReset.addEventListener("click", function(){
//     resetTimer();
// });

// //la funzione startTimer avvia il cronometro  in base all'input
// function startTimer(){
//     //avviare il setInterval
//     intervalId = setInterval(function(){
//         //incrementiamo i secondi passati con i ++
//         timer++;

//         //inserisco la funzione dei secondi aggiornati all'interno di html
//         updateTimer(timer);

//         console.log("timer in");
//     }, 1000);//avviamo la funziione dopo un secondo 
// }

// //scrivo la funzione che si occuperà di stoppare il timer
// function pauseTimer(){
//     clearInterval( intervalId ); //a tutti gli effetti non posso bloccare un timer ma eliminarlo 
//                                 // ed è di questo che si occupa il clearInterval
// }

// //creo la funzione del reset timer che poi verrà azionata nel event listner di btnReset
// function resetTimer(){
//     clearInterval(intervalId); //applichiamo il clearInterval per eliminare il timer 
//     //potremmo anche usare la funzione pauseTimer();, il risultato sarebbe stato identico 

//     //aggiorno la var
//     timer = 0;

//     //ora per aggiornare html dobbiamo reinvocare la funzione updateTimer assegnandoli come argomento laa var timer
//     updateTimer(timer);
// }
// //ora  bisogna collegare startTimer  al testo di prima (aka timer semplice)
// function updateTimer(seconds){ //questa funzione riceve i secondi passati e li stampa nel timerEl
//     timerEl.textContent = `00:${seconds}`; //stampiamo il testo 00:02 (ovvero i secondi che scorrono)

// }

//////-------Esempio in versione decrescente-------------------------------------------------------

//per prima cosa creiamo un piccolo layout in html del nostro orologio
//succesivamente recuperiamo gli elementi via le variabili 

const hoursEl = document.querySelector(".hours");
const minutesEl = document.querySelector(".minutes");
const secondsEl = document.querySelector(".seconds");

//contrlliamo che il recupero degli elementi sia avvenuto in maniera corretta
console.log(hoursEl, minutesEl, secondsEl);

//elementi del timer
const timerEl = document.querySelector(".timer");
const btnStart = document.querySelector(".btn-start");
const btnPause = document.querySelector(".btn-pause");
const btnReset = document.querySelector(".btn-reset");
//ora recuperiamo l'input con un name
const inputTimerLenght = document.querySelector("[name='durata-timer']");

//ci serve una varibaile globale (let perchè i secondi si aggiornano quindi variano) dove salvare i secondi passati
//questa var sarà usata dal cronometro e conterrà il  numero di secondi
let timer = 0; //partiamo da zero

//salviamo in una variabile let il setInterval per poi poter usarla usare nel clearInterval 
let intervalId; 

//ora facciamo il setInterval che leggerà la funziione ogni secondo
setInterval( updateClock, 500 ); //usando i 500 millisecondi ci permette di evitare i ritardi e dunque essere più puntali

function updateClock() { //la funzione dice che ogni volta che essa viene eseguita la const now leggerà il tempo in quel preciso momento (aggiornato) del pc
    //ho spostato il blocco del data timing per farsì che il tempo sia sempre il più attendibile possibile all'orario del pc
    const now = new Date();

//questo mi recupera l'ora attuale e me lo segna nel mio span
    hoursEl.textContent = now.getHours(); 
    minutesEl.textContent = now.getMinutes();
    secondsEl.textContent = now.getSeconds();
}
//----------------------------------------------
//codice del timer

btnStart.addEventListener("click",  function(){
    startTimer();
});

//una volta che l'abbiamo aavviato ci occorre anche un modo per metterlo in pausa
//quindi mettiiamo un event listener sul btnPause
btnPause.addEventListener("click", function(){
    pauseTimer(); //scrivo il nome della funzione che si occuperà di stoppare il timer
});

//ora attivo il btnReset = questo bloccherà del tutto il timer
btnReset.addEventListener("click", function(){
    resetTimer();
});

//la funzione startTimer avvia il cronometro  in base all'input
function startTimer(){
    // se conto alla rovescia, imposta il valore iniziale del timer
    //scriviamo la condizione fuori dalla funzione dell'intervallo per far sì che non venga cancellata ogni sec
    if(inputTimerLenght.value !== ""){
        timer = parseInt(inputTimerLenght.value);
    }

    //avviare il setInterval
    intervalId = setInterval(function(){
        //1. il campo durata timer (aka inputTimerLength) ha un valore?
        // se sì il timer dev'essere un conto alla rovescia altrimenti un conto normale
        if(inputTimerLenght.value === ""){ //quando non ha valore è sempre una stinga vuota
            //timer normale, incremento dei secondi
            timer++;
        }else{
            //altrimenti se timeer decrementale allora applico il conto alla rovescia
            timer--;

            //sicome così il timer va in negativo, per corregerlo usaimo un altra condizione 
            //che dice se il valore di partenza del timer (let timer = 0;) è uguale o minore a zero
            //allora stoppa il timer (quindi evoco laa funzione reset)
            if (timer <= 0){
                resetTimer();
                return;
            } 
        }

        //incrementiamo i secondi passati con i ++
        // timer++; //si sposta nella condione sopra

        //inserisco la funzione dei secondi aggiornati all'interno di html
        updateTimer(timer);

        console.log("timer in");
    }, 1000);//avviamo la funziione dopo un secondo 
}

//scrivo la funzione che si occuperà di stoppare il timer
function pauseTimer(){
    clearInterval( intervalId ); //a tutti gli effetti non posso bloccare un timer ma eliminarlo 
                                // ed è di questo che si occupa il clearInterval
}

//creo la funzione del reset timer che poi verrà azionata nel event listner di btnReset
function resetTimer(){
    clearInterval( intervalId ); //applichiamo il clearInterval per eliminare il timer 
    //potremmo anche usare la funzione pauseTimer();, il risultato sarebbe stato identico 

    //aggiorno la var
    timer = 0;

    //ora per aggiornare html dobbiamo reinvocare la funzione updateTimer assegnandoli come argomento laa var timer
    updateTimer(timer);
}
//ora  bisogna collegare startTimer  al testo di prima (aka timer semplice)
function updateTimer(seconds){ //questa funzione riceve i secondi passati e li stampa nel timerEl
    
    //in caso volessi formattare l'output in html 
    //dovremo creare le due variaili che convertono i sec in min ed in seguito aggiornare questo dettaglio in html traformando il numero in stringa con toString e padStart
    // const minutes = Math.floor(seconds / 60);
    // const sec = seconds - (minutes * 60);

    timerEl.textContent = `00:${seconds}`; //stampiamo il testo 00:02 (ovvero i secondi che scorrono)
}
