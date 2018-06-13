let offset = document.getElementById("textValueBean");
let string = document.getElementById("textCipher");
let botonCifrar = document.getElementById("cifrar");
let botonDescifrar = document.getElementById("descifrar");
let outputTextC = document.getElementById("newTextCiphered");
let outputTextD = document.getElementById("newTextDeciphered");
let stringD = document.getElementById("newTextCiphered");

botonCifrar.addEventListener("click", event => {
  let encodeValueBean = window.cipher.encode(
    offset.value,
    string.value
  );
  console.log(encodeValueBean);
  outputTextC.defaultValue = encodeValueBean;

});

botonDescifrar.addEventListener("click", event => {
  let decodeValueBean = window.cipher.decode(
    offset.value,
    stringD.value
  );
  console.log(decodeValueBean);
  outputTextD.defaultValue = decodeValueBean;
});
