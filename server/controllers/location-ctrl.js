const calculateDistanceBetweenPoints = require("../utils/calculateDistanceBetweenPoints");
const validateCoordinates = require("../validation/validateCoordinates");

const location = [];

function setLocation(req, res) {
  const { lat, lng } = req.body;

  try {
    const error = validateCoordinates(lat, lng);

    if (location.length !== 0) {
      return res.status(400).json({ message: "Already entered coordinates" });
    }
    if (error) {
      return res.status(400).json({ message: "Invalid coordinates" });
    }
    location.push(lat, lng);
    return res.status(200).json({ message: "Successfully added location" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
}

function checkLocation(req, res) {
  const { lat, lng } = req.body;

  try {
    const error = validateCoordinates(lat, lng);
    if (location.length === 0) {
      return res.status(200).json({ message: "No coordinates have been set" });
    }
    if (error) {
      return res.status(400).json({ message: "Invalid coordinates" });
    }

    const distance = calculateDistanceBetweenPoints(
      { lat, lng },
      { lat: location[0], lng: location[1] }
    );
    if (distance > 5000) {
      res.status(400).json({ message: "Outside the range", distance });
    }
    location.splice(0, 2);
    return res
      .status(200)
      .json({ message: "Inside the range", distance: distance });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
}

module.exports = { checkLocation, setLocation };
