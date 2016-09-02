'use strict';

var request = require('request');

var log = function (args) {
	var str = '';
		for (var i = 0; i < arguments.length; i++) {
			str += arguments[i] + ' ';    	
	}
	if (global.debug) {
		console.log(str);
	}
}

function logicHandler() {  
	this.main = function(req, res) {
		log("logicHandler main called");
		var searchString = req.params.value;
  		if (searchString == 'favicon.ico') {
  			log('skipping favicon');
  		} else {
			res.send("logicHandler main WIP");
 		}
	}
}


module.exports = logicHandler;


