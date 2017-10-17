var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};

var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));
var result1 = add(number1, number2);
var result2 = subtract(number1, number2);
var result3 = multiply(number1, number2);
var result4 = divide(number1, number2);

alert("the addition is:"+result1);
alert("the subtraction is: "+result2);
alert("the multiplication is: "+result3);
alert("the division is :"+result4);


/*alert(add(number1, number2));

alert(subtract(number1, number2));

alert(multiply(number1, number2));

alert(divide(number1, number2));*/
