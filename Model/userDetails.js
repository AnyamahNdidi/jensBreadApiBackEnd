const mongoose = require("mongoose")

const detailSchema = mongoose.Schema({
    productOrder: [],
    
    otpCode: {
        type:Number,
    },
    
    activate: {
        type: Boolean,
        
    },
    otp: {
        type:Number,
    },
    done: {
        type:Boolean,
    },

    fullName: {
        type:String
    },
    email:{
        type:String
    },
    address: {
        type:String
    },
   
},
  
{timestamps:true}
)

module.exports = mongoose.model("userDetails", detailSchema)

