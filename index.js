const express = require("express");
const app = express();

app.get("/", function(req,res){
    res.send("<h1>Explore à vontade, você está no meu site!</h1>");
})

app.get("/empresarios", function(req,res){
    res.send("<h1>Que tal conhecer meus empresários?</h1>");
})

app.get("/consulta/:item", function(req, res) {
    res.send("Você consultou o item: " + req.params.item);
});

app.get("/registro/:produto", function(req, res) {
    const produto = req.params.produto;
    if (produto) {
        res.send("<h1>Produto " + produto + " registrado com sucesso!</h1>");
    } else {
        res.send("Produto não encontrado!");
    }
});

app.listen(process.env.PORT ?? 5000, function(erro) {
    if (erro) {
        console.log("Erro ao iniciar o servidor!");
    } else {
        console.log("Servidor rodando na porta 5000!");
    }
});