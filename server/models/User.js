const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    name: {
        type: String,
     
    },

    email: {
        type: String,
        trim: true,
        required: [true, 'e-mail is required'],
        
    },
    password: {
        type: String,
        trim: true,
        required: [true, 'password is required'],
        
    },

   
}, { timestamps: true })

module.exports = mongoose.model('User', userSchema);