//Utilizo condiciones para ejecutar alerts según la respuesta del usuario:

let numero1 = parseInt(prompt("Escribí un número:"));
console.log (numero1); 

if (numero1 <= 100 && !80 && !50 ) {
    alert("Has escrito un número igual o menor a 100 😎");
}     

else if (numero1 === 80) {    
    alert("Has escrito un número igual a 80");

}
else if (numero1 === 50) {    
    alert("Has escrito un número igual a 50");

}
else {
    alert("Has escrito un número mayor a 100");
}

//Utilizo prompts para pedir un número y si esta entre 10 y 50 muestro alert:
let solicitoNumero = parseFloat(prompt("Escriba un número:"));
if (solicitoNumero >=10 && solicitoNumero <=50) { 
    alert("Tu número ronda entre los 10 y 50");
}
else {    
    console.log ("Se eligió el número: ",solicitoNumero);
} 