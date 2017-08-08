var x = [];
x.push('coding');
x.push('dojo');
x.push('rocks');
x.pop();

console.log(x[x.length -1])

const y = [];

y.push(88);

console.log(y);

var z = [9, 10, 6, 5, -1, 20, 13, 2];

for (var i = 0; i < z.length - 1; i++){
  console.log(z[i]);
};

var names = ['Kadie', 'Joe', 'Fritz', 'Pierre', 'Alphonso'];

for (var j = 0; j < names.length; j++){
  if (names[j].length == 5){
    console.log(names[j]);
  };
};

function yell(string1){
  string1 = "checkmate";
  var STUC = string1.toUpperCase();
  console.log(STUC);
}
yell();
