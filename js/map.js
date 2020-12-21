
var map = L.map('map', {
  closePopupOnClick: false,

}).setView([42.8667, 74.5667], 12.5);




L.tileLayer('http://tile2.maps.2gis.com/tiles?x={x}&y={y}&z={z}', {
  attribution: '&copy; <a href="copyright">Openstreetmap</a>'
}).addTo(map);


var icon = new L.Icon.Default();
icon.options.shadowSize = [0, 0];



var markers = [
  [42.8667, 74.5667, "Данные1"],
  [42.8467, 74.5367, "Данные3"]
].map(n => L.marker(n, { icon }).bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup());

L.featureGroup(markers).addTo(map);
setInterval(() => {
  markers.forEach(n => {
    var { lat, lng } = n.getLatLng();

    n.setLatLng(new L.LatLng(
        lat + (0.3 - Math.random()) / 500,
        lng + (0.3 - Math.random()) / 500
    ))
  })
}, 2000);














// var map = L.map('map', {
//   closePopupOnClick: false,
//
// }).setView([42.8667, 74.5667], 12.5);
//
//
//
//
// L.tileLayer('http://tile2.maps.2gis.com/tiles?x={x}&y={y}&z={z}', {
//   attribution: '&copy; <a href="copyright">Openstreetmap</a>'
// }).addTo(map);
//
// var markers = L.markerClusterGroup({ chunkedLoading: true, });
// var markerList = [];
//
// for (var i = 0; i < addressPoints.length; i++) {
//   var a = addressPoints[i];
//   var title = a[2];
//   var marker = L.marker(L.latLng(a[0], a[1]), { title: title });
//
//   marker.bindPopup(title ,{
//     autoClose: false,
//     autoPan: false});
//   markerList.push(marker);
// }
// map.on('layeradd', function(event) {
//   var layer = event.layer;
//
//   if (layer instanceof L.Marker && !(layer instanceof L.MarkerCluster)) {
//     layer.openPopup();
//   }
// });
//
//
// markers.addLayers(markerList);
// map.addLayer(markers);
