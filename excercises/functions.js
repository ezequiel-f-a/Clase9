console.log("FUNCIONES")
//----------------------------------------------------------------
suma = function(a,b){
    return a+b
}
console.log(suma(2,3))
//----------------------------------------------------------------
suma2 = function(a,b){
    if(isNaN(a) || isNaN(b)){
        console.log("Uno de los parametros tiene error")
        return NaN
    }
    else return parseInt(a)+parseInt(b)
}
console.log(suma2(4,"x"))
console.log(suma2("3",5))
//----------------------------------------------------------------
validateInteger = function(a){
return Number.isInteger(a)
}
console.log(validateInteger(4))
console.log(validateInteger(5.3))
//----------------------------------------------------------------
suma3 = function(a,b){
    if(!Number.isInteger(a) || !Number.isInteger(b)){
        console.log("Alguno de los valores no es entero")
        return suma2(Math.round(a), Math.round(b))
    }
    else{
        return suma2(a,b);
    }
}
console.log(suma3(2,1))
console.log(suma3(3.3,10))
//----------------------------------------------------------------
suma3 = function(a,b){
    if(!validateInteger(a) || !validateInteger(b)){
        console.log("Alguno de los valores no es entero")
        return suma2(Math.round(a), Math.round(b))
    }
    else{
        return suma2(a,b);
    }
}
console.log(suma3(2,1))
console.log(suma3(3.3,10))