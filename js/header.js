var positionToutEnHaut = true;
var barreDuHeader = null;


function scroll(){
    if (positionToutEnHaut){
        barreDuHeader.classList.remove('headerDisplayNone');
        barreDuHeader.classList.add('headerDisplay');
    } else {
        barreDuHeader.classList.remove('headerDisplay');
        barreDuHeader.classList.add('headerDisplayNone');
    }
}

function init(){
    scroll();
}

window.addEventListener('DOMContentLoaded' , () => {
    barreDuHeader = document.getElementById('header')
    init();
});

window.addEventListener('scroll', () => {
    let y = window.scrollY;
    positionToutEnHaut = (y == 0);
    scroll();
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