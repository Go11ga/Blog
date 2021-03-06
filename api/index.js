const express = require('express')
const consola = require('consola')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const authRoutes = require('./routes/auth.routes')
const keys = require('./keys')

mongoose.connect(keys.MONGO_URI, {
  useNewUrlParser: true, 
  useUnifiedTopology: true,
  useCreateIndex: true
})
  .then(() => console.log('MongoDB connected'))
  .catch(error => console.error(error))

const app = express()
const PORT = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/api/auth', authRoutes)

consola.ready({
  message: `Server listening on port ${PORT}`,
  badge: true
})

// app.listen(PORT, () => {
  
// })

module.exports = { path: '/api', handler: app }
