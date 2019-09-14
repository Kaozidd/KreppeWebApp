const fs = require('fs')
const Router = require('express').Router
const apiRouter = Router()

/*

PRUDUCT TYPE IDs

SHAMPOO         0
CONDITIONER     1
TREATMENT       2

LINE IDs

KERATIN         0
ARGAN           1

*/

const productsData = [
  {
    name: 'Keratin Shampoo',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    img: 'krt-sh',
    price: 800,
    typeId: 0,
    lineId: 0,
    keywords: [
      'shampoo',
      'keratin',
      'allHairTypes',
    ]
  },
  {
    name: 'Keratin Conditioner',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    img: 'krt-cn',
    price: 800,
    typeId: 1,
    lineId: 0,
    keywords: [
      'conditioner',
      'keratin',
      'allHairTypes',
    ]
  },
  {
    name: 'Keratin Treatment',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    img: 'krt-tr',
    price: 800,
    typeId: 2,
    lineId: 0,
    keywords: [
      'treatment',
      'keratin',
      'allHairTypes',
    ]
  },
  {
    name: 'Argan Shampoo',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    img: 'arg-sh',
    price: 800,
    typeId: 0,
    lineId: 1,
    keywords: [
      'shampoo',
      'argan',
      'allHairTypes',
    ]
  },
  {
    name: 'Argan Conditioner',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    img: 'arg-cn',
    price: 800,
    typeId: 1,
    lineId: 1,
    keywords: [
      'conditioner',
      'argan',
      'allHairTypes',
    ]
  },
  {
    name: 'Argan Treatment',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    img: 'arg-tr',
    price: 800,
    typeId: 2,
    lineId: 1,
    keywords: [
      'treatment',
      'argan',
      'allHairTypes',
    ]
  },
]

apiRouter.get('/products', (req, res) => {
	res.json(productsData)
})

module.exports = apiRouter
