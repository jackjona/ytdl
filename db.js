const mongoose = require('mongoose');

mongoose
  .connect(
    'mongodb+srv://jackson:ZJO81kJxmyIGX83k@cluster0.r8oyk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .catch((e) => {
    console.error('Connection error', e.message);
  });

const db = mongoose.connection;

module.exports = db;
