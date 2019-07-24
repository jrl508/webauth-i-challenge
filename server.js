const express = require('express');
const server = express();
const apiRouter = require('./apiRouter');
const session = require('express-session')

server.use(express.json());

server.use(
    session({
        name:'TheThousandSunny',
        secret: 'Mugiwara!!!',
        cookie:{
            maxAge: 1000*60,
            secure:false,
        },
        httpOnly: true,
        resave:false,
        saveUninitialized:false,  
    })
);

server.use('/api', apiRouter)

module.exports = server;