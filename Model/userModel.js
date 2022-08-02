const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name: {
        type:String
    },
    email:{
        type:String
    },
    password: {
        type:String
    },
    isAdmin: {
        type:Boolean
    }
},
  
{timestamps:true}
)

module.exports = mongoose.model("users", userSchema)

