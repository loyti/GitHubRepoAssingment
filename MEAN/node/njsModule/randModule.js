module.exports = {
    greet: function(){
        console.log("we are now using a module!");
    },
    addi: function(num1, num2){
        console.log("the sum is:", num1 + num2);
    },
    mult: function (num1, num2){
        console.log("the total is:", num1 * num2);
    },
    divi: function (num1, num2){
        console.log("the total is:", num1 / num2);
    },
    square: function (num){
        console.log("the square is:", num * num);
    },
    randNum: function (num){
        randNumber = Math.floor((Math.random() * num) + 1);
        console.log("the random number is:", randNumber);
    }
}
