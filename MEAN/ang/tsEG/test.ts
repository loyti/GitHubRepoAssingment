// TypeScript
// Superset of JS
// JS code is also valid in .ts files
// can be strictly typed


let myNum: Number = 5;
let myString: String = "Hello Universe";
let myArr = [1,2,3,4];
var myObj: object = { name:'Bill'};
var anythingVariable: any = "Hey";
var anythingVariable: any = "25";
let arrayOne: boolean[] = [true, false, true, true];
let arrayTwo: any[] = [1, 'abc', true, 2];
let myObj2: object = { x: 5, y: 10 };
// object constructor
let MyNode = (function () {
    function MyNode(val) {
        this.val = 0;
        this.val = val;
    }
    MyNode.prototype.doSomething = function () {
        this._priv = 10;
    };
    return MyNode;
}());
let myNodeInstance = new MyNode(1);
console.log(myNodeInstance.val);
function myFunction() {
    console.log("Hello World");
    return;
}
function sendingErrors() {
	throw new Error('Error message');
}
