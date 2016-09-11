var sigmafy = require('./index');

console.log(sigmafy(1,4,"n+2"));
console.log(sigmafy(2,3,"n*5"));
console.log(sigmafy(3,10,"n-3"));

var sig = sigmafy(3,10,"n-3");
console.log(sig+100);
