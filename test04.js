function acc() {
	var sum = 0;
	for(var i=0;i<arguments.length;i++){
		sum += arguments[i];		
	}
	console.log('Sum : ' + sum);
}

acc();
acc(1,2,3,4,5);
console.log(eval('3+4'));
