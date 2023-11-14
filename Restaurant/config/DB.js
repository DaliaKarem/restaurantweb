const mongoose = require('mongoose');

// eslint-disable-next-line camelcase
const DB_Config = () => {
    mongoose.connect(process.env.DB_URI)
        .then((con) => {
            console.log(`DB connected to ${con.connection.host}`);
        })
        .catch((error) => {
            console.error(`DB connection error: ${error.message}`);
            process.exit(1); // Exit the process on connection error
        });

    // Listening for the "disconnected" event
    mongoose.connection.on('disconnected', () => {
        console.log('DB disconnected. Trying to reconnect...');
        mongoose.connect(process.env.DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
        });
    });

    // Listening for the "error" event
    mongoose.connection.on('error', (err) => {
        console.error(`DB connection error: ${err.message}`);
    });

    // Listening for the "connected" event
    mongoose.connection.on('connected', () => {
        console.log('DB reconnected!');
    });

    // Close the Mongoose connection when the Node process is terminated
    process.on('SIGINT', () => {
        mongoose.connection.close(() => {
            console.log('DB connection closed due to app termination');
            process.exit(0);
        });
    });
};

// eslint-disable-next-line camelcase
module.exports = DB_Config;
