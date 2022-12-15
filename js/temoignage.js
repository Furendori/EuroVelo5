const urlphotos = "http://195.14.105.123:1337"
let conteneur= document.querySelector('.img-david')
var resultat = '';

fetch('http://195.14.105.123:1337/api/temoignage-frs/?populate=*')
.then(response => response.json())
.then(data => {
    var nb = data.meta.pagination.total;
    // console.log(nb)
    for ( let i = 0 ; i <= nb-1; i++) {

        let generateHtml = `

        <div class="title-david">
            <p>${data.data[i].attributes.Label_temoignage}</p>
        </div>
        <a href="#"><img src="${ urlphotos + data.data[i].attributes.Miniature_temoignage.data[0].attributes.formats.medium.url}" alt=""></a>

        `;
        
    resultat = resultat + generateHtml;
    }
    conteneur.innerHTML=resultat;

})