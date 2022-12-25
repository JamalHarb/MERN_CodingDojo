const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    age: Number
});

const U = mongoose.model('User', UserSchema);

module.exports = U;
