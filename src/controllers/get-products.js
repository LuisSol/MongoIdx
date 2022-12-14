module.exports = ({ useCases: { getProductsUC } }) =>
  async function getProducts({ params }, res) {
    try {
      const { id } = params
      const products = await getProductsUC(id)
      return res.status(200).send(products)
    } catch (error) {
      console.log(error)
      return res.status(500).send(error.message)
    }
  }
