const express = require('express');
const path = require('path');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');

const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./docs/swagger.yaml');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// DB
connectDB();

// Rutas
app.use('/api/products', productRoutes);


// Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// JSDoc removido

// Servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  const baseUrl = `http://localhost:${PORT}`;
  console.log(`Servidor corriendo en ${baseUrl}`);
  console.log('\n================= ENDPOINTS DISPONIBLES =================');
  console.table([
    {
      Metodo: 'GET',
      URL: `${baseUrl}/api/products`,
      Descripcion: 'Obtener todos los productos'
    },
    {
      Metodo: 'POST',
      URL: `${baseUrl}/api/products`,
      Descripcion: 'Crear un nuevo producto'
    },
    {
      Metodo: 'GET',
      URL: `${baseUrl}/api/products/{id}`,
      Descripcion: 'Obtener producto por ID'
    },
    {
      Metodo: 'PUT',
      URL: `${baseUrl}/api/products/{id}`,
      Descripcion: 'Actualizar un producto'
    },
    {
      Metodo: 'GET',
      URL: `${baseUrl}/api-docs`,
      Descripcion: 'Documentación Swagger de la API'
    },
  // ...sin endpoint JSDoc...
  ]);
  console.log('========================================================\n');
});
