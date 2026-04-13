import 'dotenv/config';
import express from 'express';

import barbeirocontroller from './controller/barbeirocontroller.js';
import clientecontroller from './controller/clientecontroller.js'


const server = express();

server.use(express.json());
server.use(barbeirocontroller);
server.use(clientecontroller);



server.listen(process.env.PORT, () => console.log(`API online na porta ${process.env.PORT}`))