module.exports = mongoose => {
  const providerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    products: [{ type: mongoose.Types.ObjectId, ref: 'Product' }],
  })
  const productSchema = new mongoose.Schema({
    stockId: String,
    title: String,
    description: String,
    price: Number,
    provider: { type: mongoose.Types.ObjectId, ref: 'Provider' },
  })

  const Provider = mongoose.model('Provider', providerSchema)
  const Product = mongoose.model('Product', vehicleSchema)

  return Object.freeze({ Provider, Product })
}
