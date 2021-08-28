//tableau contenant toutes les images du carrousel
let images = ['images/01.jpg', 'images/02.jpg', 'images/03.jpg', 'images/04.jpg', 'images/05.jpg'];

//Correspond à l'index de l'image du tableau en cours
let pointeur= 0;

// Contient le minuteur "setInterval"
let timer; 


//On attend le chargement du DOM
window.onload = function()
{
    // Récupération de l'élément "flèche droite"
    let navRight = document.querySelector('#nav-right');
    // Ecouteur élément sur flèche droite
    navRight.addEventListener('click', imageSuivante);
    let navLeft = document.querySelector('#nav-left');
    navLeft.addEventListener('click', imagePrecedente);

    let img=document.querySelector('img');
    // Si le curseur de la souris sort de l'image, on relance le timer
    img.addEventListener('mouseout', startCarrousel);
    // Si le curseur de la souris est sur l'image, on arrête le timer
    img.addEventListener('mouseover', stopCarrousel);

    // Démarre le carrousel
    startCarrousel();

}


// Arrête le carrousel
function stopCarrousel()
 {
    clearInterval(timer);
}


function startCarrousel()
 {

    // Défilement des images avec 3 secondes d'intervalle
    timer = setInterval(imageSuivante, 3000);//temps en millisecondes!!!
    //"setTimeOut" appelle la fonction "imageSuivante" toute les 3 secondes
    // setTimeOut(imageSuivante,3000);
}


// permet de selectionner l'image suivante à afficher dans le carrousel
function imageSuivante()
{
    // Si la valeur du pointeur est égale à l'index du dernier élément
    if (pointeur === images.length -1) {
        // Je remet le pointeur à zéro, soit au début du tableau
        pointeur= 0;
    }
    else{
        // Sinon j'ajoute 1 au pointeur pour passer à l'élément suivant du tableau
        pointeur++;
    }

    /**
     * Modifie l'attribut "src" de l'image en sélectionnant l'image suivante dans le tableau
     * selon la valeur du pointeur
     */
    document.querySelector('img') . setAttribute('src', images[pointeur]); 
}

function imagePrecedente() {
    if(pointeur === 0){
        pointeur = images.length - 1;
    } else{
        pointeur--;
    }

    document.querySelector('img'). setAttribute('src', images[pointeur]);

  
}
