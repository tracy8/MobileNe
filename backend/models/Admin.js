const mongoose = require('mongoose');

const AdminSchema = mongoose.Schema({
  names: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: Date,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  nationalID:{
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  created_on: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model('Admin', AdminSchema);
