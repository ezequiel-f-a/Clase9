console.log("IF ELSE");
//----------------------------------------------------------------
n = Math.random()
if(n > 0.5) console.log("Greater than 0,5");
else console.log("Lower than or equal to 0,5");
//----------------------------------------------------------------
age = Math.round(Math.random() * 100);
if(age < 2) console.log("Bebe");
else if(age >= 2 && age <= 12) console.log("Niño");
else if(age > 13 && age <= 19) console.log("Adolescente");
else if(age > 19 && age <= 30) console.log("Joven");
else if(age > 30 && age <= 60) console.log("Adulto");
else if(age > 60 && age <= 75) console.log("Adulto Mayor");
else if(age > 75) console.log("Anciano");