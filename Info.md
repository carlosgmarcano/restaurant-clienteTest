## Create-React-app

### EXTENSIONES INSTALADAS

## Tailwindcss

//Instalacion
//Postcss y autoprefixer para que cualquier navegador soporte las nuevas propiedades de css
npm i --save-dev autoprefixer postcss-cli tailwindcss

//Creacion del archivo de configuracion de tailwind
npx tailwind init tailwind.js

//Crear un archivo en el dorectorio raiz ## postcss.config.js ##

const tailwindcss = require('tailwindcss');

module.exports = {
plugins: [
tailwindcss('./tailwind.js'),
require('autoprefixer')
]
}

//Cambiar en el package.json
"scripts": {
"start": "react-scripts start",
"build": "react-scripts build",
"test": "react-scripts test",
"eject": "react-scripts eject"
}
//Cambiarlo por esto:
"scripts": {
"start": "npm run watch:css && react-scripts start",
"build": "npm run build:css && react-scripts build",
"test": "react-scripts test",
"eject": "react-scripts eject",
"build:css": "postcss src/css/tailwind.css -o src/css/main.css",
"watch:css": "postcss src/css/tailwind.css -o src/css/main.css"
},

//Importar en el index la hoja de estilos
import './css/main.css';

## React Router DOM

//instalar la version 6.0 de react router dom (Si no hay ninguna version como next es que ya liberaron)
npm install react-router@next react-router-dom@next

//Importar en el index
import { BrowserRouter as Router } from 'react-router-dom';

//Encapsular el Router el componente APP

ReactDOM.render(
<Router>
<App />
</Router>, document.getElementById('root'));

//En caso de un error: Module not found: Can't resolve 'history'
npm install --save history

## Formulario

//Se configuraron todas las clases con clases de tailwin
// Se instalo Formik, es un hook para capturar los datos en un objeto

npm i formik

//Se instala YUP para hacer la validacion del formik
npm i yup

## Firebase

npm i firebase

//Se crea Directorio Firebase = {config.js - context.js - firebase.js - index.js}

//el archivo de config.js se llena con la configuracion de la pagina de firebase

## Subir Fotos Firebase

//Primero habilitar el servicio de storage y luego instalar el paquete
npm i react-firebase-file-uploader
