var map = L.map('map').setView([50.7606273570878, 2.2339190414235413], 10);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);




const urlgpx = "http://195.14.105.123:1337"
const url = "http://195.14.105.123:1337/api/Gpxes/?populate=*";
let gpxData = null;

fetch(url)
.then(response => response.json())
.then(data => {
  console.log(data)

gpxData = data;

var nb = data.meta.pagination.total;

for (let i = 0 ; i < nb ; i++) 
{
  let adresse = urlgpx + data.data[i].attributes.GPX.data.attributes.url;
  console.log(adresse)

  let gpxx = adresse;

new L.GPX(gpxx, {
  gpxIndex: i,
  gpx_options: {
    joinTracksSegments: false
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
  gpxIndex = event.target.options.gpxIndex;
  gpx = gpxData.data[gpxIndex];
  gpxAttributes = gpx.attributes;

  // gpxAttributes contient tous les attributs du contenu GPX dans Strapi
  // du coup si tu ajoutes des autres champs dans Strapi (comme un titre, une description, une image...)
  // ils seront disponibles dans cette variable

  console.log(gpxAttributes);
})
.addTo(map);}
})





// fetch(url)
// .then(response => response.json())
// .then(data => {
  

// var nb = data.meta.pagination.total + 1;

// for (let i = 0 ; i < nb ; i++) 
// {
//   let adresse = urlgpx + data.data[i].attributes.GPX.data.attributes.url;
//   console.log(adresse)

//   let gpxx = adresse;

// new L.GPX(gpxx, {
//   gpx_options: {
//     joinTracksSegments: false
//   },
// })
// .on('click', function(event) {
//   console.log(event.target);
  
// })
// .addTo(map);}
// })


// new L.GPX(gpx, {
//   gpx_options: {
//     joinTracksSegments: false
//   }
// }).on('loaded', function(e) {
//   e.target.getBounds());

//   // map.fitBounds(e.target.getBounds(50.9652183,1.8630816 ));
//   // console.log(e.target.getBounds(50.9652183,1.8630816 ))
//   // map.fitBounds(e.target.getBounds(e.target.get_distance(50.9648361,1.8614905)));
//   // console.log(e.target.get_name(50.9652183,1.8630816 ))
//   // console.log(e.target.get_distance(50.9648361,1.8614905 ))
// }).addTo(map);

