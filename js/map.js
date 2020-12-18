var map = L.map('map', {
  closePopupOnClick: false,

}).setView([42.8667, 74.5667], 12.5);




L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="copyright">Openstreetmap</a>'
}).addTo(map);

var markers = L.markerClusterGroup({ chunkedLoading: true, });
var markerList = [];

for (var i = 0; i < addressPoints.length; i++) {
  var a = addressPoints[i];
  var title = a[2];
  var marker = L.marker(L.latLng(a[0], a[1]), { title: title });

  marker.bindPopup(title ,{
    autoClose: false,
    autoPan: false});
  markerList.push(marker);
}
map.on('layeradd', function(event) {
  var layer = event.layer;

  if (layer instanceof L.Marker && !(layer instanceof L.MarkerCluster)) {
    layer.openPopup();
  }
});


markers.addLayers(markerList);
map.addLayer(markers);

L.Control.geocoder().addTo(map);
L.tileLayer('http://tile2.maps.2gis.com/tiles?x={x}&y={y}&z={z}').addTo(map);
// L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}', {subdomains:['mt0','mt1','mt2','mt3']}).addTo(map);
// L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {subdomains:['mt0','mt1','mt2','mt3']}).addTo(map);
