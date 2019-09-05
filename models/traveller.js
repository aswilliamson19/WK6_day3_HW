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
  const transports = this.journeys.map(journey => journey.transport);
  // return unique = transports.filter((transport, index, ar) => ar.indexOf(transport) === index);
// };

// Could also use new Set to get the unique values and then the spread operator puts the unique values rom the st into a new array (it's the [...uniqueTransports]).
const uniqueTransports = new Set(transports); return [...uniqueTransports];
};

module.exports = Traveller;
