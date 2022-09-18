module.exports = ({ dataAccess: { mongoDb } }) =>
  async function getBenchmarkUC() {
    return mongoDb.getProductsBenchMark()
  }
