import routes from "./routes";

const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3336;

app.use(cors());
// middleware para a configuração do JSON no express
app.use(express.json());

app.use('/', routes)

app.listen(PORT, () =>{
    console.log(`Server is runnin on port: ${PORT}`)
});
