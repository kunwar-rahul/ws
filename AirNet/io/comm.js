var io = require('socket.io');
var users = [];

var comm = function(server){
	io = io.listen(server); 

	var session = io.of('/session');
	var tasks = io.of('/tasks');
	var location = io.of('/location');

	session.on('connection', function(socket){
		socket.on('login', function(data){
			users[socket.id] = JSON.parse(data);
			// users[socket.id].socket = socket;
			// users[socket.id].socket.send('hurr');
			console.log(users);
		});

		socket.on('logout', function(data){
			delete users[socket.id];
			console.log(users);
		});

		socket.on('disconnect', function(d){
			delete users[socket.id];
			console.log(users);
		});

		socket.on('add user', function(data){
			console.log(data);
		});
	});

	tasks.on('connection', function(socket){
		socket.on('allTasks', function(data){
			
		});

		socket.on('taskStarted', function(data){

		});

		socket.on('taskCompleted', function(data){

		});

		socket.on('taskStatusChanged', function(data){

		});
	});

	location.on('connection', function(socket){
		socket.on('locationChanged', function(data){

		});
	});
};

module.exports = comm;
