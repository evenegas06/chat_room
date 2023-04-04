const Conversation = require('./models/conversation');

module.exports = (http) => {
    const io = require('socket.io')(http);

    io.on('connection', (socket) => {
        console.log('user connected.');
        
        socket.on('chat-message', (msg) => {
            io.emit('chat-message', msg);

            try {
                const conversationDB = new Conversation(msg);
                conversationDB.save();
            } catch (error) {
                console.log(error);
            }
        });

        socket.on('disconnect', () => {
            console.log('user disconnected.');
        });
    });
}