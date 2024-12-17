const Projects = require('../Model/projectsModel.js');

exports.getAllProjects = async (req, res) => {
  try {
    const projects = await Projects.find();
    res.status(200).json({
      status: 'success',
      results: projects.length,
      data:projects
      
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: 'Error getting projects',
      error: err
    });
  }
};

exports.getProjectById = async (req, res) => {
  try {
    const project = await Projects.findById(req.params.id);
    if (!project) {
      return res.status(404).json({
        status: 'fail',
        message: 'Project not found'
      });
    }
    res.status(200).json({
      status: 'success',
      data: {
        project
      }
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: 'Error getting project',
      error: err
    });
  }
};

exports.createProject = async (req, res) => {
  try {
    const newProject = await Projects.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        project: newProject
      }
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: 'Error creating project',
      error: err
    });
  }
};

exports.updateProject = async (req, res) => {
  try {
    const updatedProject = await Projects.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!updatedProject) {
      return res.status(404).json({
        status: 'fail',
        message: 'Project not found'
      });
    }
    res.status(200).json({
      status: 'success',
      data: {
        project: updatedProject
      }
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: 'Error updating project',
      error: err
    });
  }
};

exports.deleteProject = async (req, res) => {
  try {
    const deletedProject = await Projects.findByIdAndDelete(req.params.id);
    if (!deletedProject) {
      return res.status(404).json({
        status: 'fail',
        message: 'Project not found'
      });
    }
    res.status(204).json({
      status: 'success',
      data: null
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: 'Error deleting project',
      error: err
    });
  }
};
