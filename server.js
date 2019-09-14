const express = require('express')
const fs = require('fs')
const app = express()

const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
	console.log(`App running in PORT: ${PORT}...`)
})


