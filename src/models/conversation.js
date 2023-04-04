const mongoose = require('mongoose');

const conversationSchema = new mongoose.Schema({
    date: Number,
    message: String,
    user: String
});

const Conversation = mongoose.model('Conversation', conversationSchema);

module.exports = Conversation;