const fs = require('fs')
const Router = require('express').Router
const pageRouter = Router()

pageRouter.get('/', (req, res) => {
	fs.readFile(`${__dirname}/src/views/home.html`, 'utf-8', (error, content) => {
		res.send(content)
	})
})

pageRouter.get('/about', (req, res) => {
  res.send('<h1>About page</h1>')
})

module.exports = pageRouter
