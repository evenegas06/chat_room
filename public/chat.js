const socket = io();
const { createApp } = Vue;

createApp({
    data() {
        return {
            nick: 'Eduardo'
        }
    }
}).mount('#app');