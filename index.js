module.exports =
  function(nStart,nEnd,formula){
    // Parameter Validation
    if (arguments.length === 0){
      throw "No arguments given";
    }
    if(!arguments[0]){
      throw "Missing first (start) argument";
    } if(!arguments[1]){
      throw "Missing second (end) argument";
    } if(!arguments[2]){
      throw "Missing formula argument";
    }
    if (arguments.length > 3){
      throw "Too many arguments";
    }
  	var sum = 0;
  	for (n = nStart; n <= nEnd; n++){
  		sum += eval(formula);
  		//console.log("form: ", eval(formula));
  		//console.log("n: ",n);
  	}
  	//console.log (sum);
  	return sum;
  }
