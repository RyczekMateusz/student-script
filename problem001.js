function triangleArea(a, b, c) {
	var p =0;
	var pole=0;
	if(a+b<=c || a+c<=b || c+b<=a){
		return -1;
	}
	else {
	if((a>0 && b>0 && c>0)){
	p=(a+b+c)/2;
	pole=Math.sqrt(p*(p-a)*(p-b)*(p-c));
	pole.toFixed(2);
	return pole;
	}
	else return -1;
	}
}