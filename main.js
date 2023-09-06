
import data from "./data/gemeinden.geojson?raw";
import journal from "./data/sourceJournal.json";

//filtrer journal la ou le .date est égale à "2023-09-06"





let map = L.map('map').setView([46.689615, 7.560716], 7);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
console.log(JSON.parse(data));

L.geoJSON(JSON.parse(data), {
    style: function (feature) {
        return {color: "red"};
    },
    onEachFeature: function (feature, layer) {
        layer.bindPopup(feature.properties["gemeinde.NAME"]);
    }
}).addTo(map);
        