
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
            joinTracksSegments: false
        },
        }).on('loaded', function(e){
            map.fitBounds(e.target.getBounds());
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

                <a href="#here">

                    <div class="un_itineraire">
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

    var conteneur= document.querySelector('.gauche_itineraire')
    conteneur.innerHTML=resultat;
    //code vignette

})
