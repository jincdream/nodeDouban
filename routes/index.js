
/*
 * GET home page.
 */
var my = require('../utill.js');
var $ = require('jQuery');
function getData(movie,dom){
	var t = /\((\d*)\)/g;
	movie.tag = [];
	movie.name = $("span[property='v:itemreviewed']",dom).text();
	$("div.tags-body",dom).children().each(function (){
		var text = $(this).text().replace(t,"");
		movie.tag.push(text);
	});
	movie.im_id = $("#info",dom).find("a").last().text();
	console.log(movie);
}
exports.index = function (req,res) {
	var url = 'http://movie.douban.com/subject/11529526',
		movie = {};
	console.log(url);
	my.get(url,function(content,status){
		console.log('status:=' + status);
		res.send(content);
		getData(movie,content);
	});
}