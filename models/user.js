const moongose = require('mongoose');
const Schema = moongose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  cart: {
    items: [
      {
        product: { type: Schema.Types.ObjectId, required: true },
        quantity: { type: Number, required: true }
      }
    ]
  }
});

module.exports = moongose.model('User', userSchema);
