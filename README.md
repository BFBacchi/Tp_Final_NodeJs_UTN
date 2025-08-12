
# Trabajo Final - Diplomatura Professional Full Stack Developer (UTN)

**Universidad Tecnológica Nacional**

**Módulo NodeJs**

Este repositorio corresponde al trabajo final para la diplomatura de Professional Full Stack Developer dictada por la Universidad Tecnológica Nacional (UTN), módulo NodeJs. El proyecto consiste en el desarrollo de una API RESTful propia para la gestión y consulta de productos.

# API de Productos

## 📋 Descripción

API RESTful desarrollada en Node.js y Express, con arquitectura en capas (controladores, servicios, repositorios), que permite consultar, crear, actualizar y eliminar productos. Incluye documentación interactiva con Swagger y manejo de errores robusto.

## 🚀 Características

- **Arquitectura en capas**: Separación clara entre controladores, servicios, repositorios y rutas
- **Documentación automática**: Swagger UI integrado para probar y consultar los endpoints
- **Manejo de errores**: Respuestas HTTP apropiadas para diferentes situaciones
- **Variables de entorno**: Configuración flexible mediante archivos `.env`
- **API RESTful**: Endpoints bien estructurados siguiendo convenciones REST

## 🛠️ Tecnologías Utilizadas

- **Node.js**: Runtime de JavaScript
- **Express.js**: Framework web para Node.js
// ...existing code...
- **Swagger UI Express**: Documentación interactiva de la API
- **YAML.js**: Parser para archivos YAML de Swagger
- **Dotenv**: Gestión de variables de entorno

## 📁 Estructura del Proyecto

```
TP-Final-NodeJs-UTN/
├── app.js                 # Punto de entrada de la aplicación
├── package.json           # Dependencias y scripts
├── .gitignore             # Archivos excluidos de Git
├── config/                # Configuración de la base de datos y entorno
│   └── db.js
├── controllers/           # Controladores de la aplicación
│   └── productController.js
├── routes/                # Definición de rutas
│   └── productRoutes.js
├── services/              # Lógica de negocio y validaciones
│   └── productService.js
├── repositories/          # Acceso a datos y persistencia
│   └── productRepository.js
├── models/                # Modelos de datos
│   └── Product.js
├── utils/                 # Utilidades varias
│   └── dbHealth.js
├── docs/                  # Documentación Swagger
│   └── swagger.yaml
└── README.md              # Documentación del proyecto
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

Desde allí podrás:
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

Desarrollado como trabajo final para la Diplomatura Professional Full Stack Developer (UTN), módulo NodeJs.

## 📞 Soporte

Si tienes alguna pregunta o problema, puedes:
- Abrir un issue en el repositorio
- Revisar la documentación en Swagger UI
- Contactar al desarrollador

---

**Nota**: Esta API depende de la API pública de FakeStore. Si la API externa no está disponible, las peticiones fallarán. 