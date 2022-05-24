const Project = require('../models/project');
const Bugs = require('../models/create_issue');

module.exports.newProject = function(req,res){
    return res.render('new_project',{
        title: "Create Project"
    });
}

module.exports.ReportProjectBug = async function(req,res){
    let proj_det = await Project.findById(req.params.id);
    console.log(proj_det);
    return res.render('create_issue',{
        title: "Report Bug",
        project: proj_det
        });
   
}

module.exports.GetProjectDetails = async function(req,res){
    let bug_details = await Bugs.findById(req.params.id);
    return res.render('bug_details',{
        title: "BUG DETAILS",
        bug_details: bug_details
        });
   
}

// module.exports.ProjectBugsActions = function(req,res){
//     const value = req.body.bugSearch;
//     // const labelValue = req.body.bugLabelList;
//     // const authorValue = req.body.authorName;
//     // const inputAutValue = req.body.author;
//     // const despValue = req.body.description;

//     if(value == "labelsearch"){
        
//     }else if(value == "authsearch"){
//         const authorValue = req.body.authorName;
//         const results=  Bugs.find(authorValue);
//         return res.render('bug_details',{
//             title: "BUG DETAILS",
//             bug_details: results
//         });
//     }else{

//     }
// }

// module.exports.ReportProjectBug = function(req,res){
//     Project.findById(req.params.id, function(err, newprojects){
//         if(err){
//             console.log("Error in fetching the List");
//         }
//         return res.render('create_issue',{
//             title: "Report Bug",
//             project: newprojects
//         });
//     });
   
// }

// module.exports.createNewProject = function(req,res){
//      Project.create(req.body, function(err, newProjectList){
//           if(err){
//             console.log('Error in creating the list');
//             return;
//           }
//         console.log(newProjectList);
//         return res.redirect('back');
//     });         
// }