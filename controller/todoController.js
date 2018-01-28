const bodyParser = require('body-parser');

//对数据进行解析
const urlencodeParser = bodyParser.urlencoded({extended:false});

let data = {
	todo: [
		{item: "这是第一条数据。"},
		{item: "这是第二条数据。"}
	],
	completed: [
		{item: '这是完成后的第一条数据。'},
		{item: '这是完成后的第二条数据。'}
	]
};

module.exports = function (app) { 
	//获取数据 
	app.get('/todo',(req,res) => {
		res.render('todo',{todos: data.todo,completed: data.completed});
	});
	//传递数据
	app.post('/todo',urlencodeParser,(req,res) => {
		const flag = req.body.flag;
		if(flag === '1'){
			data.todo.push(req.body);
		}else{
			data.completed.push(req.body);
		}
	});
	//删除数据
	app.delete('/todo/:item',(req,res) => {
		// console.log(req.params.item);
		data.todo = data.todo.filter(function (todo) {  
			return req.params.item !== todo.item;
		});
		data.completed = data.completed.filter((completed) => {
			return req.params.item !== completed.item;
		});
		res.json(data);
	});
}