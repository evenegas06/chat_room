const express = require('express');
const app = express();

app.use(express.static(__dirname + '/../public'));

const http = require('http').createServer(app);
const socket = require('./socket');
socket(http);

// Database connection
const mongoose = require('mongoose');

main()
    .then(() => console.log('Database connection success'))
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/chat_room');
}
// app.get('/', (request, response) => {
//     response.send('Hello world!');
// });

module.exports = http;