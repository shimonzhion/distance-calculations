const { getDistance } = require("geolib");

function calculateDistanceBetweenPoints(loc1, loc2) {
  const ditans = getDistance(
loc1,
loc2
  );

  return ditans / 1000;
}
module.exports = calculateDistanceBetweenPoints;
