console.log("hello world");

//airthmetic operation
let a=2;
let b=3;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);

//unary operator 
let n1=5;
console.log(n1++);  //5 print but value becomes 6
//n1 use than increment 

console.log(++n1);   //7 
//n1 plus than use 

let n2=5;   //5 
console.log(n2--); //5 print but value becomes 4 
//use n2 than minus 

console.log(--n2); //3
//first minus and than use 

a+=a;
a-=a;

//comparision

console.log('5'==5);  //loose equailty just compare value
console.log('5'===5); //strict equality compare value and datatype 

let num1=5;
let num2=10;
console.log(num1>num2);
console.log(num1<num2);
console.log(num1>=num2);
console.log(num1<=num2);
console.log(num1==num2);
console.log(num1===num2);
console.log(num1!=num2);
console.log(num1!==num2);

let age=23;
age>=18?console.log("eligible"):console.log("not");

//logical 
let ans=(true && true && true );
console.log(ans);

let res=(true || false || false);
console.log(res);

let javab=!(true);
console.log(javab);

//bitwise
//and & --> *
//or | --> +
//~ --> not 