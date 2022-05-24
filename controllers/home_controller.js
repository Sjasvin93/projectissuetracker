const project = require('../models/project');
const path = require('path');

module.exports.home = async function(req,res){
    try{
        //fetching all the details of all the projects
        let project_list = await project.find({});
        return res.render('home', {
            title: "Home",
            project_list: project_list
        });
    }catch(err){
        console.log('Error', err);
        return;
    }  
}