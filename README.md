# API de Productos - FakeStore Wrapper

## 📋 Descripción

Esta es una API REST desarrollada en Node.js como segundo trabajo practico para la diplomatura Professional Full Stack Developer, que actúa como wrapper para la API pública de FakeStore. Permite obtener información de productos de manera sencilla y organizada, con documentación automática mediante Swagger.

## 🚀 Características

- **Arquitectura MVC**: Separación clara entre controladores, servicios y rutas
- **Documentación automática**: Swagger UI integrado para probar endpoints
- **Manejo de errores**: Respuestas HTTP apropiadas para diferentes situaciones
- **Variables de entorno**: Configuración flexible mediante archivos .env
- **API RESTful**: Endpoints bien estructurados siguiendo convenciones REST

## 🛠️ Tecnologías Utilizadas

- **Node.js**: Runtime de JavaScript
- **Express.js**: Framework web para Node.js
- **Axios**: Cliente HTTP para realizar peticiones a APIs externas
- **Swagger UI Express**: Documentación interactiva de la API
- **YAML.js**: Parser para archivos YAML de Swagger
- **Dotenv**: Gestión de variables de entorno

## 📁 Estructura del Proyecto

```
Tp2/
├── app.js                 # Punto de entrada de la aplicación
├── package.json           # Dependencias y scripts
├── .gitignore            # Archivos excluidos de Git
├── controllers/           # Controladores de la aplicación
│   └── productController.js
├── routes/               # Definición de rutas
│   └── productRoutes.js
├── services/             # Lógica de negocio
│   └── productService.js
└── docs/                 # Documentación
    └── swagger.yaml
```

## ⚙️ Instalación

### Prerrequisitos

- Node.js (versión 14 o superior)
- npm (incluido con Node.js)

### Pasos de instalación

1. **Clonar el repositorio**
   ```bash
   git clone <url-del-repositorio>
   cd Tp2
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno**
   
   Crear un archivo `.env` en la raíz del proyecto:
   ```env
   PORT=3000
   FAKESTORE_API_URL=https://fakestoreapi.com
   ```

4. **Iniciar el servidor**
   ```bash
   npm start
   ```

   O si no tienes un script de inicio configurado:
   ```bash
   node app.js
   ```

## 🌐 Uso de la API

### Endpoints Disponibles

#### 1. Obtener todos los productos
```http
GET /products
```

**Respuesta exitosa (200):**
```json
[
  {
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest...",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "rating": {
      "rate": 3.9,
      "count": 120
    }
  }
]
```

#### 2. Obtener producto por ID
```http
GET /product/{product_id}
```

**Parámetros:**
- `product_id` (integer, requerido): ID del producto

**Respuesta exitosa (200):**
```json
{
  "id": 1,
  "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  "price": 109.95,
  "description": "Your perfect pack for everyday use and walks in the forest...",
  "category": "men's clothing",
  "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  "rating": {
    "rate": 3.9,
    "count": 120
  }
}
```

**Respuesta de error (404):**
```json
{
  "error": "Producto no encontrado"
}
```

### Códigos de Estado HTTP

- **200**: Operación exitosa
- **404**: Producto no encontrado
- **500**: Error interno del servidor

## 📚 Documentación Interactiva

La API incluye documentación automática con Swagger UI. Una vez que el servidor esté corriendo, puedes acceder a:

```
http://localhost:3000/api-docs
```

Aquí podrás:
- Ver todos los endpoints disponibles
- Probar las peticiones directamente desde el navegador
- Ver los esquemas de datos
- Ejecutar consultas de prueba

## 🔧 Configuración

### Variables de Entorno

| Variable | Descripción | Valor por defecto |
|----------|-------------|-------------------|
| `PORT` | Puerto del servidor | 3000 |
| `FAKESTORE_API_URL` | URL de la API de FakeStore | https://fakestoreapi.com |

### Personalización

Puedes modificar la configuración editando el archivo `.env`:

```env
PORT=8080
FAKESTORE_API_URL=https://fakestoreapi.com
```

## 🧪 Pruebas

Para probar la API puedes usar:

### cURL
```bash
# Obtener todos los productos
curl http://localhost:3000/products

# Obtener producto específico
curl http://localhost:3000/product/1
```

### Postman
Importa la colección desde Swagger UI o crea las peticiones manualmente.

## 🚀 Despliegue

### Desarrollo Local
```bash
npm start
```

### Producción
```bash
NODE_ENV=production npm start
```

## 📝 Scripts Disponibles

```json
{
  "scripts": {
    "start": "node app.js",
    "dev": "nodemon app.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  }
}
```

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia ISC. Ver el archivo `LICENSE` para más detalles.

## 👨‍💻 Autor

Desarrollado como parte del Trabajo Práctico 2 de la Diplomatura en Node.js de UTN.

## 📞 Soporte

Si tienes alguna pregunta o problema, puedes:
- Abrir un issue en el repositorio
- Revisar la documentación en Swagger UI
- Contactar al desarrollador

---

**Nota**: Esta API depende de la API pública de FakeStore. Si la API externa no está disponible, las peticiones fallarán. 