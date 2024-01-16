import routes from "./routes";
import { Request, Response, NextFunction } from "express";

const express = require('express');
const cors = require('cors')
const corsOptions = {
    origin: 'https://gastronom-ia.vercel.app/',
    optionsSuccessStatus: 200,
}

const app = express();
const PORT = process.env.PORT || 3336;

app.use((req: Request, res: Response, next: NextFunction) => {
    console.log('Middleware CORS está sendo chamado.');
    cors()(req, res, next);
});

app.use(cors(corsOptions))
// middleware para a configuração do JSON no express
app.use(express.json());

app.use('/', routes)

app.listen(PORT, () =>{
    console.log(`Server is runnin on port: ${PORT}`)
});
