var test = require('tape');
var sigmafy = require('./index');

test('It returns a function', function(assert){
  assert.equal(typeof(sigmafy),"function","module returns a function");
  assert.end();
});

test('It returns yields true summations', function(assert){
  assert.equal(sigmafy(1,4,"n+2"),18,"test summation #1");
  assert.equal(sigmafy(2,3,"n*5"),25,"test summation #2");
  assert.equal(sigmafy(3,10,"n-3"),28,"test summation #2");
  assert.end();
});

test('It thorws errors properly', function(assert){
  assert.throws(()=>sigmafy(),"when no arguments are given");
  assert.throws(()=>sigmafy(1,4,"n+2","too many"),"when too many arguments are given");
  assert.throws(()=>sigmafy(null,4,"n+2"),"when the first argument is missing");
  assert.throws(()=>sigmafy(1,null,"n+2"),"when the second argument is missing");
  assert.throws(()=>sigmafy(1,4,null),"when the third argument is missing");
  assert.end();
});
