function fibonacci() {
  var prev = 0;
  var curr = 1;
  function incrimentor() {
    console.log(curr);
    var temp = prev;
    prev = curr;
    curr = curr + temp;
  }
  return incrimentor
}

var fibCounter = fibonacci();

fibCounter();
fibCounter();
fibCounter();
fibCounter();
fibCounter();
fibCounter();
