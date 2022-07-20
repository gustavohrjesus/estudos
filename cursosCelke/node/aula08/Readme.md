# AULA 08 - Como cadastrar com Node.js no banco de dados
## **DESSA AULA EM DIANTE VAMOS UTILIZAR O aula07 COMO PACOTE PARA ESTUDOS**

### Criando a coluna id na table users:
`ALTER TABLE `users` ADD `id` INT NOT NULL AUTO_INCREMENT FIRST, ADD PRIMARY KEY (`id`);`

### INSERÇÃO NO BD MySQL
```connection.query("INSERT INTO users(nome, email) VALUES ('Kelly', 'kelly@gmail.com')", function(err, result){
    if(!err){
        console.log('Usuario cadastrado com sucesso!')
    } else{
        console.log('Erro ao cadastrar o usuario!')
    }
})
```


> Obs.: instalamos o nodemon dentro do diretorio /cursosCelke/node