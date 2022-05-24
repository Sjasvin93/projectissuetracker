//including the express library
const express = require('express');

//initializing the express
const app = express();

//setting the port number
const port = 8000;

//setting the path for the views 'ejs'
const path = require('path');

//setting up the database
const db = require('./config/mongoose.js') ;

//accessing the project schema file
const projectList = require('./models/project.js');

//accessing the project bug/issue schema file
const createIssue = require('./models/createIssue.js');


//Setting up the ejs view engine
app.set('view engine', 'ejs');

//joining the path of current directory with views
app.set('views', path.join(__dirname,'views'));

//use express router
app.use('/', require('./routes'));

app.use(express.urlencoded());

app.use(express.static('assets'));

//making the app listener for the server
app.listen(port , function(err){
    if(err){
        console.log(`Error in starting the server: ${err}`);
    }
    console.log(`Server is up and running on port: ${port}`);
});

//handling get request from the server
// app.get('/', function(req, res){

//     projectList.find({}, function(err, projectlist){
//         if(err){
//             console.log("Error in fetching the List");
//         }
//         return res.render('home',
//      {
//         title : "Project List",
//         project_list : projectlist
//     }
//     );
//     });
    
// });

//handling the post request to create the projects
// app.post('/create-project', function(req,res){
//     projectList.create({
//         name: req.body.name,
//         description: req.body.description,
//         author: req.body.author
//     }, function(err, newProjectList){
//         if(err){
//             console.log('Error in creating the list');
//             return;
//         }
//         return res.redirect('back');
//     });
// });