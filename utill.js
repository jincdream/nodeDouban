var Utill = function (){};
var request = require('request'),
	http = require('http');
Utill.prototype.get = function(url,callback) {
	request(url,function(err,res,body){
		if(!err && res.statusCode == 200){
			callback(body,res.statusCode);
		}else{
			throw new Error('cant request!');
		}
	})
};
module.exports = new Utill();