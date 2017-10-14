function createDocuments (mongoose) {
  const documents = {
    Sample: require('./Sample')(mongoose)
  }
  console.log('------------------------')
  console.log('🏬  DOCUMENTS:')
  Object.keys(documents).forEach(modelName => console.log(`  - ${modelName}`))
  console.log('------------------------')
  return documents
}

module.exports = createDocuments
