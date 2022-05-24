//mongoose library
const mongoose = require('mongoose');

//connect to the todo_list database
mongoose.connect('mongodb://localhost/project_issue_tracker_db');

//acquire the connection to check if its successful or not
const db = mongoose.connection;

// to check for error
db.on('error', console.error.bind(console, 'error connection to db'));

//after successful connection
db.once('open', function(){
    console.log('DB is connected successfully');
});

module.exports = db;