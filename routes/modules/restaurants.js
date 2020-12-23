const express = require('express')
const router = express.Router()

const Restaurant = require('../../models/restaurant.js')

router.get('/new', (req, res) => {
  res.render('new')
})

router.get('/:id', (req, res) => {
  const id = req.params.id
  return Restaurant.findById(id)
    .lean()
    .then((restaurant) => res.render('show', { restaurant }))
    .catch((error) => console.log(error))
})

router.get('/:id/edit', (req, res) => {
  const id = req.params.id
  return Restaurant.findById(id)
    .lean()
    .then((restaurant) => res.render('edit', { restaurant })) // 要用 render　就要先跑過 .lean()
    .catch((error) => console.log(error))
})

router.post('/', (req, res) => {
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

router.put('/:id', (req, res) => {
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

router.delete('/:id', (req, res) => {
  const id = req.params.id
  return Restaurant.findById(id)
    .then((restaurant) => restaurant.remove())
    .then(() => res.redirect('/'))
    .catch((error) => console.log(error))
})

module.exports = router
