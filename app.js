const express = require('express');
const app = express();
const PORT = 3000;
const mongoose = require('mongoose')
const path = require('path')
const linkRoute = require('./routes/linkRoute')


mongoose.connect('mongodb://localhost/Links');

/* criando links */

// let link = new Link({
//     title: "progbr",
//     description: "Link para o Twitter",
//     url: "https://twitter.com/progbr",
//     click: 0,

// });

/* salvando nosso link no banco de dados*/

// link.save().then( (doc)=>{
//     console.log(doc)
// }).catch(error =>{
//     console.log(error)
// });

let db = mongoose.connection;

console.log(db)

db.on("error", ()=>console.log("houve um erro"))
db.once("open", ()=> { console.log("banco carregado"); })

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'templates'))

app.use('/', linkRoute)

app.listen(PORT, ()=>console.log(`Servidor rodando na porta ${PORT}`))