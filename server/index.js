const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const schema = require('./schema/schema.js')
const mongoose = require('mongoose')

const app = express();

mongoose.connect('mongodb+srv://shabir:6Wsy9P0vzpOpxA62@cluster0.49zyg.mongodb.net/ecommerce?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false

})
    .then(() => {
        console.log("Connection Succeefull.....");
        const port = 5000;
        app.listen(port, () => {
            console.log(`Server is running at port http://localhost:${port}`)
        });
    })
    .catch((error) => {
        console.log("Connection failed...!")
        console.log(error.message);
    });



app.use('/graphql',graphqlHTTP({
    schema,
    graphiql:true
}));