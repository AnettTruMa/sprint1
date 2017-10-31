/* Create a web that asks  to the user an string by using the "promt ()"
method and return the same string according to the cesar encrypted . */
prompt ("¿Cuál es tu nombre?");
var string = [""];
for (var i = 0; i<= string.length; i+= 1) {
  var x = string.charCodeAt(i);
  var y = (x - 65 + 33) % 26 + 65;
  string [i] = String.fromCharCode(y);

}

console.log(string);
