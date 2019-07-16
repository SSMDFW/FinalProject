// Create a map object
var myMap = L.map("map", {
  center: [37.09, -95.71],
  zoom: 5
});


L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.dark",
  accessToken: API_KEY
}).addTo(myMap);


// Define a markerSize function that will give each city a different radius based on its population
function markerSize(population) {
  return population / 40;
}

var cities = ;


// Loop through the cities array and create one marker for each city object
for (var i = 0; i < cities.length; i++) {
  
  L.circle(cities[i].geopoint, {
    fillOpacity: 0.75,
    color: "white",
    fillColor: "purple",
    // Setting our circle's radius equal to the output of our markerSize function
    // This will make our marker's size proportionate to its population
    radius: markerSize(cities[i].population)
  }).bindPopup("<h1>" + cities[i].city + "</h1> <hr> <h3>Population: " + cities[i].population + "</h3>").addTo(myMap);
}
