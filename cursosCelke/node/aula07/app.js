// Conexao com o BD MySQL
const mysql = require('mysql')
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', // mudar senha
    database: 'celke'
})

// Testando a conexao com o BD
connection.connect(function (err) {
    if (err) {
        console.error('Erro ao conectar com o BD: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

// aula08 - inserindo um usuario
connection.query("INSERT INTO users(nome, email) VALUES ('Kelly', 'kelly@gmail.com')", function(err, result){
    if(!err){
        console.log('Usuario cadastrado com sucesso!')
    } else{
        console.log('Erro ao cadastrar o usuario!')
    }
})

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
