console.log("FOR")
//----------------------------------------------------------------
var f_format = function(str){
    return str.substring(0, 1).toUpperCase() + str.substring(1,str.length)
}
//----------------------------------------------------------------
arr=["ana","pedro","jorge","tomAs","lucia"]
for (i in arr) console.log(arr[i])
//----------------------------------------------------------------
for (i in arr) arr[i] = f_format(arr[i])
console.log(arr)
//----------------------------------------------------------------
sentence = ""
for(i in arr) sentence += arr[i]
console.log(sentence)
//----------------------------------------------------------------
arr2 = []
for(i=0;i<10;i++) arr2[i] = i
console.log(arr2)