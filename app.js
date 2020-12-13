const express = require('express')
const app = express()
const expressHandlebars = require('express-handlebars')

const port = 3000
const restaurantList = require('./restaurant.json')

app.engine('handlebars',expressHandlebars({defaultLayout: 'main'}))
app.set('view engine','handlebars')

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index', {restaurants: restaurantList.results})
})

app.get('/restaurants/:restaurant_id', (req, res) => {
  const restaurant = restaurantList.results.find(restaurant => restaurant.id.toString() === req.params.restaurant_id)
  res.render('show', {restaurant})
})

app.get('/search', (req, res) => {
  const restaurants = restaurantList.results.filter(restaurant => {
    return restaurant.name.toLowerCase().includes(req.query.keyword.toLowerCase()) || restaurant.category.toLowerCase().includes(req.query.keyword.toLowerCase())
  })
  res.render('index', {restaurants, keyword: req.query.keyword})
})

app.listen(port, () => {
  console.log('done!')
})