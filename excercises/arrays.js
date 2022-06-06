console.log("ARRAYS");
//----------------------------------------------------------------
base_arr = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "OCtubre", "Noviembre", "Diciembre"]
arr = base_arr.slice(0)
console.log(arr[4]+", "+arr[10])
//----------------------------------------------------------------
arr.sort()
console.log(arr)
//----------------------------------------------------------------
elem_ini = "Mes inicio"
elem_fin = "Mes fin"
arr.unshift(elem_ini);
arr.push(elem_fin);
console.log(arr);
//----------------------------------------------------------------
arr.shift(elem_ini);
arr.pop(elem_fin);
console.log(arr);
//----------------------------------------------------------------
arr.reverse();
console.log(arr);
//----------------------------------------------------------------
joined = arr.join("-");
console.log(joined);
//----------------------------------------------------------------
sliced = base_arr.slice(5-1,11);
console.log(sliced);