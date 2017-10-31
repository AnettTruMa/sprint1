/* Create a web that asks  to the credit number card by using the "promt ()"
method and confirm its validity according to the Luhn algorithm. */

//ask to the user his/her credit number card by using a "prompt ()"//
var creditCardNum = parseInt (prompt ("Introduzca el número de su tarjeta de crédito"));
function isValidCard (arr) {

//validando que introduzcan los 16 digitos
  if (arr.length !== 16) {
    alert ("Introduzca los datos completos");
    //invirtiendo el orden del array
} else {
  var newArr = [ ];
  var size = arr.length;
  var lastPosition = size - 1;
  for (var i = lastPosition; i>= 0; i--) {
    newArr.push (arr [i]);
    if (i % 2 === 1){
      arr = arr * 2;
    }
    if (arr > 9) {
      arr = arr -9;
    }
  }
return newArr;
}

}
console.log (isValidCard);
