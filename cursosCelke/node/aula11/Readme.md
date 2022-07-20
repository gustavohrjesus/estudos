# AULA 11 - COMO INSTALAR E USAR O SEQUELIZE NO NODE.JS
## **UTILIZAR O aula07 COMO PACOTE PARA ESTUDOS**

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