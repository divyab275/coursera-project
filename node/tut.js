function order(ordernum){
	console.log(ordernum+' received');
	execute(function(ordernum){
		console.log(ordernum+" delivered");
	});
}
function execute(callback){
	setTimeout(callback,5000);
}
order(1);
order(2);
order(3);
order(4);