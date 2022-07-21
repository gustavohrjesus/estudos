# AULA 11 - COMO INSTALAR E USAR O SEQUELIZE NO NODE.JS

***
## Iniciar o MySQL pelo terminal:
* C:\wamp64\bin\mysql\mysql5.7.14\bin
    * Executar o mysqld
    * `mysql -u root -p`
        * Irá pedir a senha do MySQL

## MUDANDO PARA O BANCO DE DADOS QUE SERA USADO
* `USE 'celke';`
***

# SEQUELIZE
## Sequelize is an easy-to-use and promise-based Node.js ORM tool for Postgres, MySQL, MariaDB, SQLite, DB2, Microsoft SQL Server, and Snowflake. It features solid transaction support, relations, eager and lazy loading, read replication and more.
[NPM - Explicação do Sequelize](https://www.npmjs.com/package/sequelize)

* Instalação do Sequelize:
    * [Sequelize - Instalacao](https://sequelize.org/docs/v6/getting-started/)
        * `npm install --save sequelize`
* Indicar qual bando de dados sera utilizado (No nosso caso, o MySQL):
    * `npm install --save mysql2`

### Configurando a conexão do Sequelize com o BD
`const Sequelize = require('sequelize');`
```
const sequelize = new Sequelize('celke', 'user', 'password', {
  host: 'localhost',
  dialect: 'mysql'
  /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});
```
#### Testando a conexão
```
sequelize.authenticate().then(function(){
    console.log('Conexao realizada com sucesso!')
}).catch(function(err){
    console.log("Erro ao realizar a conexao com o BD: " + err);
})
```

### CRIAR UMA TABELA COM SEQUELIZE
* Obs.: antes iremos excluir as tabelas que já temos no nosso BD. Dentro do terminal do MySQL, deletamos a table com o comando abaixo:
    * `DROP TABLE <nomeDaTabela>;`

* Criando a tabela com Sequelize:
    * __Criando uma tabela na BD usando o Sequelize__
    ```
    const Pagtos = sequelize.define('pagamentos', {
        // atributos - nome das colunas
        nome:{
            type: Sequelize.STRING,
        },
        valor: {
            type: Sequelize.DOUBLE
        }
    })
    Pagtos.sync( {force: true} ); //Sync: comando para criar a tabela. force: true forca a criar a table
    ```
    **Apos usado o comando sync e ter a tabela criada, comentar para nao ficar recriando toda vez que rodar o Node**
    __O Sequelize irá criar automaticament os campos: id (inteiro nao nulo auto-incremento), createdAt (como datatime not null) e updatedAt(como datatime not null). ENGINE= InnoDB__


* Inserir registro no banco de dados com Sequelize
    * [Model Querying - Basics](https://sequelize.org/docs/v6/core-concepts/model-querying-basics/)
    ```
    Pagtos.create({
        nome: "Energia",
        valor: 220
    })
    ```



> Obs.: instalamos o nodemon dentro do diretorio /cursosCelke/node