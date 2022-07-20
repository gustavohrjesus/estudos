# AULA 11 - COMO INSTALAR E USAR O SEQUELIZE NO NODE.JS
## Sequelize is an easy-to-use and promise-based Node.js ORM tool for Postgres, MySQL, MariaDB, SQLite, DB2, Microsoft SQL Server, and Snowflake. It features solid transaction support, relations, eager and lazy loading, read replication and more.
[NPM - Explicação e Instalação do Sequilize](https://www.npmjs.com/package/sequelize)

### Criar tabela com Sequelize


### Inserir registro n obanco de dados com Sequelize
```connection.query("UPDATE users SET nome = 'Gustavo Jesus' WHERE id = 1", function(err, result){
    if(!err){
        console.log('Usuario ATUALIZADO com sucesso!')
    } else{
        console.log('Erro ao ATUALIZAR o usuario!')
    }
}) 
```



> Obs.: instalamos o nodemon dentro do diretorio /cursosCelke/node