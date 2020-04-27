// #region Variables
var num;
var array_impares = [];
var array_pares = [];
//#endregion

// #region Methods
// Calcular 50 números aleatorios y detectar si son pares o impares
function calcularNumeroAleatorio(){
    for(var i = 0; i < 50; i++){ 
        num = Math.floor((Math.random() * 100) + 1);
        console.log(num);
        if(esPar(num)){ // si es par
            console.log(esPar(num));
            array_pares.push(num);
        }else{ // si es impar
            console.log(esPar(num));
            array_impares.push(num);
        }
    }
}
// Comprobar si el número es par o impar
function esPar(num){
    var esPar = num % 2 == 0 ? true : false;  
    return esPar;
}
//#endregion

calcularNumeroAleatorio();
