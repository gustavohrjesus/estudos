const express = require("express");
const handlebars = require("express-handlebars");

const app = express();

// a linha abaixo, no video, nao estava funcionando somente: handlebars({defaultLayout: 'main'})
// então foi adicionado o ".engine". Desta forma, funcionou
app.engine('handlebars', handlebars.engine({ defaultLayout: 'main' })) //chama o views/layouts/main.handlebars - funciona
// app.engine('handlebars', handlebars.engine({ defaultLayout: 'main' })) // essa era a linha no video (sem o .engine) e nao funcionou
app.set('view engine', 'handlebars')

//Rotas
app.get('/pagamento', function(req, res){
    // res.send("Pagina para LISTAR pagamento") // para testar se aparece no navegador. URL: http://localhost:8080/pagamento
    res.render('pagamento') // renderiza a pagina views/pagamento.handlesbars
})

app.get('/add-pagamento', function(req, res){
    // res.send("Formulario para CADASTRAR pagamento") // para testar se aparece no navegador. URL: http://localhost:8080/add-pagamento
    res.render('add-pagamento') // renderiza a pagina views/pagamento.handlebars
})

app.listen(8080);