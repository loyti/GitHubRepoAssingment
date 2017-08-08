var _ = {
  map: function(arr, func) {
    for (let i = 0; i < arr.length; i++){
       arr[i] = func(arr[i]);
    }
    return arr;
     //code here;
  },

  reduce: function(arr, func, memo) {
    if(!memo){
      memo = arr[0];
    }
    for (let i = 0; i < arr.length; i++){
      memo = func(arr[i], memo);
    }
    return memo;
    // code here;
  },

  find: function(arr, func) {
    for (let i = 0; i < arr.length; i++){
      if (func(arr[i])){
        return arr[i];
      }
    };
  // code here;
  },

  filter: function(arr, func){
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
      if (func(arr[i])){
        newArr.push(arr[i]);
      }
    }
    return newArr;
  },

  reject: function() {
    for (let i = 0; i < arr.length; i++){
      var newArr = [];
      if (!func(arr[i])){
        newArr.push(arr[i]);
      }
    }
    return newArr;
  }
  // code here;
}
// you just created a library with 5 methods!

var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ if (num % 2 == 0){return num;};});
console.log("Evens: " + evens); // if things are working right, this will return [2,4,6].


var arr = [1,2,3,4,5]

console.log("Initial Array: " + arr);
console.log("map: " + _.map(arr, function func(x){return x * 3;}));

console.log("filter: " + _.filter(arr, function func(x){return x > 20;}));

console.log("reduce: " + _.reduce(arr, function func(x, memo){return x + memo;}));

console.log("find: " + _.find(arr, function func(x){return x == 15;}));
// note: we used named functions for clarity above, but we can also pass anonymous functions as the second parameter:

console.log(arr);
