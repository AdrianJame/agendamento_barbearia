import conexao from "./connection.js";

export async function cadastro(cliente){
    let comando = `insert into tb_cliente(nm_cliente, ds_email, ds_telefone, ds_senha)
                                    values(?, ?, ?, ?)`;
    
     let [info] = await conexao.query(comando, [
        cliente.nome,
        cliente.email,
        cliente.telefone,
        cliente.senha
     ]);

    cliente.id = info.insertID;

    return cliente;
}

export async function verificarDuplicadoEmail(email) {
    const comando = 'SELECT * FROM tb_cliente WHERE ds_email = ?';
    
    
    const [resposta] = await conexao.query(comando, [email]);
    
    
    if (resposta.length != 0) {
        return true;
    } else {
        return false;
    }
}

export async function login(email, senha) {
        let sql = `
    SELECT * FROM tb_cliente WHERE ds_email = ? and ds_senha = ?;`
  
    let respostas = await conexao.query(sql, [email,senha]);
    
    let linhas = respostas[0];
    let linha = linhas[0];
    console.log(linha)
  
    return linha;
}