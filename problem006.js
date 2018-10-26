function divisible() {
	var a=true;
    for (var i=1; i < arguments.length; i++) {
        if(arguments[0]%arguments[i]!=0){
			a = false;
		}
    }
	return a;
}