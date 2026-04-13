import { LoginBarbeiros, CadastrarBarbeiro, verificarDuplicadoEmail } from "../repository/barbeirorepository.js";
import { Router } from "express";

const endpoint = Router();

endpoint.post('/barbeiro/login', async (req, res) => {

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

endpoint.post('/barbeiro/cadastro', async (req, res) => {
    try {

      const barbeiro = await req.body;

      if(!barbeiro.nome)
            throw new Error('⚠ barbeiro obrigatório')

        if(!barbeiro.email)
            throw new Error('⚠ email obrigatório')

        if (!barbeiro.email.includes('@'))
            throw new Error('Email Inválido');

        if (!/mail\.com$/i.test(barbeiro.email))
            throw new Error('Email Inválido');


        if(!barbeiro.senha)
            throw new Error('⚠ senha obrigatorio')

        const duplicadoEmail = await verificarDuplicadoEmail(barbeiro.email);

        if(duplicadoEmail){
            throw new Error('Email já cadastrado.');
        }


        const dados = await CadastrarBarbeiro(barbeiro)
        res.send(dados)


    } catch (err) {
      res.status(400).send({
        erro: err.message
      })
    }
})

export default endpoint;