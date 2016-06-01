var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var todos = [{
	id : 1,
	description : 'attend lecture',
	completed : false
},{
	id : 2,
	description : 'go to office',
	completed : false
},{
	id : 3,
	description : 'completed to do item',
	completed : true
}];

app.get('/todos',function(req,res){

	res.json(todos);
});

app.get('/todos/:id',function(req,res){
	var todoId = parseInt(req.params.id,10);
	//res.send('Requestion for todo with id '+req.params.id);
	var matchedTodo;
	todos.forEach(function(todo){
		//res.send(todo);
		if(todoId===todo.id){
			matchedTodo = todo;
			//res.json(matchedTodo);
		}
	});

	if(matchedTodo){
			res.json(matchedTodo);
		}else{
			res.status(404).send();
		}
});

app.get('/',function(req,res){
	res.send('Todo API root');
});

app.listen(PORT,function(){
	console.log('Express listening on port '+PORT+" !!");
});