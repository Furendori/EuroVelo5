const urlphotos = "http://195.14.105.123:1337"
let conteneur= document.querySelector('.strapi')
var resultat = '';

fetch('http://195.14.105.123:1337/api/temoignages/?populate=*')
.then(response => response.json())
.then(data => {
    var nb = data.meta.pagination.total;
    // console.log(nb)
    for ( let i = 0 ; i <= nb-1; i++) {

        let generateHtml = `

  
            <h1 class="title-france">${data.data[i].attributes.Auteur}</h1>
            <div class="conteneurdebase">
                <article class="all">
                    <h2 class="title-2">${data.data[i].attributes.Parcours}</h2>
                    <p class="para-eurovelo">${data.data[i].attributes.Histoire}</p>
                </article>
                <div class="conteneurimg">
                    <img src="${ urlphotos + data.data[i].attributes.Image.data[0].attributes.formats.thumbnail.url}" alt=""> 
                    <img src="${ urlphotos + data.data[i].attributes.Image2.data[0].attributes.formats.thumbnail.url}" alt="">
                    <img src="${ urlphotos + data.data[i].attributes.Image3.data[0].attributes.formats.thumbnail.url}" alt="">
                </div>
            </div>
      
       

        `;
        
    resultat = resultat + generateHtml;
    }
    conteneur.innerHTML=resultat;

})