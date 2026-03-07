require('dotenv').config({ path: "./config/config.env"});
const express = require('express');
const app = express();
const cors = require('cors');

const MongoClient = require('mongodb').MongoClient;

const DBHOST = process.env.DBHOST;
const DBPORT = process.env.DBPORT;
const DBUSERNAME = process.env.DBUSERNAME;
const DBPASSWORD = process.env.DBPASSWORD;

MongoClient.connect(`mongodb://${DBUSERNAME}:${DBPASSWORD}@${DBHOST}:${DBPORT}`, 
                    { useUnifiedTopology: true },
                    (err, client) => {
    if (err) {
        console.log('error connecting to DB ', err);
        throw new Error('error');
    }

    console.log('Connected to Database ');
    app.locals.db = client.db('manageautism');
});

app.use(cors({ origin: '*'}));

app.use(express.json());
app.use('/api/auth', require('./routes/auth'));

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

process.on('unhandledRejection', (err) => {
    console.log('uncaught err', err);
    server.close(() => process.exit(1));
});