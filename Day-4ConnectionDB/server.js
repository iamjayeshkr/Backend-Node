require('dotenv').config({ override: true });

const app = require('./src/app');
const port = process.env.PORT || 3000;
const connectDB = require('./src/config/db');

const startServer = async () => {
    try {
        await connectDB();

        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1);
    }
};

startServer();