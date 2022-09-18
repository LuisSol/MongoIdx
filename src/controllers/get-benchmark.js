module.exports = ({ useCases: { getBenchmarkUC } }) =>
  async function getBenchMark(_, res) {
    try {
      const benchMark = await getBenchmarkUC()
      return res.status(200).send(benchMark)
    } catch (error) {
      console.log(error)
      return res.status(500).send(error.message)
    }
  }
