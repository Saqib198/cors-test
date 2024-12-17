const express = require('express');
const championReviewController = require('./../Controller/championReviewController');
const router = express.Router();


router
  .route('/championReviews')
  .get(championReviewController.getChampionReviews)
  .post(championReviewController.createChampionReview);


router
  .route('/project')
  .get(championReviewController.getChampionReviews)
  .post(championReviewController.createChampionReview);


router
  .route('/championReviews/:id')
  .patch(championReviewController.updateChampionReview)
  .delete(championReviewController.deleteChampionReview);

module.exports = router;