const express = require('express')
const Restaurant = require('../../models/restaurant.js')

const router = express.Router()

router.get('/', (req, res) => {
  const keyword = req.query.keyword
  console.log(keyword)
  Restaurant.find()
    .lean()
    .then((restaurants) =>
      restaurants.filter((restaurant) => {
        return (
          restaurant.name.toLowerCase().includes(keyword.toLowerCase()) ||
          restaurant.category.toLowerCase().includes(keyword.toLowerCase())
        )
      })
    )
    .then((restaurants) => res.render('index', { restaurants }))
    .catch((error) => console.log(error))
})

module.exports = router
