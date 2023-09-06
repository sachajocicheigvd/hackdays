var xlsx = require('node-xlsx').default;
var fs = require('fs')




const geoAppJson = require('./newgeo.json');
const articleAppJson = require('./source.json');






const geoJson = JSON.parse(JSON.stringify(geoAppJson))
const articleJson = JSON.parse(JSON.stringify(articleAppJson))

console.log(articleJson);

const articlesByCity = [];

  geoJson.features.map((feature) => {
    const articlesFilteredByCity = [];
    articleJson.map((article) => {
      if(article && article.city && article.city == feature.properties["gemeinde.NAME"]) {
        articlesFilteredByCity.push(article);
      }
    })
    articlesByCity.push({city: feature.properties["gemeinde.NAME"], articles: articlesFilteredByCity, count: articlesFilteredByCity.length});
  })


 console.log(articlesByCity);


const data =  JSON.stringify(articlesByCity);

// writing the JSON string content to a file
fs.writeFileSync("articlesByCities.json", data, (error) => {
  // throwing the error
  // in case of a writing problem
  if (error) {
    // logging the error
    console.error(error);

    throw error;
  }

  console.log("data.json written correctly");
});

