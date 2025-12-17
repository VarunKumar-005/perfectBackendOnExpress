import mongoose from 'mongoose';
import 'dotenv/config';

async function connection() {
    try {
        const uri = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/storeDb";
        await mongoose.connect(uri);
        console.log('Database connection succeeded');
    } catch (err) {
        console.log(`Connectivity error: ${err.message}`);
        process.exit(1);
    }
}
export default connection;