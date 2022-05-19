require('dotenv').config();
// const express = require('express');
// const axios = require('axios');
// const cors = require('cors');
// const app = express();
// const PORT = process.env.PORT || 8000;
// // const mongoose = require('mongoose');
// const MONGODB_URI = process.env.MONGODB_URI;
// const API_KEY = process.env.REACT_APP_OPENAI_API_KEY;
// // const db = mongoose.connection;


// // mongoose.connect(MONGODB_URI, {
// //     useNewUrlParser: true,
// //     useUnifiedTopology: true,
// // });
// // db.on('open', () => {
// //     console.log('Mongo is Connected');
// // });

// app.use(express.json());
// app.use(cors());

// // app.get('/chatai', (req,res) => {

// // })

// app.listen(PORT,()=>{
//     console.log('Server Connected', PORT);
// });


const path = require('path');
const express = require("express");
const app = express();
const {createServer} = require('http');

app.use(express.static('build'))

app.get('*', (req, res) => {
  res.sendFile(path.resolve(`${__dirname}/build/index.html`))
})

const httpServer = createServer(app);
const PORT = process.env.PORT || 8000;
// const {Server} = require("socket.io");
// const io = new Server(httpServer);

// io.on('connection', function(socket) {
//   socket.on('send', function(message){
//       io.emit('receive', message);
//   });
// });
httpServer.listen(PORT);
