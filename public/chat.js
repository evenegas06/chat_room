const socket = io();
const { createApp } = Vue;

createApp({
    data() {
        return {
            step: 'nick',
            nick: null,
            message: null,
            messages: [],
        };
    },
    methods: {
        send() {
            socket.emit('chat-message', {
                nick: this.nick,
                message: this.message,
                date: new Date().getTime()
            });

            this.message = null;
        },
        signIn() {
            if (!this.nick) {
                return;
            }

            this.step = 'chat';
        },
    },
    mounted() {
        socket.on('chat-message', (msg) => {
            this.messages.push(msg);

            setTimeout(() => {
                const chatContainer = document.querySelector(".chat-container");
                chatContainer.scrollTop = chatContainer.scrollHeight;
            }, 10);
        });
    }
}).mount('#app');