//Creación de las variables a usar
let offset = document.getElementById("textValueBean");
let string = document.getElementById("textCipher");
let botonCifrar = document.getElementById("cifrar");
let botonDescifrar = document.getElementById("descifrar");
let outputTextC = document.getElementById("newTextCiphered");
let outputTextD = document.getElementById("newTextDeciphered");
let stringD = document.getElementById("newTextCiphered");

//Llama al objeto window cipher encode y envía los valores de offset y string
botonCifrar.addEventListener("click", event => {
  let encodeValueBean = window.cipher.encode(
    offset.value,
    string.value
  );
  //Muestra el retorno de cipher encode
  console.log(encodeValueBean);
  outputTextC.defaultValue = encodeValueBean;
});

//Llama al objeto window cipher decode y envía los valores de offset y string
botonDescifrar.addEventListener("click", event => {
  let decodeValueBean = window.cipher.decode(
    offset.value,
    stringD.value
  );
  //Muestra el retorno de cipher decode
  console.log(decodeValueBean);
  outputTextD.defaultValue = decodeValueBean;
});
