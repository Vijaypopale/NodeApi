const mongoose = require('mongoose');

const schema = mongoose.Schema;

const userSchema = new schema({
    name: { type: String},
    email:{ type: String},
    password:{ type: String},
    date:{ type: Date, default: Date.now }
});

const User = mongoose.model('user', userSchema);

module.exports = User;