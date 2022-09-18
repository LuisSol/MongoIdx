const makeGetProviders = require('./get-providers')
const makeGetProducts = require('./get-products')
const makeGetBenchmark = require('./get-benchmark')

const { getProvidersUC, getProductsUC, getBenchmarkUC } = require('../usecases')

const getProvidersCtrl = makeGetProviders({ useCases: { getProvidersUC } })
const getProductsCtrl = makeGetProducts({ useCases: { getProductsUC } })
const getBenchMarkCtrl = makeGetBenchmark({ useCases: { getBenchmarkUC } })

module.exports = Object.freeze({ getProvidersCtrl, getProductsCtrl, getBenchMarkCtrl })
