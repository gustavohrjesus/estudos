const express = require("express");
const handlebars = require("express-handlebars");

const app = express();

// a linha abaixo, no video, nao estava funcionando somente: handlebars({defaultLayout: 'main'})
// então foi adicionado o ".engine". Desta forma, funcionou
app.engine('handlebars', handlebars.engine({ defaultLayout: 'main' })) //chama o views/layouts/main.handlebars
// app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars')

//Rotas
app.get('/add-pagamento', function(req, res){
    res.send("Formulario para cadastrar pagamento")
})

app.listen(8080);