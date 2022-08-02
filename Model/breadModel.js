const mongoose = require("mongoose")

const breadStore = mongoose.Schema({
    name: {
        type:String,
    },
    
    avatar: {
        type:String
    },

    avatarID: {
        type:String
    },
    price: {
        type:Number
    },
    des: {
        type:String
    },
    quantity: {
			type: Number,
			default: 1,
		},

})

module.exports = mongoose.model("bread", breadStore)