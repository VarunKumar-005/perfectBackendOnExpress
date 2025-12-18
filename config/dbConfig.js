import mongoose from 'mongoose';
import 'dotenv/config';

async function connection() {
    try {
        const uri = process.env.MONGO_URI;
        await mongoose.connect(uri);
        console.log('Database connection succeeded');
    } catch (err) {
        console.log(`Connectivity error: ${err.message}`);
        process.exit(1);
    }
}
export default connection;
