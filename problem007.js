function findMax() {
	var max=arguments[0];
	for (var i=1; i<=arguments.length; i++){
		if(max<=arguments[i]){
			max=arguments[i];
		}
	}
	return max;
}