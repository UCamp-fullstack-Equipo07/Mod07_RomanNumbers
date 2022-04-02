/*Crear una funcion que se llame romanNumbers el cual tendra un argumento donde le pasaras un numero entero y este devolvera el numero en numeros 
romanosromanNumbers(5) // VromanNumbers(50) // L*/
function romanize (ArabicNumber) {
    let romanNumbers={
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    }
    let result='';
    for (let item of Object.keys(romanNumbers)){
        let q=Math.floor(ArabicNumber/romanNumbers[item]);
        ArabicNumber-=q*romanNumbers[item];
        result+=item.repeat(q);
    }
    console.log(result);
  }