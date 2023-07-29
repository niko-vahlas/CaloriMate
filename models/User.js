const mongoose = require('mongoose');

const entrySchema = new mongoose.Schema({
  date: String,
  calories: Number,
  weight: Number,
});

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  entries: [entrySchema],
});

const User = mongoose.model('User', userSchema);

module.exports = User;
