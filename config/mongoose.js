//mongoose library
const mongoose = require('mongoose');

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





// const DB = 'mongodb+srv://sjasvin9493:Jasvin@1993@cluster0.6e9yy.mongodb.net/project_issue_tracker_db?retryWrites=true&w=majority';


//connect to the todo_list database
// mongoose.connect(DB,
//     { 
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//         // useCreateIndex: true,
//         // useFindAndModify: false 
//     }).then(()=>{
//         console.log(" Mongoose is connected");
//     }).catch((err)=>console.log(" Mongoose is not connected"));