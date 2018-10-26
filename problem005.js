function strangeSum(a, b) {
	if(!isNaN(a) && !isNaN(b)){
	if(a===b){
		return 3*(a+b);
	}
	else {
		return a+b;
	}
	}
	else return null;
}