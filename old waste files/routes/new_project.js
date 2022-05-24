const express = require('express');
const router = express.Router();

const createProjectController = require('../controllers/create_project_controller');

router.get('/', createProjectController.create_project);

router.post('/project-details', createProjectController.create);

module.exports = router;