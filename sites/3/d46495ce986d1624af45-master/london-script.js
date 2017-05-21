// used in london.html
var london = {
  name: "London",
  population: 8308369,
  tallestBuilding: {
     name:  "Shard",
     height: "310m"
  },
  numberOfUniversities: 43,
  averageRent: 1106,
  dailyTubePassengerJourney: 3500000,
  olympics: [ 1908, 1948, 2012],
  updatePopulation: function(newPopulation) {
    this.population = newPopulation;
  }
};

function displayPopulation() {
  // Make a new <p></p> for population. This is not attached to the DOM yet.
  var population = document.createElement("p");

  // Make some text content to put into your <p></p>
  var content = document.createTextNode("Population: " + london.population);

  // Put the text content into the <p></p>.
  population.appendChild(content);

  // Finally the population can be appended to the body, and will become visible in the browser.
  document.body.appendChild(population);
}
