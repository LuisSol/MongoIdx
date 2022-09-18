module.exports = mongoose => {
  const providerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    products: [{ type: mongoose.Types.ObjectId, ref: 'Product' }],
  })
  const productSchema = new mongoose.Schema({
    stockId: String,
    title: String,
    description: String,
    price: { type: Number, index: true },
    provider: { type: mongoose.Types.ObjectId, ref: 'Provider' },
  })

  const Provider = mongoose.model('Provider', providerSchema)
  const Product = mongoose.model('Product', productSchema)

  {"executionSuccess":true,"nReturned":1468,"executionTimeMillis":3,"totalKeysExamined":1468,"totalDocsExamined":1468,"executionStages":{"stage":"FETCH","nReturned":1468,"executionTimeMillisEstimate":0,"works":1469,"advanced":1468,"needTime":0,"needYield":0,"saveState":11,"restoreState":11,"isEOF":1,"invalidates":0,"docsExamined":1468,"alreadyHasObj":0,"inputStage":{"stage":"IXSCAN","nReturned":1468,"executionTimeMillisEstimate":0,"works":1469,"advanced":1468,"needTime":0,"needYield":0,"saveState":11,"restoreState":11,"isEOF":1,"invalidates":0,"keyPattern":{"price":1},"indexName":"price_1","isMultiKey":false,"multiKeyPaths":{"price":[]},"isUnique":false,"isSparse":false,"isPartial":false,"indexVersion":2,"direction":"forward","indexBounds":{"price":["[100, 300]"]},"keysExamined":1468,"seeks":1,"dupsTested":0,"dupsDropped":0,"seenInvalidated":0}},"allPlansExecution":[]}

  return Object.freeze({ Provider, Product })
}
