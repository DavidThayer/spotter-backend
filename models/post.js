const mongoose = require('mongoose');
const Schema = mongoose.Schema

mongoose.connect('mongodb://localhost/post-api');

let PostSchema = new Schema({
    make: String,
    model: String,
    lease_price: Number,
    purch_price: Number,
    details: String,
    website: String,
    image: String,
    style: String,
    transaction_type: String,
    ev: Boolean,
})

let Post = mongoose.model('Post', PostSchema);

module.exports = Post