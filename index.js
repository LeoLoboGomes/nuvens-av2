const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Bem vindo ao meu site!</h1>");
})

app.get("/cadastro", (req, res) => {
  res.send("<h1>Aqui você pode fazer seu cadastro com tranquilidade!</h1>");
})

app.get("/login", (req, res) => {
  res.send("<h1>Faça seu login</h1>");
})

app.listen(3000, (error) => {
  if (error) {
    console.log("Erro ao Iniciar.");
  } else {
    console.log("Servidor Iniciado.");
  }
})