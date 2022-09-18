const { mongoDb } = require('../data-access')

const makeGetProvidersUC = require('./get-providers')
const makeGetProductsUC = require('./get-products')

const getProvidersUC = makeGetProvidersUC({ dataAccess: { mongoDb } })
const getProductsUC = makeGetProductsUC({ dataAccess: { mongoDb } })

module.exports = Object.freeze({
  getProvidersUC,
  getProductsUC,
})
