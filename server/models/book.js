const mongoose = require('mongoose')


const bookSchema = mongoose.Schema(
    {

        name:String,
        genre:String,
        authorId:String

    }, { timestamps: true }
);


const bookModel = mongoose.model('book', bookSchema);

module.exports = bookModel;