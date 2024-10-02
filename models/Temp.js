const mongoose = require('mongoose');

const tempSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    fullname: {
        type: String,
        required: true
    },
    createdAt: {
        type:Date,
        required:true,
        default:Date.now(), 
    }
}, { timestamps: true });

const Temp = mongoose.model('Temp', tempSchema);

module.exports = Temp;
