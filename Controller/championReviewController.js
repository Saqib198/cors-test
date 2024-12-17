const { query } = require('express');
const ChampionReviews = require('../Model/championReviews');


exports.getChampionReviews= async (req, res) => {
    try {
      const ChampionReview = await ChampionReviews.find();
      res.status(200).json({
        status: 'success',
        results: ChampionReview.length,
        data: ChampionReview,
      });
    } catch (err) {
      console.log(`Error Found: ${err}`);
      res.status(400).json({
        status: 'Fail',
        message: 'ChampionReviews not Found.',
      });
    }
  };


  exports.createChampionReview = async (req, res) => {
    try {
      const ChampionReview= await ChampionReviews.create(req.body);
      res.status(200).json({
        status: 'Success',
        message: 'Champion Review Posted Successfully',
        data: ChampionReview,
      });
    } catch (err) {
      console.log(`Error Found: ${err}`);
      res.status(400).json({
        status: 'Fail',
        message: 'Unable to Post Champion Review.',
        error: `${err.name} ${err.message}`,
      });
    }
  };


  exports.updateChampionReview = async (req, res) => {
    try {
      const ChampionReview = await ChampionReviews.findOneAndUpdate({
        "_id":req.params.id},
        req.body,
        {
          new: true,
          runValidators: true,
        }).exec();
      if (!ChampionReview) {
        res.status(400).json({
          status: 'Fail',
          message: `ChampionReview with id ${req.params.id} not Found`,
        });
      }
      else {
        res.status(201).json({
          status: 'success',
          message: 'ChampionReview Successfully Updated',
          data: ChampionReview
        });
      }
  
    } catch (err) {
      console.log(`Error Found: ${err}`);
      res.status(400).json({
        status: 'Fail',
        message: 'Failed To Find ChampionReview.',
        error: `${err.name} ${err.message}`,
      });
    }
  };



  exports.deleteChampionReview= async (req, res) => {
    try {
      const ChampionReview = await ChampionReviews.findOneAndDelete({
        "_id": req.params.id,
      }).exec();
      
      if (!ChampionReview) {
        return res.status(404).json({
          status: 'Fail',
          message: `ChampionReview with id ${req.params.id} not found`,
        });
      }
      
      res.status(200).json({
        status: 'success',
        message: `ChampionReview with id ${req.params.id} deleted successfully`,
      });
      
    } catch (err) {
      console.log(`Error Found: ${err}`);
      res.status(500).json({
        status: 'Fail',
        message: `Failed to ChampionReview bubble with id ${req.params.id}`,
        error: `${err.name} ${err.message}`,
      });
    }
  };



  
  