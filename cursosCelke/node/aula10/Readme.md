# AULA 10 - COMO APAGAR REGISTRO NO BANCO DE DADOS MySQL COM NODE
## **UTILIZAR O aula07 COMO PACOTE PARA ESTUDOS**

### UPDATE NO BD MySQL
```connection.query("DELETE FROM users WHERE id = 3", function(err, result){
    if(!err){
        console.log('Usuario DELETADO com sucesso!');
    } else {
        console.log('Erro ao DELETAR o usuario!');
    }
})
```


> Obs.: instalamos o nodemon dentro do diretorio /cursosCelke/node