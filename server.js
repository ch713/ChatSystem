const express = require('express')
const app = express()
const http = require('http').Server(app);
const clientPort = 3000;
const clientAddress = 'http://localhost';
const port = 3001
const io = require('socket.io')(http, {
  cors: {
    origin: `${clientAddress}:${clientPort}`,
    methods: ["GET", "POST"]
  }
});

//Express Logic
app.get('/', (req, res) => {
  res.send('Hello World!')
})

//Socket.IO Logic
io.on('connection', (socket) => {
  console.log('A User Connected');

  socket.on('disconnect', () => {
    console.log('A User Disconnected');
  });

//   socket.on('chat message', (msg) => {
//     console.log('Server Recieved Message: ' + msg);
//     io.emit('chat message', msg);
//   });
});

http.listen(port, () => {
  console.log(`Chat Server Started At: http://localhost:${port}`)
})