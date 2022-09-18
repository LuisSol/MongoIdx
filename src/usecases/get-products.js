module.exports = ({ dataAccess: { mongoDb } }) =>
  async function getProductsUC(id) {
    return mongoDb.getProducts(id)
  }
