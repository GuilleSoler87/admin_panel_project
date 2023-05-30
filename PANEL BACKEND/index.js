const express = require('express');
const app = express();
const cors = require('cors')
require("dotenv").config(); // para poder usar dotenv
const PORT = process.env.PORT || 3001; // .env config 3001 es un puerto ALTERNATIVO

const { dbConnection } = require('./config/config'); 

app.use(cors())
app.use(express.json());
app.use(express.static("./uploads"))

dbConnection();

app.use('/usuarios', require('./routes/usuarios'));
app.use('/sponsors', require('./routes/sponsors'));
app.use('/recintos', require('./routes/recintos'));
app.use('/eventos', require('./routes/eventos'));
app.use('/programaciones', require('./routes/programaciones'));
app.use('/notificaciones', require('./routes/notificaciones'));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
