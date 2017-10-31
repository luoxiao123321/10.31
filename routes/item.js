var express = require('express');
var router = express.Router();
var mysal=require('mysql')
var connection=mysal.createPool({
	host:'localhost',
	user:'root',
	password:'123456'
})
/* GET home page. */
router.post('/list', function(req, res, next) {
	res.header('Access-Control-Allow-Origin','*')
	connection.query('SELECT id,title,date FROM jianzhu.ji',function(err,rows,fields){
//		console.log(err)
		res.send(rows)
	})
});
router.post('/detail', function(req, res, next) {
	res.header('Access-Control-Allow-Origin','*')
	var cc=req.body.id;
	connection.query('SELECT * FROM jianzhu.ji WHERE id='+cc,function(err,rows,fields){
//		console.log(err)
		res.send(rows)
	})
});
module.exports = router;
