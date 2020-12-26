const express = require('express')
const handlebars = require('handlebars')

const Restaurant = require('../../models/restaurant.js')

const router = express.Router()

handlebars.registerHelper('compare', function (sort, option, options) {
  if (sort === option) {
    return options.fn(this)
  }
  return options.inverse(this)
})

router.post('/', (req, res) => {
  const sortResult = req.body.sort
  const sortArray = sortResult.split('-')
  const sortOption = sortArray[0]
  const sortOrder = sortArray[1]
  Restaurant.find()
    .lean()
    .sort({ [sortOption]: sortOrder })
    .then((restaurants) => res.render('index', { restaurants, sortResult }))
    .catch((error) => console.log(error))
})

module.exports = router
