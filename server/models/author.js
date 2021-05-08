const mongoose = require('mongoose')


const authorSchema = mongoose.Schema(
    {

        name:String,
        age:Number

    }, { timestamps: true }
);


const authorModel = mongoose.model('author', authorSchema);

module.exports = authorModel;