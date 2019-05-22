function factorial(number){
	if(isNaN(number)){
		return "Bad bad parameter was passed";
	}
	else if (number<=0){
		return 1;
	}
	else{
		return(number*factorial(number-1));
	}
}