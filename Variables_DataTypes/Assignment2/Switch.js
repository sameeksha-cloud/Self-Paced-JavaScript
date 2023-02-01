/*Write a function using switch case to find the grade of a student based
on marks obtained
a. “S grade” if the marks are between 90 and 100.
b. “A grade” if the marks are between 80 and 90.
c. “B grade” if the marks are between 70 and 80.
d. “C grade” if the marks are between 60 and 70.
e. “D grade” if the marks are between 50 and 60.
f. “E grade” if the marks are between 40 and 50.
g. “Student has failed” if the marks are between 0 and 40.
h. Else output “Invalid marks”.

*/


var num = 45
var result = ""
switch(true){
    case(num>=90):
        result = 'S grade'
        break;
    
    case(num>=80 && num<90):
        result = 'A grade'
        break;

    case(num>=70 && num<80):
        result = 'B grade'
        break;
    
    case(num>=60 && num<70):
        result = 'C grade'
        break;

    case(num>=50 && num<60):
        result = 'D grade'
        break;

    case(num>=40 && num<50):
        result = 'E grade'
        break;

    case(num<40):
        result = 'Student has failed.'
        break;
    
    default:
        result = 'Invalid Marks'
        break;
        
}
console.log(result) 

