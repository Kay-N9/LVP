
// ---- VARIABLES ET CONSTANTES GLOBALES

// Ensemble d'objets DOM représentant les balises <button>
let buttonNextPhoto;
let buttonPreviousPhoto;




// ---- FONCTIONS

function createNavigationButtons()
{
    // Recherche des boutons de contrôle.
    buttonNextPhoto        = document.getElementById('next-photo');
    buttonPreviousPhoto    = document.getElementById('previous-photo');

    buttonNextPhoto.addEventListener('click', onClickMoveToNextPhoto);
    buttonPreviousPhoto.addEventListener('click', onClickMoveToPreviousPhoto);

}

function onClickMoveToNextPhoto()
{
    goToNextPhoto();
}

function onClickMoveToPreviousPhoto()
{

    goToPreviousPhoto();
}
