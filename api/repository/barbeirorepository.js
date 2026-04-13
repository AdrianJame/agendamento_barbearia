import conexao from "./connection.js";

export async function LoginBarbeiros(email, senha) {
    let sql = 'SELECT * FROM tb_barbeiro WHERE ds_email = ? AND ds_senha = ?';

    let resposta = await conexao.query(sql, [email, senha]);
    let linhas = resposta[0];
    let barbeiro = linhas[0];

    console.log(barbeiro);

    return barbeiro;
}

export async function CadastrarBarbeiro(barbeiro) {
    let sql = 'INSERT INTO tb_barbeiro (nm_barbeiro, ds_email, ds_senha) VALUES (?, ?, ?)';

    let [info] = await conexao.query(sql, [
        barbeiro.nome,
        barbeiro.email,
        barbeiro.senha
    ]);

    barbeiro.id = info.insertId;

    return barbeiro;
}

export async function verificarDuplicadoEmail(email) {
    const comando = 'SELECT * FROM tb_barbeiro WHERE ds_email = ?';
    
    
    const [resposta] = await conexao.query(comando, [email]);
    
    
    if (resposta.length != 0) {
        return true;
    } else {
        return false;
    }
}