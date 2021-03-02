const {Pool} = require("pg");
async function criarCon() {
    const pool = new Pool({
        connectionString: 'postgres://hzbadwqisspivt:8baf751f9018e39448ecf5ac51ca9b9f0df6a201213280ea362df374e7b91c64@ec2-54-198-73-79.compute-1.amazonaws.com:5432/d1q5a9plmkvncr',
        ssl: {
            rejectUnauthorized: false
        }
    });

    let conn = await pool.connect();
    await conn.query("insert into Pizza (nome) values ($1), ($2), ($3), ($4), ($5)",["Frango", "Frango Especial", "Calabresa", "4 queijos", "Marguerita"]);
    await conn.query("insert into Pizza (tamanho) values ($1), ($2), ($3), ($4), ($5)",["Pequena", "Pequena", "Família", "Pequena", "Família"]);
    await conn.query("insert into Pizza (valor) values ($1), ($2), ($3), ($4), ($5)",["22,00 reais", "25,00 reais", "40,00 reais", "25,00 reais", "38,00 reais"]);
    await conn.query("update Pizza set tamanho = $1 where id = $2", ["Pequena", 5]);
    await conn.query("update Pizza set valor = $1 where id = $2", ["22,00 reais", 5]);
    await conn.query("delete from Pizza where tamanho like 'Familia%'");
    let res = await conn.query("select * from Pizza");
    let tuplas = res.rows;
    for(let tupla of tuplas) {
        console.log(tupla);
    }
    conn.release();
}

criarCon();

