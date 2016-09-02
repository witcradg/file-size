'use strict';
if (process.argv[2] && process.argv[2].toLowerCase() === 'debug') {
    global.debug = true;
    console.log("debugging");
}

var express = require('express'),
    routes = require('./app/routes/index.js');
var app = express();
var router = express.Router();


    app.use('/controllers', express.static(process.cwd() + '/app/controllers'));
    app.use('/public', express.static(process.cwd() + '/public'));
    app.use("/",router);
    routes(router);
    
    app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
        console.log("server listening on port " + process.env.PORT + " at IP " + process.env.IP);
});
