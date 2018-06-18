window.cipher = {
  offset: 33,
  string: "",
  //entra a la función del cifrado
  encode: (offset, string) => {
    let arrayTextToCipher = [];
    let arrayTextCiphered = [];
    let textCiphered= "";
      //se hace un ciclo que me permita recorrer el string
      for(let i = 0; i<string.length; i++) {
        //se evaluan los espacios vacios, si se encuentra uno, no se cifrara
        if (string.charCodeAt([i]) === 32) {
          arrayTextToCipher.push(32);
          textCiphered += String.fromCharCode(string.charCodeAt([i]));
        }
        /*Se validan las letras minúsculas y se agregan al arreglo arrayTextToCipher las letras en código ascii
        arrayTextCiphered contendrá el nuevo número ya cifrado con la fórmula
        textCiphered almacenará la cadena convertida de un número (arrayTextCiphered) a letra
        */
        else if (string.charCodeAt([i]) > 96 && string.charCodeAt([i]) < 123) {
          arrayTextToCipher.push(string.charCodeAt([i]));
          arrayTextCiphered = ((((arrayTextToCipher[i] - 97 ) + parseInt(offset)) % 26)  + 97);
          textCiphered += String.fromCharCode(arrayTextCiphered);
        }
        /*Se validan las letras minúsculas y se agregan al arreglo arrayTextToCipher las letras en código ascii
        arrayTextCiphered contendrá el nuevo número ya cifrado con la fórmula
        textCiphered almacenará la cadena convertida de un número (arrayTextCiphered) a letra
        */
        else {
          arrayTextToCipher.push(string.charCodeAt([i]));
          arrayTextCiphered = ((((arrayTextToCipher[i] - 65 ) + parseInt(offset)) % 26)  + 65);
          textCiphered += String.fromCharCode(arrayTextCiphered);
        }
        }
        //se regresa la cadena para que pueda ser usada en index.js
        return textCiphered;
  },
  decode: (offset, string) => {
    let arrayTextToDecipher = [];
    let arrayTextDeciphered = [];
    let textDeciphered= "";
      //se hace un ciclo que me permita recorrer el string
      for(let i = 0; i<string.length; i++) {
        //se evaluan los espacios vacios, si se encuentra uno, no se cifrara
        if (string.charCodeAt([i]) === 32) {
          arrayTextToDecipher.push(32);
          textDeciphered += String.fromCharCode(string.charCodeAt([i]));
        }
        /*Se validan las letras minúsculas y se agregan al arreglo arrayTextToDecipher las letras en código ascii
        arrayTextDeciphered contendrá el nuevo número ya cifrado con la fórmula
        textDeciphered almacenará la cadena convertida de un número (arrayTextDeciphered) a letra
        */
        else if (string.charCodeAt([i]) >= 97 && string.charCodeAt([i]) <= 122) {
          arrayTextToDecipher.push(string.charCodeAt([i]));
          arrayTextDeciphered = ((((arrayTextToDecipher[i] + 111 ) - parseInt(offset)) % 26)  + 97);
          textDeciphered += String.fromCharCode(arrayTextDeciphered);
        }
        /*Se validan las letras minúsculas y se agregan al arreglo arrayTextToDecipher las letras en código ascii
        arrayTextDeciphered contendrá el nuevo número ya cifrado con la fórmula
        textDeciphered almacenará la cadena convertida de un número (arrayTextDeciphered) a letra
        */
        else {
          arrayTextToDecipher.push(string.charCodeAt([i]));
          arrayTextDeciphered = ((((arrayTextToDecipher[i] + 65 ) - parseInt(offset)) % 26)  + 65);
          textDeciphered += String.fromCharCode(arrayTextDeciphered);
        }
      }
      //se regresa la cadena para que pueda ser usada en index.js
      return textDeciphered;
  },

  createCipherWithOffset: (offset, string) => {
    return cifrado ={
      encode: (offset, string),
      decode: (offset, string)
    };
  }
};
