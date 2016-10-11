var numberIsPrime = function(n){
	var sqrtVal = Math.floor(Math.sqrt(n));
	for (i = sqrtVal ; i >= 2 ; i--){
		if(n % i === 0){
			return false;
		}
	}
	return true;
};

var findBiggestSoFar = function(number){
	//console.log("Running function for n", number);
	var sqrtVal = Math.floor(Math.sqrt(number));
	var divBy2 = Math.floor(number / 2);
	var arrayofPrimes = [];
	var starting = sqrtVal;
	var ending = 2;
	var found = false;
	for(j = starting ; j >= ending; j--){
		if(numberIsPrime(j)){
			arrayofPrimes.push(j);
		}
	}
	for(i = 0 ; i < arrayofPrimes.length ; i++){
		if(number % arrayofPrimes[i] === 0){
			biggestSoFar = arrayofPrimes[i];
			found = true;
			break;
		}
	}
	if(found){
		return biggestSoFar;
	}
	else{
		return 0;
	}
}

//var number = 6008514;
var number = 600851475143;
var newNumber = number;
var oldBig = findBiggestSoFar(number);
//console.log("oldBig is", oldBig);
var myBiggest = oldBig;
if(oldBig === 0){
	myBiggest = number;
}
while(oldBig != 0){
	newNumber = newNumber / oldBig;
	oldBig = findBiggestSoFar(newNumber);
	//console.log("oldBig is", oldBig);
	if(oldBig === 0){
		if(myBiggest < newNumber){
			myBiggest = newNumber;
		}
	}
	else{
		if(myBiggest < oldBig){
			myBiggest = oldBig;
		}
	}
}
alert(myBiggest);

/*
if(found){
	console.log("Found! Biggest prime factor is", biggestSoFar);
}
else{
	console.log("Not found! Biggest prime factor is 600851475143");
}*/