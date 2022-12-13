let positionToutEnHaut = true;
let quelquechose = null;

function scrollDown(){
    if (positionToutEnHaut){
        quelquechose.classList.remove('.headerNone');
        quelquechose.classList.add('.header');
    } else {
        quelquechose.classList.remove('.header');
        quelquechose.classList.add('.headerNone');
    }
}

function init(){
    scrollDown();
}

window.addEventListener('DOMContentLoaded' , () => {
    init();
});


// A ajouter : 
// un truc pour détecter si le scroll de la souris est tout en haut
// retourner = true si c'est le cas
// retourner = false si le scroll n'est pas tout en haut