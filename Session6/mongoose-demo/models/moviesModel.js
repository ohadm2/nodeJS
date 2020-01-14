const mongoose = require('mongoose');
var db = require('../configs/database');

const Schema = mongoose.Schema;

var moviesSchema = new Schema({
    name : String,
    producer : String,
    year : Number
})

module.exports = mongoose.model('movies', moviesSchema);