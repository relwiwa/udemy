// Exercise 1 - Maybe use an Arrow Function?
var double = (value: number) => value * 2;
console.log(double(10));
    
// Exercise 2 - If only we could provide some default values...
var greet = (name: string = 'Max'): void => {
    console.log("Hello, " + name);
};
greet();
greet("Anna");
    
// Exercise 3 - Isn't there a shorter way to get all these Values?
var numbers: number[] = [-3, 33, 38, 5];
console.log(Math.min(...numbers));
    
// Exercise 4 - I have to think about Exercise 3 ...
var newArray: number[] = [55, 20];
newArray.push(...numbers);
console.log(newArray);
    
// Exercise 5 - That's a well-constructed array.
var testResults: number[] = [3.89, 2.99, 1.38];
var [result1, result2, result3] = testResults;
console.log(result1, result2, result3);
    
// Exercise 6 - And a well-constructed object!
var scientist
    : {firstName: string, experience: number}
    = {firstName: "Will", experience: 12};
var {firstName, experience} = scientist;
console.log(firstName, experience);
