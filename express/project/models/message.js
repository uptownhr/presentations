var mongoose = require('mongoose'),
  Schema = mongoose.Schema


var messageSchema = new Schema({
  title: {type: String}
})


var message = mongoose.model('message', messageSchema)

module.exports = message