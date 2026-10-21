const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="pt">
        <head>
            <meta charset="UTF-8">
            <title>Projeto do Marco</title>
            <style>
                body { font-family: Arial, sans-serif; text-align: center; padding-top: 50px; background-color: #f0f2f5; }
                h1 { color: #1877f2; }
                a { margin: 0 10px; color: #333; text-decoration: none; font-weight: bold; }
            </style>
        </head>
        <body>
            <h1>Projeto do Node.js Marco e Samara- Página Inicial</h1>
            <p>Aplicação web baseada no modelo Request-Response.</p>
            <nav>
                <a href="/">Início</a> | 
                <a href="/sobre">Sobre</a> | 
                <a href="/contacto">Contacto</a>
            </nav>
        </body>
        </html>
    `);
});

app.get('/sobre', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="pt">
        <head>
            <meta charset="UTF-8">
            <title>Sobre</title>
            <style>
                body { font-family: Arial, sans-serif; padding: 40px; }
            </style>
        </head>
        <body>
            <h1>Sobre o Projeto</h1>
            <p>Esta aplicação foi desenvolvida para a avaliação prática utilizando Node.js e Express.</p>
            <a href="/">← Voltar</a>
        </body>
        </html>
    `);
});

app.get('/contacto', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="pt">
        <head>
            <meta charset="UTF-8">
            <title>Contacto</title>
            <style>
                body { font-family: Arial, sans-serif; padding: 40px; }
            </style>
        </head>
        <body>
            <h1>Página de Contacto</h1>
            <p>Página de suporte e contactos da aplicação.</p>
            <a href="/">← Voltar</a>
        </body>
        </html>
    `);
});

app.listen(PORT, () => {
    console.log(`Servidor a rodar na porta ${PORT}`);
});