const mongoose = require('mongoose')
const db = mongoose.connection

mongoose.connect('mongodb://localhost/restaurant_list', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

db.on('error', () => {
  console.log('mongodb error!')
})
db.once('open', () => {
  console.log('mongodb connected!')
})

module.exports = db
