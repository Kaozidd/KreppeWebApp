const express = require('express')
const fs = require('fs')
const app = express()

const PORT = process.env.PORT || 3000

app.get('/', function(req, res) {
	fs.readFile(`${__dirname}/src/views/home.html`, 'utf-8', function(error, content) {
		res.send(content)
	})
})

app.listen(PORT, function() {
	console.log(`App running in PORT: ${PORT}...`)
})
