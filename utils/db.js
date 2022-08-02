const { MongoMissingCredentialsError } = require("mongodb");
const mongoose = require("mongoose")
const url ="mongodb+srv://testauth:ilovemusic1234@cluster0.kubrg.mongodb.net/breadStore?retryWrites=true&w=majority";


mongoose.connect(url).then(() =>
{
    console.log('database connected')
}).catch((error) =>
{
    console.log("something went wrong ", error)
})

module.exports = mongoose