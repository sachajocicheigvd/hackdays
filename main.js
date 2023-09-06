
import data from "./data/gemeinden.geojson?raw";
import journal from "./data/sourceJournal.json";

//filtrer journal la ou le .date est égale à "2023-09-06"


let map = L.map('map').setView([46.689615, 7.560716], 7);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
console.log(JSON.parse(data));


        


const tbl = [journal]

const tblCommune = [];

var sayings = new Map();


let i = 0
tbl[0].forEach((e)=>{
    if(e){
    //console.log(e.city)
    tblCommune.push(e.city)
    sayings.set(e.city, 0)
}
})

const tblUnique = new Set(tblCommune);

console.log(tblUnique)



//la valeur des sayings doit être égale au nombre de fois que la commune est citée dans le tableau tblCommune

tblCommune.forEach((e)=>{
    sayings.set(e, sayings.get(e)+1)
}
)

console.log(sayings)

//plus une comment a d'article plus elle doit etre foncée

//colorer chaque commune en fonction du nombre d'article qui la cite

L.geoJSON(JSON.parse(data), {
    style: function (feature) {
        if(sayings.get(feature.properties["gemeinde.NAME"])>0){
            return {color: "red"};
        }
        


        else{
            return {color: "blue"};
        }
        
    },
    onEachFeature: function (feature, layer) {
        layer.bindPopup(feature.properties["gemeinde.NAME"]);
    }
}).addTo(map);








