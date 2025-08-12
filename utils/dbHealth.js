const mongoose = require('mongoose');

/**
 * Verifica el estado de la conexión a MongoDB
 * @returns {Promise<{status: string, message: string, ping: number}>}
 */
const checkDbConnection = async () => {
  try {
    const startTime = Date.now();
    // Usamos ping para verificar la conexión
    await mongoose.connection.db.admin().ping();
    const ping = Date.now() - startTime;
    
    return {
      status: 'healthy',
      message: 'Conexión a MongoDB establecida correctamente',
      ping: `${ping}ms`,
      dbName: mongoose.connection.name,
      dbHost: mongoose.connection.host,
      dbPort: mongoose.connection.port,
      dbUser: mongoose.connection.user,
      dbState: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected'
    };
  } catch (error) {
    return {
      status: 'unhealthy',
      message: 'Error al conectar con MongoDB',
      error: error.message,
      details: {
        name: error.name,
        code: error.code,
        codeName: error.codeName
      }
    };
  }
};

/**
 * Middleware para verificar la salud de la base de datos
 */
const healthCheckMiddleware = async (req, res) => {
  try {
    const health = await checkDbConnection();
    const status = health.status === 'healthy' ? 200 : 503;
    
    res.status(status).json({
      status: health.status,
      message: health.message,
      timestamp: new Date().toISOString(),
      ...(health.ping && { ping: health.ping }),
      ...(health.error && { error: health.error }),
      ...(health.details && { details: health.details })
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: 'Error al verificar la salud de la base de datos',
      error: error.message
    });
  }
};

module.exports = {
  checkDbConnection,
  healthCheckMiddleware
};
