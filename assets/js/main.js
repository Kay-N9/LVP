// ---- VARIABLES ET CONSTANTES GLOBALES

let currentPhoto;
let photos;
let timerCarousel;
const gap = 2;


// ---- FONCTIONS

function goToNextPhoto()
{

    photos[currentPhoto].classList.remove("visible");
    photos[currentPhoto].style.opacity = 0;

    currentPhoto++;

    if(currentPhoto == photos.length)
    {
        currentPhoto = 0;
    }

    photos[currentPhoto].classList.add('visible');
    photos[currentPhoto].style.opacity = 1;

}

function goToPreviousPhoto()
{
    photos[currentPhoto].classList.remove('visible');
    photos[currentPhoto].style.opacity = 0;

    currentPhoto--;

    if(currentPhoto == -1)
    {
        currentPhoto = photos.length - 1;
    }

    photos[currentPhoto].classList.add('visible');
    photos[currentPhoto].style.opacity = 1;
}


// ---- CODE PRINCIPAL


createNavigationButtons();

photos = document.querySelectorAll('.slide');


for(let index = 0; index < photos.length; index++)
{
    // Est-ce qu'il s'agit de la photo visible ?
    if(photos[index].classList.contains('visible'))
    {
        // Oui, enregistrement du numéro de photo.
        currentPhoto = index;
    }

    // Initialisation de l'opacité et du z-index de la photo.
    photos[index].style.zIndex = photos.length - index;
    photos[index].style.opacity = 1 - index;
}


// PUCES

let pointeur = document.getElementById("point");

let myScrollFunc = function () {
    let y = window.scrollY;
    if (y >= 200) //Si La page attain le nombre demander les pointeur apparais
    {
        pointeur.className = "pointer show"
    } else {
        pointeur.className = "pointer hide"
    }
};

window.addEventListener("scroll", myScrollFunc);