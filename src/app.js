const express = require('express')
const cors = require('cors')

const app = express()

// TODO CONTROLLERS
// const { getProvidersCtrl, getProviderProductsCtrl } = require('./controllers')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/healt', (_, res) => {
  res.send('helthy... :)')
})

app.get('/providers', getProvidersCtrl)
app.get('/provider/:id', getProviderProductsCtrl)

module.exports = app
