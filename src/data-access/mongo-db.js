module.exports = ({ databases: { models } }) => {
  async function getProviders() {
    try {
      const providers = await models.Provider.find({})
      return providers
    } catch (error) {
      console.log(error)
      throw new Error(error)
    }
  }

  async function getProducts(id) {
    try {
      const products = await models.Product.find({ provider: id })
      return products
    } catch (error) {
      console.log(error)
      throw new Error(error)
    }
  }

  async function getProductsBenchMark() {
    try {
      const [benchmark] = await models.Product.find({ price: { $gte: 100, $lte: 300 } }).explain()

      return benchmark.executionStats
    } catch (error) {
      console.log(error)
      throw new Error(error)
    }
  }

  return Object.freeze({
    getProviders,
    getProducts,
    getProductsBenchMark,
  })
}
