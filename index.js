const { Socket } = require("socket.io");

// Node server which will handle socket io connection
const io = required('socket.io')(8000)

const users = {};

io.on('connection', Socket =>{
    Socket.on('new-user-joined', name =>{
        console.log('New user', name)
        users[Socket.id] = name;
        Socket.broadcast.emit('user-joined', name);
    });

    Socket.on('send', message =>{
        Socket.broadcast.emit('receive', {message: message, name: users[Socket.id]})
    });
})

