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

photos = document.querySelectorAll('.slider div');


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

const carousel = document.getElementById("carousel"),
  content = document.getElementById("content"),
  next = document.getElementById("next"),
  prev = document.getElementById("prev");

next.addEventListener("click", e => {
  carousel.scrollBy(width + gap, 0);
  if (carousel.scrollWidth !== 0) {
    prev.style.display = "flex";
  }
  if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "none";
  }
});
prev.addEventListener("click", e => {
  carousel.scrollBy(-(width + gap), 0);
  if (carousel.scrollLeft - width - gap <= 0) {
    prev.style.display = "none";
  }
  if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "flex";
  }
});

let width = carousel.offsetWidth;
window.addEventListener("resize", e => (width = carousel.offsetWidth));