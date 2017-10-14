const express = require('express')
const router = express.Router()

const { getAllSamples } = require('../services/sample-service')

/* GET home page. */
router.get('/sample', (req, res, next) => getAllSamples().then(result => res.json(result)))

module.exports = router
