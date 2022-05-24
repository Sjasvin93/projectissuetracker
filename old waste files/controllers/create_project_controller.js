const Project = require('../models/project');

module.exports.create_project = function(req,res){
    return res.render('create-project',{
        title: "Create Project"
    });
}

module.exports.create = function(req,res){
    console.log(req.body);
     Project.create({
    //   name: req.body.name,
    //   description: req.body.description,
    //   author: req.body.author
    },function(err, project){
        if(err){
            console.log("error in creating the project");
            return res.redirect('back');            
        }
        return res.redirect('/');
    });       
     
}