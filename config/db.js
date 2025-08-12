const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  console.log('🟡 Intentando conectar a MongoDB...');
  console.log('🔍 URI:', process.env.MONGODB_URI); // Verificar si está definida

  try {
    await mongoose.connect(process.env.MONGODB_URI);

    const db = mongoose.connection;
    db.on('connected', () => {
      console.log(`✅ MongoDB conectado correctamente a la base de datos: ${db.name}`);
    });

  } catch (error) {
    console.error('❌ Error conectando a MongoDB:', error);
    process.exit(1);
  }
};

module.exports = connectDB;
