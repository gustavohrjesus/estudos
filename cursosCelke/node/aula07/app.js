const express = require("express")

const app = express()

// Conexao com o BD MySQL
const mysql = require('mysql')
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Sumato17#',
    database: 'celke'
})

// Testando a conexao com o BD
connection.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

// CONSULTANDO DIRETO NO BANCO
connection.query('SELECT * FROM users', function(err, rows, fields){
    if(!err){
        console.log("Resultado: ", rows);
    } else {
        console.log("Erro ao realizar a consulta");
    }
})


app.get("/", function(req, res){ // preciso passar o caminho absoluto. Entao utilizo o __dirname + "/src/index.html"
    res.sendFile(__dirname + "/src/index.html") // onde informo o arquivo que quero chamar na pagina, sendFile
})

app.get("/contato", function(req, res){
    res.send("Pagina do contato") // ainda nao alterado
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