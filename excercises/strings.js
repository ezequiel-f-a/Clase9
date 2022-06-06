console.log("STRINGS")
//----------------------------------------------------------------
var f_upper = function(str){
    return str.toUpperCase()
}
var f_sub = function(str, start, length){
    return str.substring(start, length);
}
var f_sub2 = function(str, endlength){
    return str.substring(str.length - endlength)
}
var f_format = function(str){
    return str.substring(0, 1).toUpperCase() + str.substring(1,str.length).toLowerCase()
}
var f_indexof = function(str, substring){
    return str.indexOf(substring)
}
//----------------------------------------------------------------
str = "anita lava la tina"
console.log(f_upper(str))
//----------------------------------------------------------------
console.log(f_sub(str,0,5))
//----------------------------------------------------------------
console.log(f_sub2(str,3))
//----------------------------------------------------------------
console.log(f_format(str))
//----------------------------------------------------------------
console.log("Espacio en índice "+f_indexof(str," "))
//----------------------------------------------------------------
str2 = "planeamiento estratégico"
p1 = f_sub(str2,0,f_indexof(str2," "))
p2 = f_sub(str2,f_indexof(str2," ") + 1,str2.length)
console.log(f_format(p1)+" "+f_format(p2))