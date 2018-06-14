window.cipher = {
  offset: 33,
  string: "",
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

        else if (string.charCodeAt([i]) > 96 && string.charCodeAt([i]) < 123) {
          arrayTextToCipher.push(string.charCodeAt([i]));
          arrayTextCiphered = ((((arrayTextToCipher[i] - 97 ) + parseInt(offset)) % 26)  + 97);
          textCiphered += String.fromCharCode(arrayTextCiphered);
        }
        //en caso contrario se realiza la codificación
        else {
          arrayTextToCipher.push(string.charCodeAt([i]));
          arrayTextCiphered = ((((arrayTextToCipher[i] - 65 ) + parseInt(offset)) % 26)  + 65);
          textCiphered += String.fromCharCode(arrayTextCiphered);
        }
        }
      //se muestra el texto cifrado en el input correspondiente
        // outputTextC.defaultValue = textCiphered;
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

        else if (string.charCodeAt([i]) >= 97 && string.charCodeAt([i]) <= 122) {
          arrayTextToDecipher.push(string.charCodeAt([i]));
          arrayTextDeciphered = ((((arrayTextToDecipher[i] + 111 ) - parseInt(offset)) % 26)  + 97);
          textDeciphered += String.fromCharCode(arrayTextDeciphered);
        }
        //en caso contrario se realiza la codificación
        else {
          arrayTextToDecipher.push(string.charCodeAt([i]));
          arrayTextDeciphered = ((((arrayTextToDecipher[i] + 65 ) - parseInt(offset)) % 26)  + 65);
          textDeciphered += String.fromCharCode(arrayTextDeciphered);
        }
      }
        return textDeciphered;
  },

  createCipherWithOffset: (offset, string) => {
    return cifrado ={
      encode: (offset, string),
      decode: (offset, string)
    };
  }
};
