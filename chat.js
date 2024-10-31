const http = require('http');
const express = require('express');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// On client connection
io.on('connection', (socket) => {
    console.log('A user connected');

    // Listen for chat message
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg); // Send message to all clients
    });

    // On client disconnect
    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

server.listen(3001, () => console.log('Chat server running on port 3001'));
