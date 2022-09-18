module.exports = ({ useCases: { getProviderVehiclesUC } }) =>
  async function getProviderVehicles({ params }, res) {
    try {
      const { id } = params
      const products = await getProviderVehiclesUC(id)
      return res.status(200).send(products)
    } catch (error) {
      console.log(error)
      return res.status(500).send(error.message)
    }
  }
