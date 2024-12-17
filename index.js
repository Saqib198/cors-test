// imports
var cors = require('cors')
const express = require('express')
const app = express()
var path = require('path');
const dotenv = require('dotenv')
const mongoose = require('mongoose')





// to access public folder
app.use(express.static(path.join(__dirname, 'public')));

// to use cors
app.use(cors())

// .env config
dotenv.config()


//middleware for parsing body
app.use(express.json());





// Database connection

const DB = process.env.DATABASE_LOCAL;

mongoose.connect(DB)
  .then(() => console.log('DB Connection Successfull 💾'))
  .catch(err => console.log(err.message))


// route imports
const championReviewsRouter = require('./Route/championReviewsRoute.js');
const projectsRouter = require('./Route/ProjectsRoutes.js');


// routes
app.use('/', championReviewsRouter);
app.use('/', projectsRouter);




app.get('/', (req, res) => {
  const html = `
      <html>
        <head>
        <title> Abdullah Portfolio Backend</title>
        <link rel="icon" href="https://firebasestorage.googleapis.com/v0/b/g2p-flaky-test.appspot.com/o/images%2Fic_launcher.png?alt=media&token=ca047c0a-0474-4fe5-a109-48b8ac2ab650" type="image/png">
          <style>
            body {
              background-color: #f1f1f1;
              color: #333;
              font-family: Arial, sans-serif;
              text-align: center;
              margin-top: 50px;
            }
            h1 {
              font-size: 40px;
              margin-bottom: 20px;
            }
          </style>
        </head>
        <body>
          <h1>Welcome to Backend.....</h1>
          <p>Thank you for visiting our site!</p>
        </body>
      </html>
    `;
  res.send(html);
});


// server

app.listen((process.env.PORT || 8081), () => {
  console.log(`Example app listening on http://localhost:${process.env.PORT}`)
});

