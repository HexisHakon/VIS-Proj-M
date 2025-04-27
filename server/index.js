const express = require('express');
const cors = require('cors');
const DASHBOARD = require("./routes/dashboard");
const MATCHES = require("./routes/api/matches")
const CHAMPIONS = require("./routes/api/champions")
const VOICEDATA = require("./routes/api/voiceData")
const STOPWORDS = require("./routes/api/stopwords")
const SENTIMENTS = require("./routes/api/sentiments")

const APP = express();

APP.use(express.json({limit: "30mb", extended: true}));
APP.use(express.urlencoded({limit: "30mb", extended: true}));

APP.listen(5500, console.log('API erreichbar unter http://localhost:' + 5500));

// Route Middlewares
APP.use('/', DASHBOARD);
APP.use('/routes/api/matches', cors(), MATCHES);
APP.use('/routes/api/champions', cors(), CHAMPIONS);
APP.use('/routes/api/voicedata', cors(), VOICEDATA);
APP.use('/routes/api/stopwords', cors(), STOPWORDS)
APP.use('/routes/api/sentiments', cors(), SENTIMENTS)