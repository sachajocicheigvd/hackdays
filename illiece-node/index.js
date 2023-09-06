const fs = require('fs')
const readXlsxFile = require('read-excel-file/node')




const geoAppJson = require('./newgeo.json');


function containsAny(str, substrings) {
    for (var i = 0; i != substrings.length; i++) {
       var substring = substrings[i];
       if (str.indexOf(substring) != - 1) {
         return substring;
       }
    }
    return null; 
}

const geoJson = JSON.parse(JSON.stringify(geoAppJson))

// File path.
readXlsxFile('./pop.xlsx').then((rows) => {
  const cleanedFeatures = [];
  rows.map(row => {
     geoJson.features.map((feature) => {
      if (row[0] && row[0].includes(`......${feature.properties["gemeinde.BFS_NUMMER"]}`)) {
        console.log('occurence', {...feature,  properties: { ...feature.properties, ...{population: row[1]}}})
        cleanedFeatures.push({...feature,  properties: { ...feature.properties, ...{population: row[1]}}})
      } else {
        cleanedFeatures.push({...feature,  properties: { ...feature.properties, ...{population: null}}})
      }
    })
  })
  geoJson.features = cleanedFeatures;

  // // converting the JSON object to a string
});

const data =  JSON.stringify(geoJson);

// writing the JSON string content to a file
fs.writeFileSync("newGEO2.json", data, (error) => {
  // throwing the error
  // in case of a writing problem
  if (error) {
    // logging the error
    console.error(error);

    throw error;
  }

  console.log("data.json written correctly");
});

