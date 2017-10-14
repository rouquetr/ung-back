const faker = require('faker')
const { documents, connect } = require('./index')

function populateSample () {
  const sample = {
    sample: faker.name.firstName()
  }
  return new documents.Sample(sample).save()
}

connect().then(() => populateSample().then(() => process.exit(0)))
