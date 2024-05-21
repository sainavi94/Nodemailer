require('dotenv').config();
const express = require('express');
const router = require('./routes/user');
const app = express();

app.use(express.json());

app.use('/user',router);


app.listen(3000,() => {
    console.log('Server running on....')
})
