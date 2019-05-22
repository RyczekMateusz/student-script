function arraySum(array){
	var pom=0;
	for(i=0; i<array.length; i++){
		pom=array[i];
		if(Array.isArray(pom)){
			array = Array.prototype.concat.apply([], array);
		}
	}
	return array;
}