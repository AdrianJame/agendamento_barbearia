import { LoginBarbeiros } from "../repository/barbeirorepository.js";
import { Router } from "express";

const endpoint = Router();

endpoint.post('/login', async (req, res) => {

    try {
    let email = req.body.email;
    let senha = req.body.senha;

    let linha = await LoginBarbeiros(email, senha);
    if (linha == undefined) {
      throw new Error('Credenciais inválidas!');
    }

    res.send(linha);
    console.log('Requisição recebida');
    console.log('Email:', email);

  } catch (err) {
    res.status(500).send({ erro: err.message});
  }

});

export default endpoint;