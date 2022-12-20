
//code afficher map
var map = L.map('map').setView([50.7606273570878, 2.2339190414235413], 10);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
//code afficher map

var resultat = '';
var urlgpx = "http://195.14.105.123:1337"
const url = "http://195.14.105.123:1337/api/collection-etapes/?populate=*";

fetch(url)
.then(response => response.json())
.then(data => {

    var nb = data.meta.pagination.total;

    for (let i = 0 ; i < nb ; i++) 
    {
        var adresse = urlgpx + data.data[i].attributes.gpx.data.attributes.url; 
        let gpxx = adresse;

    //code tronçon  
        new L.GPX(gpxx, {
            gpx_options: {
            joinTracksSegments: false,
            gpxindex: i
        },
        marker_options: {
            startIconUrl: null,
            endIconUrl: null,
            shadowUrl: null,
          },
        }).on('loaded', function(e){
            map.fitBounds(e.target.getBounds());
        })
        .on('click', function(event) {
           
            // console.log(event.target.options.gpx_options.gpxindex);
            // let x =event.target.options.gpx_options.gpxindex;
            // let target= document.getElementById("gpx" + x);
            // console.log(document.querySelectorAll(".un_itineraire"));
            // let list = document.querySelectorAll(".un_itineraire");
            var vignettes = document.querySelector(".gauche_itineraire");
            var detail = document.querySelector(".detail");

            // list.forEach(function(zinzin){
            //        zinzin.removeAttribute("style")
            // }

            // );
            // target.setAttribute("style","border: 3px solid red; border-radius: 20px;");
            vignettes.setAttribute("style", "display:none;");
            detail.setAttribute("style", "display:block;")

            var conteneurdetail = document.querySelector('.detail');

        
            let result = "class='rouge'";
                        
            if(data.data[i].attributes.difficulte == "Facile"){
                result = "class='vert'";
            }else if(data.data[i].attributes.difficulte == "Intermédiaire"){
                result = "class='bleu'";
            }else{}

            let detailHtml = ` 
            
           
            <div id="gpx${i}" class="un_itineraire">

          
            <img src="${ urlgpx + data.data[i].attributes.img_etape.data.attributes.formats.thumbnail.url}" alt=""> 

                

                    <div class="intitules">
                        <p class="p1">${ data.data[i].attributes.label_etape}</p>
                        <p class="p2">--${data.data[i].attributes.nom_etape}</p>
                        <p ${result}>${data.data[i].attributes.difficulte}</p>
                    </div>
                    
                    <p class="p4">${data.data[i].attributes.txt_etape}</p>
                    <p class="p4">${data.data[i].attributes.textePrincipal}</p>
                </div>
                <button id="retour"> Retour </button>
            </div>
            `;

       
            conteneurdetail.innerHTML=detailHtml;
            // alert(target);
            // window.location.href=target;
            const button = document.getElementById('retour');

            button.addEventListener('click', event => {
                vignettes.setAttribute("style", "display:flex;");
                detail.setAttribute("style", "display:none;")
            });
          })

        .addTo(map);
    //code tronçon 

    //code vignette
        let result = "class='rouge'";
                        
            if(data.data[i].attributes.difficulte == "Facile"){
                result = "class='vert'";
            }else if(data.data[i].attributes.difficulte == "Intermédiaire"){
                result = "class='bleu'";
            }else{}
            let generateHtml = `

            
               
                <a class="invisible" href="#">
                    <div id="gpx${i}" class="un_itineraire">
                    <img src="${ urlgpx + data.data[i].attributes.img_etape.data.attributes.formats.thumbnail.url}" alt=""> 

                        <div class="descr">

                            <div>
                                <p class="p1">${ data.data[i].attributes.label_etape}</p>
                                <i class="fa-regular fa-heart"></i>
                            </div>
                            <p class="p2">--${data.data[i].attributes.nom_etape}</p>
                            <p ${result}>${data.data[i].attributes.difficulte}</p>
                            <p class="p4">${data.data[i].attributes.txt_etape}</p>

                        </div>

                    </div>
                    </a>
               
                
                `;
                
            resultat = resultat + generateHtml;
    }


    // var btnretour = document.getElementById('retour');
    // btnretour.onclick({
    //      vignettes.setAttribute("style", "display:none;")
    //      detail.setAttribute("style", "display:block;")
    // })

    var conteneur= document.querySelector('.gauche_itineraire')
    conteneur.innerHTML=resultat;
    //code vignette

})
