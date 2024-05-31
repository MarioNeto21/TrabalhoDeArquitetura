const express = require('express')
const mongoose = require('mongoose')
const app = express()

app.get('/', (req, res) => {
    res.send('hello world na porta 8080')
})

app.listen(8080);

mongoose.connect('mongodb+srv://mariaclara6041:#Melim1705@cluster0.rnujtmt.mongodb.net/Node-API')
.then(() => {
    console.log('conectado com o dba')


}).catch (() =>
    console.log('error')
)
