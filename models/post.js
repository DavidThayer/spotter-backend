const mongoose = require('mongoose');
const Schema = mongoose.Schema

mongoose.connect('mongodb://localhost/post-api');

let PostSchema = new Schema({
    make: String,
    model: String,
    trim: String,
    year: Number,
    lease_price: Number,
    purch_price: Number,
    due_at_sign: Number,
    lease_term: Number,
    dealership: String,
    details: String,
    website: String,
    image: String,
    style: String,
    transaction_type: String,
    expiration_date: String,
    ev: Boolean,
    created_at: {
        type: Date,
        default: Date.now
    }
})

let Post = mongoose.model('Post', PostSchema);

module.exports = Post