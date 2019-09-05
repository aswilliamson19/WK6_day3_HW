const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map(journey => journey.startLocation);
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map(journey => journey.endLocation);
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const foundJourneys = this.journeys.filter( journey => {
    return journey.transport === transport
  });
  return foundJourneys;
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const journeys = this.journeys.filter( journey => {
    return journey.distance >= minDistance
  });
  return journeys;
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce((total, journey) => {
    return total += journey.distance
  }, 0);
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  let transports = this.journeys.map(journey => journey.transport);
  let unique = transports.filter((item, i, ar) => ar.indexOf(item) === i);
  return unique;
};


module.exports = Traveller;
