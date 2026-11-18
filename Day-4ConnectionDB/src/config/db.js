const mongoose = require('mongoose');

const mongoUri = process.env.MONGO_URI;

const connectDB = async () => {
    if (!mongoUri || !/^mongodb(?:\+srv)?:\/\//.test(mongoUri)) {
        throw new Error('MONGO_URI must start with mongodb:// or mongodb+srv://');
    }

    await mongoose.connect(mongoUri);
    console.log('Connected to MongoDB');
};

module.exports = connectDB;