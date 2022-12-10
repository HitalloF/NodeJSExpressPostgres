const express = require("express"); // buscando express
const app = express(); // definindo express 
const port = 3000; // definindo porta
const homeRouter = require('./src/routes/home.router')
const clienteRoute = require('./src/routes/cliente.routes')
const animalRoute =require('./src/routes/animal.routers')
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(express.json()) // o talvez usode json


app.use(homeRouter)
app.use(clienteRoute)
app.use(animalRoute)



app.listen(port) // ligando servidor

