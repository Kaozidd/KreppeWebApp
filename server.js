// Import libraries
const express = require('express')
const fs = require('fs')
const app = express()

// Import Routers
const pageRouter = require('./src/routers/pageRouter.js')
const apiRouter = require('./src/routers/apiRouter.js')

// Set express folder
app.use(express.static(`${__dirname}/public`))

// Set Router views
app.use('/', pageRouter)
app.use('/api', apiRouter)

// Set 404 view
app.use((req, res) => {
	res.send('<h1>404 - Page Not Found!')
})

// Set PORT
const PORT = process.env.PORT || 3000

// Run App
app.listen(PORT, () => {
	console.log(`App running in PORT: ${PORT}...`)
})
