const db = require('./db') // chama a conexao com o banco de dados

const Pagamento = db.sequelize.define('pagamentos', {
    nome: {
        type: db.Sequelize.STRING
    },
    valor: {
        type: db.Sequelize.DOUBLE
    }
})

//Criar a tabela. Para criacao dessa tabela, acesse do dir 'models', do projeto, executar somente esse arquivo: node Pagamento.js
// Apos criada, comentar esse bloco para nao ficar recriando a tabela toda vez
//* Pagamento.sync({force: true}) // apos criada a table, comentar essa linha para nao ficar recriando toda vez

// exportando nosso modulo pagamento
module.exports = Pagamento