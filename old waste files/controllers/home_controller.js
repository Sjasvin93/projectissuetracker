const project = require('../models/project');

module.exports.home = async function(req,res){
    try{
        //fetching all the details of all the projects
        let project_list = await project.find({});
        console.log("I am alive");
        console.log(project_list);
        return res.render('home', {
            title: "Home",
            project_list: project_list
        });

    }catch(err){
        console.log('Error', err);
        return;
    }  
}

    