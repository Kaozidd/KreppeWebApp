// Import libraries
const express = require('express')
const app = express()
const ejs = require('ejs')

// Import Routers
const pageRouter = require('./src/routers/pageRouter.js')
const apiRouter = require('./src/routers/apiRouter.js')

// Set DataBase Connection
const knexFile = require('./knexfile')
const connectToDataBase = require('./src/database/dbConnect')
const appConnectionWithDatabase = connectToDataBase(knexFile.development)

app.locals.db = appConnectionWithDatabase

// Set view engine
app.engine('ejs', ejs.renderFile)
app.set('view engine', 'ejs')
app.set('views', `${__dirname}/src/views`)

// Set express folder
app.use(express.static(`${__dirname}/public`))

// Set Router views
app.use('/', pageRouter)
app.use('/api', apiRouter)

// Set 404 view
app.use((req, res) => {
	res.render('404.ejs')
})

// Set PORT
const PORT = process.env.PORT || 3000

// Run App
app.listen(PORT, () => {
	console.log(`App running in PORT: ${PORT}...`)
})
