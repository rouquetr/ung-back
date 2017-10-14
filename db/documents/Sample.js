function createSampleSchema (mongoose, name = 'Sample') {
  const SampleSchema = new mongoose.Schema({
    sample: String
  }, { minimize: false, strict: true })
  return mongoose.model('Sample', SampleSchema)
}

module.exports = createSampleSchema
