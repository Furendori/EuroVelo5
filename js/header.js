// variables pour la disparition au scroll de la barre en haut de la nav
var positionToutEnHaut = true;
var barreDuHeader = null;
// variables pour l'apparition au click de la barre de recherche
var loupeClosed = true;
var loupeOpening = null;
var loupeButton = null;

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
    search();
    scroll();
}

window.addEventListener('DOMContentLoaded' , () => {
    barreDuHeader = document.getElementById('header')
    loupeOpening = document.getElementById('loupeOpening')
    loupeButton = document.getElementById('loupeButton')
    loupeButton.addEventListener('click', () => {
        if (loupeClosed == false){
            loupeClosed = true;
        }
        else {
            loupeClosed = false;
        }
        search();
    
    });

    window.addEventListener('scroll', () => {
        let y = window.scrollY;
        positionToutEnHaut = (y == 0);
    
        // ecriture alternative :
    
            // if (y == 0){
            //     positionToutEnHaut = true;
            // }
            // else {
            //     positionToutEnHaut = false;
            // }
    
        scroll();
    });

    // Menu burger déplacer dans l'element add event listener DOM
    // enlever les . dans les const

    const menu = document.getElementsByClassName('menu');
    const asideMenu = document.getElementsByClassName('menu-cote');


    // ajouter de [0]

    function togglemenucote() {
        asideMenu[0].classList.toggle("active");
    }

    // menu.forEach(btn => btn.addEventListener("click", togglemenucote ))
    // remplacer par ça :

    const testDivs = Array.prototype.filter.call(
        menu,
        (test) => test.addEventListener("click", togglemenucote )
    );

    init();
});

// // menu burger 2

// $(document).ready(function(){
// 	$('.menu').click(function(){
// 		$('.menu-cote').toggleClass('active');
// 	})
// });