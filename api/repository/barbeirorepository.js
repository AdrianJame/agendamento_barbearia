import conexao from "./connection.js";

export async function LoginBarbeiros(email, senha) {
    let sql = 'SELECT * FROM tb_barbeiro WHERE ds_email = ? AND ds_senha = ?';

    let resposta = await conexao.query(sql, [email, senha]);
    let linhas = resposta[0];
    let barbeiro = linhas[0];

    console.log(barbeiro);

    return barbeiro;
}

