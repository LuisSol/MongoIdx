const makeGetProviders = require('./get-providers')
const makeGetProducts = require('./get-products')

// TODO add UC
// const { getProvidersUC, getProductsUC } = require('../usecases')

const getProvidersCtrl = makeGetProviders({ useCases: { getProvidersUC } })
const getProductsCtrl = makeGetProducts({ useCases: { getProductsUC } })

module.exports = Object.freeze({ getProvidersCtrl, getProductsCtrl })
