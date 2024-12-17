const mongoose = require('mongoose');

const championReviewSchema = mongoose.Schema({
    id: {
      type: Number,
      required: true
    },
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    ratings: {
        type: Number,
        required: true
    },
    country: {
        id: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        }
    },
    date: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
}, { timestamps: true });

const ChampionReview = mongoose.model('ChampionReviews', championReviewSchema);
module.exports = ChampionReview;
