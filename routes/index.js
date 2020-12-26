const express = require('express')
const router = express.Router()
const home = require('./modules/home.js')
const restaurants = require('./modules/restaurants.js')
const search = require('./modules/search.js')
const sort = require('./modules/sort.js')

router.use('/', home)
router.use('/restaurants', restaurants)
router.use('/search', search)
router.use('/sort', sort)

module.exports = router
