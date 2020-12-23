const express = require('express')
const app = express()
const expressHandlebars = require('express-handlebars')
const mongoose = require('mongoose')
const port = 3000
const Restaurant = require('./models/restaurant.js')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

mongoose.connect('mongodb://localhost/restaurant_list', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error!')
})
db.once('open', () => {
  console.log('mongodb connected!')
})

app.engine('handlebars', expressHandlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

app.get('/', (req, res) => {
  Restaurant.find()
    .lean()
    .then((restaurants) => res.render('index', { restaurants }))
    .catch((error) => console.log(error))
})

app.get('/restaurants/new', (req, res) => {
  res.render('new')
})

app.get('/restaurants/:id', (req, res) => {
  const id = req.params.id
  return Restaurant.findById(id)
    .lean()
    .then((restaurant) => res.render('show', { restaurant }))
    .catch((error) => console.log(error))
})

app.get('/restaurants/:id/edit', (req, res) => {
  const id = req.params.id
  return Restaurant.findById(id)
    .lean()
    .then((restaurant) => res.render('edit', { restaurant })) // 要用 render　就要先跑過 .lean()
    .catch((error) => console.log(error))
})

app.get('/search', (req, res) => {
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

app.post('/restaurants', (req, res) => {
  const info = req.body
  return Restaurant.create({
    name: info.name,
    category: info.category,
    image: info.image,
    location: info.location,
    phone: info.phone,
    rating: info.rating,
    description: info.description,
  })
    .then(() => res.redirect('/'))
    .catch((error) => console.log(error))
})

app.put('/restaurants/:id', (req, res) => {
  const id = req.params.id
  const info = req.body
  return Restaurant.findById(id)
    .then((restaurant) => {
      restaurant.name = info.name
      restaurant.category = info.category
      restaurant.image = info.image
      restaurant.location = info.location
      restaurant.phone = info.phone
      restaurant.rating = info.rating
      restaurant.description = info.description
      return restaurant.save()
    })
    .then(() => res.redirect(`/restaurants/${id}`))
    .catch((error) => console.log(error))
})

app.delete('/restaurants/:id', (req, res) => {
  const id = req.params.id
  return Restaurant.findById(id)
    .then((restaurant) => restaurant.remove())
    .then(() => res.redirect('/'))
    .catch((error) => console.log(error))
})

app.listen(port, () => {
  console.log('done!')
})
