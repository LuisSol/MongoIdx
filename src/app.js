const express = require('express')
const cors = require('cors')

const app = express()

const { getProvidersCtrl, getProductsCtrl } = require('./controllers')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/healt', (_, res) => {
  res.send('helthy... :)')
})

app.get('/providers', getProvidersCtrl)
app.get('/provider/:id', getProductsCtrl)

module.exports = app
