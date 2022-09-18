const { randNumber, randProductDescription, randAccessory, randAlphaNumeric } = require('@ngneat/falso')
const { MongoMemoryServer } = require('mongodb-memory-server')
const mongoDbClient = require('mongoose')
const initializeSchema = require('../configurations/Schema')

const mongoServer = new MongoMemoryServer()

const models = initializeSchema(mongoDbClient)

const initializeMoongose = async () => {
  const uri = await mongoServer.getUri()
  const mongooseOpts = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }
  mongoDbClient.connect(uri, mongooseOpts)

  mongoDbClient.connection.on('error', e => {
    if (e.message.code === 'ETIMEDOUT') {
      console.log(e)
      mongoDbClient.connect(uri, mongooseOpts)
    }
    console.log(e)
  })

  mongoDbClient.connection.on('open', async () => {
    const providers = ['Apple', 'Sony', 'Microsoft']
    const providerId = []
    console.log(`MongoDB successfully connected to ${uri}`)
    console.log('Seeding database...')
    console.log('Seeding Providers...')

    await Promise.all(
      providers.map(providerName => {
        const provider = new models.Provider({ name: providerName })
        providerId.push(provider.id)
        return provider.save()
      })
    )

    console.log('Finished seeding providers...')

    console.log('Seeding products...')

    await Promise.all(
      [...Array(15000).keys()].map((_, i) => {
        const product = new models.Product({
          stockId: randAlphaNumeric(),
          title: randAccessory(),
          description: randProductDescription(),
          price: randNumber({ min: 1, max: 2000, fraction: 2 }),
          provider: providerId[randNumber({ min: 0, max: 2 })],
        })
        console.log(`Adding product ${i}`)
        return product.save()
      })
    )

    console.log('Finished seeding products...')
  })
}

initializeMoongose()

const makeMongoDb = require('./mongo-db')
const mongoDb = makeMongoDb({ databases: { mongoDbClient, models } })

module.exports = Object.freeze({ mongoDb })
