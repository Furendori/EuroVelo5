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


