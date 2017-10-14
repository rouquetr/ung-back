const { documents } = require('../db')

function getAllQuests () {
  return documents.Sample.findAll()
}

module.exports = {
  getAllSamples
}