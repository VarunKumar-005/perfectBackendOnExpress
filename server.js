import app from './app.js';
import connection from './config/dbConfig.js';
import 'dotenv/config';

const PORT = process.env.PORT || 3000;

connection().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});