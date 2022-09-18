const { mongoDb } = require('../data-access')

const makeGetProvidersUC = require('./get-providers')
const makeGetProductsUC = require('./get-products')
const makeGetBenchmarkUC = require('./get-benchmark')

const getProvidersUC = makeGetProvidersUC({ dataAccess: { mongoDb } })
const getProductsUC = makeGetProductsUC({ dataAccess: { mongoDb } })
const getBenchmarkUC = makeGetBenchmarkUC({ dataAccess: { mongoDb } })

module.exports = Object.freeze({
  getProvidersUC,
  getProductsUC,
  getBenchmarkUC,
})
