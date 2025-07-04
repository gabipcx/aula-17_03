const express = require('express');
const bodyParser = require('body-parser');
const userController = require('./controllers/userController');
const app = express();

// Configura o EJS como mecanismo de visualização
app.set('view engine', 'ejs');

// Middleware para parsing do body
app.use(bodyParser.urlencoded({ extended: false }));

// Rotas
app.get('/ediçao', userController.getAllUsers);
app.get('/add', ( req, res) => res.render('add'));
app.post('/add', userController.addUser);
app.get('/edit/:id', userController.getUserById);
app.post('/edit/:id', userController.updateUser);
app.get('/dell/:id', userController.getdeleteByUser);
app.post('/dell/:id', userController.deleteUser);

// Iniciar o servidor
app.listen(2000, () => {
    console.log('Servidor rodando na porta 2000');
});
