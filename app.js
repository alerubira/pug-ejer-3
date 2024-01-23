const express = require('express');
const bodyParser = require('body-parser');
const path = require('path'); // Agrega esta línea para importar 'path'
const app = express();
const port = 3000;

// Datos locales para pasar a la plantilla
const profesiones = ['Programador', 'Diseñador', 'Ingeniero', 'Otro'];
const provincias = ['Buenos Aires', 'Córdoba', 'Santa Fe', 'Mendoza', 'Otra'];
const localidades = ['Ciudad A', 'Ciudad B', 'Ciudad C', 'Otra'];

// Configuración de la aplicación Express
app.set('view engine', 'pug');
//app.set('vistas', __dirname + '/vistas');
app.set('views', path.join(__dirname, 'views'));
// Middleware para manejar datos del formulario
app.use(bodyParser.urlencoded({ extended: true }));

// Ruta para mostrar el formulario
app.get('/', (req, res) => {
  res.render('formulario', { profesiones, provincias, localidades });
});

// Ruta para procesar el formulario (puedes ajustar esta parte según tus necesidades)
app.post('/procesar', (req, res) => {
  console.log('Datos recibidos:', req.body);
  res.send('Datos recibidos correctamente.');
});

// Iniciar el servidor en el puerto 3000
app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto ${port}`);
});
