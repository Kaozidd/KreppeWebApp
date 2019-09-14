const Router = require('express').Router
const apiRouter = Router()

apiRouter.get('/products', (req, res) => {
	const db = req.app.locals.db
  db
    .select()
    .table('products')
    .then((data) => {
      res.json(data)
    })
})

module.exports = apiRouter
