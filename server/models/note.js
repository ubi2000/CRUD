//create schema

const mongoose = require('mongoose');

const noteScheme= mongoose.Schema({
    title:String,
    body:String
})

const Note = mongoose.model("Note",noteScheme)

module.exports= Note