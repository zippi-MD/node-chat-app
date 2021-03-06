const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

const {generateMessage, generateLocationMessage} = require('./utils/message')

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('new user connected');

    socket.emit('newMessage', generateMessage('Admin', 'Welcome to the Chat App.'));

    socket.broadcast.emit('newMessage', generateMessage('Admin', 'New user joined.'));


    socket.on('createMessage', (newMessage, callback) => {
        console.log('Message', newMessage);

        io.emit('newMessage', generateMessage(newMessage.from, newMessage.text));
        callback();
        // socket.broadcast.emit('newMessage', {
        //     from: newMessage.from,
        //     text: newMessage.text,
        //     createdAt: new Date().getTime()
        // });
    });

    socket.on('createLocationMessage', (newLocation) => {
        io.emit('newLocationMessage', generateLocationMessage('Admin', newLocation.latitude, newLocation.longitude));
    });

    socket.on('disconnect', () => {
        console.log('User was disconnected');
    });
});

server.listen(port, () => {
    console.log(`Server is up on port: ${port}`);
});