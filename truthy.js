/* Set the value of value1 to "I am a string"
Set the value of value2 to false
Set the value of value3 to null
Set the value of value4 to undefined
Set the value of value5 to 0
Set the value of value6 to an empty string

If value1 is truthy, then
  Print "true" to the console
Otherwise,
  Print "${value1} is falsy" to the console
End If

If value2 is truthy, then
  Print "true" to the console
Otherwise,
  Print "The boolean value false is falsy" to the console
End If

If value3 is truthy, then
  Print "true" to the console
Otherwise,
  Print "The null value is falsy" to the console
End If

If value4 is truthy, then
  Print "true" to the console
Otherwise,
  Print "undefined is falsy" to the console
End If

If value5 is truthy, then
  Print "true" to the console
Otherwise,
  Print "the number 0 is falsy (the only falsy number)" to the console
End If

If value6 is truthy, then
  Print "true" to the console
Otherwise,
  Print "The empty string is falsy (the only falsy string)" to the console
End If
Print a value to console to test conditions 
*/
  const value1 = "I am a string";
  const value2 = false;
  const value3 = null;
  const value4 = undefined;
  const value5 = 0;
  const value6 = "";

  if (value1) {
    console.log(true);
  } else {
    console.log(`${value1} is falsy`);
  }

  if (value2) {
    console.log(true);
  } else {
    console.log("The boolean value false is falsy");
  }

  if (value3) {
    console.log(true);
  } else {
    console.log("The null value is falsy");
  }

  if (value4) {
    console.log(true);
  } else {
    console.log("undefined is falsy");
  }

  if (value5) {
    console.log(true);
  } else {
    console.log("the number 0 is falsy (the only falsy number)");
  }

  if (value6) {
    console.log(true);
  } else {
    console.log("The empty string is falsy (the only falsy string)");
  }

console.log(value2);