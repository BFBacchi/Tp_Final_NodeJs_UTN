
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');


dotenv.config();
const app = express();

// Middlewares
app.use(express.json());

// Conexión a la base de datos
connectDB();

// Rutas de productos
app.use('/api/products', productRoutes);


// Exportar como función serverless para Vercel
//const serverless = require('serverless-http');
//module.exports = serverless(app);
//Dedicamos un puerto de ejecucion a nuestra aplicacion
app.listen(8080, () => {
    console.log('Servidor escuchandose en el puerto ' + 8080)
})