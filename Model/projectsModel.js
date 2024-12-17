const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  id: String,
  title: String,
  description: String,
  containerBackground: String,
  image: String,
  projectData: {
    heroGradient: String,
    projectHeroImage: String,
    description: String,
    loomLink: String,
    projectReview: {
      id: String,
      designation: String,
      title: String,
      ratings: String,
      image: String,
      country: {
        id: String,
        title: String
      },
      date: String,
      lastLine: String,
      description: String
    },
    problemData: {
      imageDirection: String,
      image: String,
      title: String,
      description: String
    },
      projectReveiw: {
        id: String,
        designation: String,
        title: String,
        ratings: String,
        image: String,
        country: {
          id: String,
          title: String,
        },
        date:String,
        lastLine: String,

        description:String,
      },
    processData: {
      imageDirection: String,
      image: String,
      title: String,
      description: String
    },
    solutionData: {
      imageDirection: String,
      image: String,
      title: String,
      description: String
    },
    features: {
      title: String,
      description: String,
      featuresStepsData: [
        {
          id: String,
          step: String,
          title: String,
          description: String
        }
      ]
    },
    technologies: {
      title: String,
      description: String,
      technologiesData: [
        {
          id: String,
          title: String,
          image: String
        }
      ]
    }
  }
}, { timestamps: true });

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
