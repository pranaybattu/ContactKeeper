const mongoose = require('mongoose')
const config = require('config')
const db = config.get('mongoURI')

const connectDB = async () => {
    try {
        mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        })
        console.log('MongoDB Connected')
    }
    catch(err) {
        console.error(err.msg)
        process.exit(1)
    }
    
}

module.exports = connectDB