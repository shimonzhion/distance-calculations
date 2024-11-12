const router = require('express').Router();

const {setLocation, checkLocation} = require('../controllers/location-ctrl')

router.post('/set-location',setLocation)
router.post('/check-distance',checkLocation)


module.exports= router