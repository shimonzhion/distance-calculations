function validateCoordinates(lat, lng) {
  if (typeof lat !== "number" || typeof lng !== "number" || !lat || !lng) {
    return true;
  }
  return false;
}

module.exports = validateCoordinates;
