fetch('http://195.14.105.123:1337/api/etapes')
    .then((response) => response.json())
    .then((json) => {
        console.log(json);
        // appendData(json);
    });

    const urlphotos = "http://195.14.105.123:1337"
    let conteneur= document.querySelector('.gauche_itineraire')
    var resultat = '';

    fetch('http://195.14.105.123:1337/api/etapes/?populate=*')
    .then(response => response.json())
    .then(data => {
        var nb = data.meta.pagination.total;
        console.log(nb)
        for ( let i = 0 ; i <= nb-1; i++) {
            let generateHtml = `

            <a href="#here"><div class="un_itineraire">
             <img src="${ urlphotos + data.data[i].attributes.Img_etape.data[0].attributes.formats.thumbnail.url}" alt=""> 
    
                <div class="descr">
                    <div>
                        <p class="p1">${ data.data[i].attributes.Label_etape}</p>
                        <i class="fa-regular fa-heart"></i>
                    </div>
                    <p class="p2">${data.data[i].attributes.Nom_etape}</p>
                    <p class="p3">${data.data[i].attributes.Difficulte}</p>
                    <p class="p4">${data.data[i].attributes.Txt_etape}</p>
                </div>
    
            </div></a> 
            
            `;
            
        resultat = resultat + generateHtml;
        }
        conteneur.innerHTML=resultat;





        // console.log(data.data[0].attributes.Img_etape.data[0].attributes.formats.medium.url)  
    //     let generateHtml = `

    //     <a href="#here"><div class="un_itineraire">
    //      <img src="${ urlphotos + data.data[0].attributes.Img_etape.data[0].attributes.formats.medium.url}" alt=""> 

    //         <div class="descr">
    //             <div>
    //                 <p class="p1">${ data.data[0].attributes.Label_etape}</p>
    //                 <i class="fa-regular fa-heart"></i>
    //             </div>
    //             <p class="p2">${data.data[0].attributes.Nom_etape}</p>
    //             <p class="p3">${data.data[0].attributes.Difficulte}</p>
    //             <p class="p4">${data.data[0].attributes.Txt_etape}</p>
    //         </div>

    //     </div></a> 
        
    //     `;

    // conteneur.innerHTML=generateHtml;
    })
