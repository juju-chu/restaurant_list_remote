const express = require('express')
const router = express.Router()

const Restaurant = require('../../models/restaurant.js')

router.get('/', (req, res) => {
  Restaurant.find()
    .lean()
    .then((restaurants) => res.render('index', { restaurants }))
    .catch((error) => console.log(error))
})

router.get('/search', (req, res) => {
  const restaurants = restaurantList.results.filter((restaurant) => {
    return (
      restaurant.name.toLowerCase().includes(req.query.keyword.toLowerCase()) ||
      restaurant.category
        .toLowerCase()
        .includes(req.query.keyword.toLowerCase())
    )
  })
  res.render('index', { restaurants, keyword: req.query.keyword })
})

module.exports = router
