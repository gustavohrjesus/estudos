# AULA 09 - Como editar registro no banco de dados MySQL com Node
## **UTILIZAR O aula07 COMO PACOTE PARA ESTUDOS**

### UPDATE NO BD MySQL
```connection.query("UPDATE users SET nome = 'Gustavo Jesus' WHERE id = 1", function(err, result){
    if(!err){
        console.log('Usuario ATUALIZADO com sucesso!')
    } else{
        console.log('Erro ao ATUALIZAR o usuario!')
    }
}) 
```


> Obs.: instalamos o nodemon dentro do diretorio /cursosCelke/node