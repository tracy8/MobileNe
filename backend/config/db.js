const mongoose = require('mongoose');
const MONGO_URI = 'mongodb+srv://tracy:tracymongo@cluster0.jvibay1.mongodb.net/vote?retryWrites=true&w=majority';

exports.connect = () => {
  mongoose
    .connect(MONGO_URI)
    .then(() => console.log('Connected successfully to db'))
    .catch((err) => console.log(err));
};
