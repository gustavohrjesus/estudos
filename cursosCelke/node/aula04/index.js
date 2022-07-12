const express = require("express")

const app = express()

app.get("/", function(req, res){
    res.send("Gerenciador Financeiro - Aulas 04 e 05")
})

app.get("/contato", function(req, res){
    res.send("Pagina do contato")
})

app.get("/sobre-empresa", function(req, res){
    res.send("Pagina sobre-empresa")
})

app.get("/blog", function(req, res){
    res.send("Pagina do blog")
})


// localhost:8080
app.listen(8080)