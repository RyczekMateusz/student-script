function euler(a){
	var sum=0;
	for(i=0; i<a; i++){
		if(i%3==0 || i%5==0){
			sum+=i;
        }
	}
	return sum;
}