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

const expressLayouts = require('express-ejs-layouts');

//Including the sass middleware
const sassMiddleware = require('node-sass-middleware');

//accessing the project schema file
const projectList = require('./models/project.js');

//accessing the create Issue schema file
const createIssue = require('./models/create_issue');
const { type } = require('express/lib/response');

app.use(expressLayouts);

//use express router
app.use('/', require('./routes'));

//Setting up the ejs view engine
app.set('view engine', 'ejs');

//joining the path of current directory with views
app.set('views', path.join(__dirname,'views'));

app.use(express.urlencoded());

app.use(express.static('assets'));
// app.use(express.static(asset_path));

// app.use(sassMiddleware({
//     src: path.join(__dirname, asset_path, 'scss'),
//     dest: path.join(__dirname, asset_path, 'css'),
//     debug: true,
//     outputStyle: 'extended',
//     prefix: '/css'
// }));

//making the app listener for the server
app.listen(port , function(err){
    if(err){
        console.log(`Error in starting the server: ${err}`);
    }
    console.log(`Server is up and running on port: ${port}`);
});

//handling the post request to create the projects
app.post('/projects-data/create-new-project', function(req,res){
    projectList.create({
        name: req.body.name,
        description: req.body.description,
        author: req.body.author
    }, function(err, newProjectList){
        if(err){
            console.log('Error in creating the list');
            return;
        }
        return res.redirect('/');
    });
});


//Get request to fetch the project details
app.get('/project-details/:id', async function(req,res){
    let bug_list = await createIssue.find({project: req.params.id});
    projectList.findById(req.params.id, function(err, newprojects){
        if(err){
            console.log("Error in fetching the List");
        }
        return res.render('project_details',
            {
              title : "Project Details",
              Project_details : newprojects,
              bug_list : bug_list
            }
        );
    });
});

//creating the reported bug
app.post('/bug/create-project-bug', function(req,res){
    createIssue.create({
        title: req.body.bugTitle,
        description: req.body.bugDescription,
        label: req.body.bugLabel,
        author: req.body.bugAuthor,
        project: req.body.projectId
    }, function(err, newBug){
        if(err){
            console.log('Error in creating the list');
            return;
        }
        console.log("SUccessfull Insertion", newBug);
        return res.redirect('/');
    });
});

app.post('/project-bug-action', async function(req,res){
    const value = req.body.bugSearch;  
    if(value == "labelsearch"){
        var id = [];
        var results = [];
        id = req.body.bugLabelList;
        console.log("length= ",typeof(id));
        if(typeof(id) != "string"){
            for(var i = 0; i < id.length; i++){
                let arr =await createIssue.find({label: id[i]});
                for(let issue of arr){
                    results.push(issue);
                }
            }            
        }else{
            let arr =await createIssue.find({label: id});
            console.log(arr);
            for(let issue of arr){
                results.push(issue);
            }
        }
        console.log(results);
        return res.render('bugs',
            {
              title : "Bug Details",
              bug_list : results
            }
        );                
    }else if(value == "authsearch"){
        const authorValue = req.body.authorName;
        const results=  await createIssue.find({author: authorValue});
        return res.render('bugs',
            {
              title : "Bug Details",
              bug_list : results
            }
        );
    }else{
        const inputAutValue = req.body.author;
        const despValue = req.body.description;
        const results=  await createIssue.find({author: inputAutValue, description: despValue});
        if(results){
            return res.render('bugs',
                {
                title : "Bug Details",
                bug_list : results
                }
            );
        }else{
            
        }
        
    }
});