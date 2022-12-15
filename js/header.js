// variables pour la disparition au scroll de la barre en haut de la nav
var positionToutEnHaut = true;
var barreDuHeader = null;
// variables pour l'apparition au click de la barre de recherche
var loupeClosed = true;
var loupeOpening = null;


function scroll(){
    if (positionToutEnHaut){
        barreDuHeader.classList.remove('headerDisplayNone');
        barreDuHeader.classList.add('headerDisplay');
    } else {
        barreDuHeader.classList.remove('headerDisplay');
        barreDuHeader.classList.add('headerDisplayNone');
    }
}

function search(){
    if (loupeClosed){
        loupeOpening.classList.remove('loupeOpen');
        loupeOpening.classList.add('loupeClosed');
    } else {
        loupeOpening.classList.remove('loupeClosed');
        loupeOpening.classList.add('loupeOpen');
    }
}

function init(){
    scroll();
}

window.addEventListener('DOMContentLoaded' , () => {
    barreDuHeader = document.getElementById('header')
    loupeOpening = document.getElementById('loupeOpening')
    init();
});

window.addEventListener('scroll', () => {
    let y = window.scrollY;
    positionToutEnHaut = (y == 0);

    // ecriture alternative :

        // positionToutEnHaut = {
        //     if (){
        //         y == 0;
        //     }
        //     else (){
        //         y > 0;
        //     }

    scroll();
});

window.addEventListener('click', () => {
    var loupeClosed = false;
    search();
});


// Code Jquery Similaire de Nicolas

// $(function(){


//     const doc =$(document);
//     const elementDisplay = $('.header');
    
//     doc.on('scroll', function(){
    
//     let positionActuelle = doc.scrollTop();
    
//     elementDisplay.each(function(){
    
    
//     // let decalage = $(this).offset().top;
//     // if(decalage > 1){
    
//     if(positionActuelle > 0){
//     $(this).css('display','none')
//     }else{
//     $(this).css('display','flex')
//     }
    
//     })
//     })
//     })