var map = L.map('map', {
    closePopupOnClick: false,

}).setView([42.8667, 74.5667], 12.5);




L.tileLayer('http://tile2.maps.2gis.com/tiles?x={x}&y={y}&z={z}', {
    attribution: '&copy; <a href="copyright">Openstreetmap</a>'
}).addTo(map);


var icon = new L.Icon.Default();
icon.options.shadowSize = [0, 0];



var addressPoints = [
    [42.8667, 74.5667, "Данные1"],
    [42.837, 74.47, "Данные2"],
    [42.8267, 74.5167, "Данные3"]
].map(n => L.marker(n, { icon }).bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup());

L.featureGroup(addressPoints).addTo(map);
setInterval(() => {
    markers.forEach(n => {
        var { lat, lng } = n.getLatLng();

        n.setLatLng(new L.LatLng(
            lat + (0.3 - Math.random()) / 500,
            lng + (0.3 - Math.random()) / 500
        ))
    })
}, 2000);
