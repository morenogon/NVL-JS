    var fraseUser = prompt("Escribe una frase o palabra","oso");
    frasePalindromo(fraseUser);
    
    function frasePalindromo(fraseUser){
      // Paso la fraseUser a minusculas y quito espacios
      fraseUser=fraseUser.toLowerCase().replace(/\s/g,"");

      fraserReverse=fraseUser.split("").reverse().toString();

      for (var i = 0; i < ((fraserReverse.length)-1); i++) {
        fraserReverse=fraserReverse.replace(",","");
      };

      if(fraseUser==fraserReverse){
        resultado="es un Palindromo";
      }
      else{
        resultado="no es un Palindromo";
      }
      console.log("Tu frase "+resultado);
    }
    
