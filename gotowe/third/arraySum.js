function arraySum(array){
	var sum=0;
	var pom=0;
	for(i=0; i<array.length; i++){
		pom=array[i];
		if(Array.isArray(pom)){
			array = Array.prototype.concat.apply([], array);
		}
	}
	for(i=0; i<array.length; i++){
		sum+=array[i];
	}
	return array;
}