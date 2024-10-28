console.log("First Question: ")
const num1 = prompt("Enter the first value: ");
const num2 = prompt("Enter the second value: ");


console.log(`The Addition of ${num1} and ${num2} = `,(+num1) + (+num2))
console.log(`The subtraction of ${num1} and ${num2} = `,num1 - num2)
console.log(`The multiplication of ${num1} and ${num2} = `,num1 * num2)
console.log((num2 == 0) ? "Not possible to perform division because of second value could not be zero":`The Division of ${num1} and ${num2} = `,num1 / num2)

console.log("Second Question")

const fname = prompt("enter the frst name")
const lname = prompt("enter the last name")
const age = +(prompt('enter the age'))

console.log(fname + " " + lname)
console.log((age >= 18) ? 'Eligible to cast the Vote' : 'not Eligible')
console.log(((fname + lname).length > 10) ? 'Greater than 10' : 'not greater than 10')


console.log("Third Question")
const num= + prompt("enter the value: ")
const mod_value= + prompt("enter the Modulo division value: ")
const power= + prompt("enter the power value: ")


Mod = num % mod_value
Expo = num ** power

console.log(Mod)
console.log(Expo)

if(num > 50){
    console.log('Greater than 50')
}
else{
    console.log("Less than 50")
}

console.log((num & 0) ? 'Even' : 'odd')

console.log("Fourth Question")
const val1= + prompt("enter first the value: ")
const val2= + prompt("enter second the value: ")
const val3= + prompt("enter third the value: ")

const Sum = val1 + val2
console.log(Sum)
console.log(Sum > val3)
console.log(Sum >50 && val3 < 100)

console.log("Fifth Question")
const fn = prompt("enter the first name")
const ln = prompt("enter the last name")
number = +(prompt('enter the number'))

console.log(fn + " " + ln)
console.log(typeof number)
console.log(number += 10 )

console.log("Sixth Question")

Total = + prompt('enter the total amount');
discount_percentage = + prompt('enter the discount percentage');
discount = Total * (discount_percentage/100);

finalPrice = Total - discount
console.log((Total > 150) ? finalPrice : Total )

console.log("Seventh Question")

original_sentence = window.prompt("Enter the sentence")

splitString = original_sentence.split(" ")
reverseString = splitString.reverse()
finalString = reverseString.join(" ")
length = finalString.length
console.log(`Reversed String is: ${finalString}`+"\n" +`Length of the sentence is greater than 15 is: ${length > 15}`)

if(original_sentence.length > 20 || length > 20) {

    console.log("Sentence is longer than 20 characters")
}

console.log("Eight Question")
const number1 = window.prompt("Enter the first number: ");
const number2 = window.prompt("Enter the second number: ");


const andResult = number1 & number2;
const orResult = number1 | number2;
const xorResult = number1 ^ number2;

console.log(andResult);
console.log(orResult);
console.log(xorResult);


const shiftedNum = number1 << 2;
console.log(shiftedNum);

console.log((number1 == shiftedNum) ? `equal to ${shiftedNum}` : `not equal to ${shiftedNum}`);
console.log((number1 > shiftedNum) ? `greater than ${shiftedNum}` : `less than or equal to ${shiftedNum}`);


console.log("Ninth Question")

const person_age = +prompt("Enter the Age: ");
const person_sal = +prompt("Enter the Salary: ");
const person_Cscore = +prompt("Enter the Credit Score: ");

console.log((person_age > 21 && person_sal > 30000 && person_Cscore > 720) ? "Approved for Loan" : "Denied for Loan");

console.log("Tenth Question")

const sub1= +prompt("Enter the subject1 marks: ");
const sub2= +prompt("Enter the subject2 marks: ");
const sub3= +prompt("Enter the subject3 marks: ");

const Total_marks = sub1 + sub2 + sub3

console.log((Total_marks > 60) ? "Passed" : "Failed ");

const grace = Total_marks + 5
if (Total_marks < 60){
    console.log(grace)
console.log((grace > 60) ? "Passed" : "Failed ");
}
