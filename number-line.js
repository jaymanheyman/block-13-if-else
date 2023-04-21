/* Set a value of num1 
Set a value of num2 
Calculate the sum of num1 and num2 and store the result in the variable sum

If sum is less than -1000, then
  Print "sum is less than -1000" to the console
Otherwise, if sum is less than 0, then
  Print "sum is a negative number" to the console
Otherwise, if sum is equal to 0, then
  Print "sum is equal to 0" to the console
Otherwise, if sum is greater than 0 AND sum is less than 100, then
  Print "sum is larger than 0" to the console
Otherwise, (i.e. if sum is greater than or equal to 100) then
  Print "sum is greater than 100" to the console
End If
*/
  const num1 = 99;
  const num2 = -2;
  const sum = num1 + num2;

  if (sum < -1000) {
    console.log(sum + " is less than -1000");
  } else if (sum < 0) {
    console.log(sum + " is a negative number");
  } else if (sum === 0) {
    console.log(sum + " is equal to 0");
  } else if (sum > 0 && sum < 100) {
    console.log(sum + " is larger than 0");
  } else {
    console.log(sum + " is greater than 100");
  }

