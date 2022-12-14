var map = L.map('map').setView([50.7606273570878, 2.2339190414235413], 10);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);




const urlgpx = "http://195.14.105.123:1337"
const url = "http://195.14.105.123:1337/api/datagpxes/?populate=*";

fetch(url)
.then(response => response.json())
.then(data => {
  var adresse = urlgpx + data.data[0].attributes.gpx.data.attributes.url;


  var gpx = adresse;
  console.log(adresse);
new L.GPX(gpx, {async: true}).on('loaded', function(e) {
  map.fitBounds(e.target.getBounds());
}).addTo(map);})

