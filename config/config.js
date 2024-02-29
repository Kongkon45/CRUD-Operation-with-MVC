require('dotenv').config();

const dev = {
    app : {
        port : process.env.PORT || 5010
    },
    db : {
        url : process.env.DB_URL || "mongodb://localhost:27017/RestApiDb"
    }
}

module.exports = dev;
