const bodyParser = require('body-parser');

//对数据进行解析
const urlencodeParser = bodyParser.urlencoded({extended:false});

let data = [
	{item: "这是第一条数据。"},
	{item: "这是第二条数据。"}
];
module.exports = function (app) { 
	//获取数据 
	app.get('/todo',(req,res) => {
		res.render('todo',{todos: data});
	});
	//传递数据
	app.post('/todo',urlencodeParser,(req,res) => {
		data.push(req.body);
	});
	//删除数据
	app.delete('/todo/:item',(req,res) => {
		// console.log(req.params.item);
		data = data.filter(function (todo) {  
			return req.params.item !== todo.item;
		});
		res.json(data);
	});
}