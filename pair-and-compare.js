/* Set the value of param1A to "cat"
Set the value of param1B to "cat"
Set the value of param2A to 6
Set the value of param2B to "6"

If (param1A is equal to "cat" AND param1B is equal to "cat") OR (param2A is equal to 6 AND param2B is equal to "6"), then
  Print "true" to the console
Otherwise,
  Print "false" to the console
End If
*/
  let param1A = "cat";
  let param1B = "cat";
  let param2A = 6;
  let param2B = "6";

  if ((param1A === "cat" && param1B === "cat") || (param2A === 6 && param2B === "6")) {
    console.log(true);
  } else {
    console.log(false);
  }

