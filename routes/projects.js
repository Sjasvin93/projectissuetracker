const express = require('express');

const router = express.Router();

const projectController = require('../controllers/project_controller');

router.get('/new-project', projectController.newProject);

//router.post('/create-new-project', projectController.createNewProject);

router.get('/report-project-bug/:id', projectController.ReportProjectBug);

router.get('/bug-details/:id', projectController.GetProjectDetails);

// router.post('/project-bug-action', projectController.ProjectBugsActions);

module.exports = router;