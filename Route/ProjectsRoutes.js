const express = require('express');
const projectController = require('./../Controller/projectsController.js');
const router = express.Router();

router
  .route('/projects')
  .get(projectController.getAllProjects)
  .post(projectController.createProject);

router
  .route('/projects/:id')
  .get(projectController.getProjectById)
  .patch(projectController.updateProject)
  .delete(projectController.deleteProject);

module.exports = router;
