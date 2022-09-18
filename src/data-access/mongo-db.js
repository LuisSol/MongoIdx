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
      const vehicles = await models.Product.find({ provider: id })
      return vehicles
    } catch (error) {
      console.log(error)
      throw new Error(error)
    }
  }

  return Object.freeze({
    getProviders,
    getProducts,
  })
}
