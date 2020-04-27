//#region Methods
function calcularNumerosPrimos(n){
    var numero = 1;
    var array_numerosPrimos = [];
    while(array_numerosPrimos.length !== n){
        if(esPrimo(numero)){
            array_numerosPrimos.push(numero);
        }
        numero++;
    }
    console.log(array_numerosPrimos);
}
function esPrimo(numero){
    if (numero == 0 || numero == 1 || numero == 4) return false;
	for (var x = 2; x < numero / 2; x++) {
		if (numero % x == 0) return false;
    }
    return true;
}
//#endregion

calcularNumerosPrimos(5);
