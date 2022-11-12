/*Dato un array contenente una lista di cinque immagini (che create voi in base alle img che vi passo),
creare un carosello come nello screenshot allegato.*/

// crazione array vuoto
const imgArray = [];

// inserimento immagini in array
imgArray[0] = new Image();
imgArray[0].src = 'img/01.webp';

imgArray[1] = new Image();
imgArray[1].src = 'img/02.webp';

imgArray[2] = new Image();
imgArray[2].src = 'img/03.webp';

imgArray[3] = new Image();
imgArray[3].src = 'img/04.webp';

imgArray[4] = new Image();
imgArray[4].src = 'img/05.webp';

console.log(imgArray);

//creazione ciclo 
for(let i = 0; i < imgArray.length; i++) {
    let cont = document.getElementById("item-container");
    let div = document.createElement("div");
    div.classList.add("img");
    div.classList.add("item");
    div.append(imgArray[i]);
    cont.append(div);
}

const divArray = document.getElementsByClassName("img");
divArray[0].classList.add("active");
let activeItem = 0;

// button prev
let prev = document.getElementById("btnPrev");
// aggiungo classe hidden button prev per rimuovere il button sulla prima img
prev.classList.add("hidden");

// button next
let next = document.getElementById("btnNext");

// creazione funzione btn next
next.addEventListener("click",
    function() {
        if(activeItem < divArray.length - 1) {            
            // rimuovo classe active 
            divArray[activeItem].classList.remove("active");

            // incremento di uno l'indice dell'elemento da visualizzare
            activeItem ++;

            // aggiungere active elemento successivo
            divArray[activeItem].classList.add("active");
        };

        //  aggiungo classe hidden al button next
        if(activeItem === divArray.length - 1){
            next.classList.add("hidden");
        }

        // rimuovo il button prev con la classe hidden arrivato all'ultimo
        if(activeItem > 0){
            prev.classList.remove("hidden");
        }
    }
);


// creazione funzione btn prev
prev.addEventListener("click",
   function(){
        if(activeItem > 0) {
            divArray[activeItem].classList.remove("active");

            activeItem --;

            divArray[activeItem].classList.add("active");
        }

        if(activeItem == 0) {
            prev.classList.add("hidden");
        }

        if(activeItem < divArray.length - 1){
            next.classList.remove("hidden");
        }
   } 
);