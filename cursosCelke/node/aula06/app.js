const express = require("express")

const app = express()

app.get("/", function(req, res){ // preciso passar o caminho absoluto. Entao utilizo o __dirname + "/src/index.html"
    res.sendFile(__dirname + "/src/index.html") // onde informo o arquivo que quero chamar na pagina, sendFile
})

app.get("/contato", function(req, res){
    res.send("Pagina do contato")
})

app.get("/sobre-empresa", function(req, res){
    // res.send("Pagina sobre-empresa")
    res.sendFile(__dirname + "/src/sobre-empresa.html")
})

app.get("/blog", function(req, res){
    res.send("Pagina do blog")
})


// localhost:8080
app.listen(8080)