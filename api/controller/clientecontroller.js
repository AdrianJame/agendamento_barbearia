import { cadastro, verificarDuplicadoEmail, login } from "../repository/clienterepository.js";
import { Router } from "express";

const endpoints = Router();

endpoints.post('/cliente/cadastro', async (req, res) => {
    try{
        const cliente = await req.body;

        if(!cliente.nome)
        throw new Error('⚠ cliente obrigatório')

        if(!cliente.email)
            throw new Error('⚠ email obrigatório')

        if (!cliente.email.includes('@'))
            throw new Error('Email Inválido');

        if (!/mail\.com$/i.test(cliente.email))
            throw new Error('Email Inválido');

        if(!cliente.telefone)
            throw new Error('⚠ telefone obrigatorio')

        if(!cliente.senha)
            throw new Error('⚠ senha obrigatorio')

        const duplicadoEmail = await verificarDuplicadoEmail(cliente.email);

        if(duplicadoEmail){
            throw new Error('Email já cadastrado.');
        }

        const dados = await cadastro(cliente)
        res.send(dados)

    }catch (err) {
        res.status(400).send({
            erro: err.message
        })
    }
});

  endpoints.post('/cliente/login', async (req, res) => {
    try {
      let email = req.body.email;
      let senha = req.body.senha;
  
      let linha = await login(email, senha);
      if (linha == undefined) {
        throw new Error('Credenciais inválidas!');
      }
  
      res.send(linha);
      
    } catch (err) {
      res.status(500).send({ erro: err.message});
    }
  })

export default endpoints;