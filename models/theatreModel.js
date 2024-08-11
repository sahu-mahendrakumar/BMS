const mongooes = require('mongoose');
const theatreShema = new mongooes.Schema({
    name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true, 
    },
    email: {
        type: String,
        required: true,
    },
    owner:{
        type: mongooes.Schema.Types.ObjectId,
        ref:'users'
    },
    isActive: {
        type: Boolean,
        default: false
    }
})

const Theatre = mongooes.model("theatres", theatreShema);
module.exports = Theatre        