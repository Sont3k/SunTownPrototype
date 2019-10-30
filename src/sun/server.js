'use strict';

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const compression = require('compression');
const path = require('path');
const http = require('http');
const https = require('https');
const fs = require('fs');

// Utils
const metaFormatter = require('./utils/metaFormatter');

const config = process.env.DEV ? require('./config/config_DEV.js') : require('./config');

// Required routes
const news = require('./routes/news');
const gallery = require('./routes/gallery');
const user = require('./routes/user');
const partners = require('./routes/partners');
const seoRoute = require('./routes/seoRoute.js');
const mailRoute = require('./routes/mailRoute');
const subscriptionRoute = require('./routes/subscriptionRoute');
const videoList = require('./routes/videoList');

const app = express();

// Database configuration parameters
const server = config.server;
const database = config.database;
const username = config.username;
const pass = config.password;

// Resolve deprecation warnings
const mongoOptions = {
  useNewUrlParser: true,
  useCreateIndex: true
};

mongoose.connect(`mongodb://${server}/${database}`, mongoOptions, err => { if(err) console.log(err); console.log('connected')});

// Necessary middleware
app.use(compression());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: '50mb' }));

// Middleware for proper redirecting
app.use((req, res, next) => {
  console.log(`${new Date().toString()} => ${req.originalUrl}`);
  next();
});

// Static files
app.use('/', express.static('sitemap'));
app.use('/news-images', express.static('news-images'));
app.use('/gallery-images', express.static('gallery-images'));
app.use('/partners-media', express.static('partners-media'));
app.use('/video-files', express.static('video-files'));

//app.use(express.static(path.join(__dirname, '.well-known/acme-challenge')));
// Routes
app.use('/api', seoRoute);
app.use('/api', news);
app.use('/api', gallery);
app.use('/api', user);
app.use('/api', partners);
app.use('/api', mailRoute);
app.use('/api', subscriptionRoute);
app.use('/api', videoList);

app.use(express.static(__dirname + '/build1'));


https.createServer({
 key: fs.readFileSync('../../../../sslcert/server.key'),
 cert: fs.readFileSync('../../../../sslcert/server.cert')
}, app)
 .listen(3003, '167.71.2.38', ()=> console.log('started'));

//app.listen(3003, () => console.log('listening'))


// Plain http-server to listen to unsecure requests and redirect them

http.createServer(app, function(req, res) {
 res.writeHead(301, { "Location": "https://suntown-ukraine.com" + req.url });
 res.end();
})
//.listen(3001);

