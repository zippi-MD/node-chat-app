const socket = io();

socket.on('connect', function() {
    console.log('Connected to server');

    socket.emit('createMessage', {
        from: 'Zippi',
        text: 'Kiubas, como estas'
    })
});

socket.on('disconnect', function() {
    console.log('Disconnected from server.');
});

socket.on('newMessage', function(message) {
   console.log('New Message', message)
});