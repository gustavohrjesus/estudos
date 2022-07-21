const Sequelize = require('sequelize');

// criando o acesso do Sequelize com o BD
const sequelize = new Sequelize('celke', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});

// * testando a conexão
sequelize.authenticate().then(function(){
    console.log('Conexao realizada com sucesso!')
}).catch(function(err){
    console.log("Erro ao realizar a conexao com o BD: " + err);
})

// * criando uma tabela na BD usando o Sequelize
const Pagtos = sequelize.define('pagamentos', {
    // atributos - nome das colunas
    nome:{
        type: Sequelize.STRING,
    },
    valor: {
        type: Sequelize.DOUBLE
    }
})
// Pagtos.sync( {force: true} ); //Sync: comando para criar a tabela. force: true forca a criar a table
// Apos usado o comando sync e ter a tabela criada, comentar para nao ficar recriando toda vez que rodar o Node
/* //*! o Sequelize irá criar automaticament os campos: id (inteiro nao nulo auto-incremento), createdAt (como datatime not null) e updatedAt(como datatime not null). ENGINE= InnoDB*/