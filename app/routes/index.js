'use strict';

var LogicHandler = require(process.cwd() + '/app/controllers/logicHandler.server.js'); 

module.exports = function (router) {
	var logicHandler = new LogicHandler();

    router.get("/",function(req,res){
    	//home page with usage instructions
		res.sendFile(process.cwd() + '/public/index.html');
    });
}
