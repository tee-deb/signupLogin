const mongoose = require('mongoose');

 exports.connectDB = (url)=> {
    return mongoose.connect(url);
};