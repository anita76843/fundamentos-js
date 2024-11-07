document.getElementById("demo").innerHTML = "hello javascript";
document.getElementById("demo").style.fontSize = "35px";


/*salida */

window.alert(5+2);
console.log(6+2);


/*declaracion*/

let a,b,c;
a= 5;
b= 6;
c= a + b;
window.alert(c);
document.getElementById("demo").innerHTML= c;


/*variable*/

let p,q,r;
p =5;
q=7;
const m=8;
r = p+q+m;
document.getElementById("demo1").innerHTML =r;


/*tipo de dato*/

let num = 24;//entero
let name = " ana maria";//cadena
let km =14.5;//decimal
let isColombiano = true;//boleano
let obj = {firstname: "ana",lastname: "perez"};//objeto

let y= 17 + " poo ";
let unir = "17" + "poo";
window.alert(y);
window.alert(unir);

/*funcion*/
function myfunction(){
    document.getElementById("demo2").innerHTML = "new paragraph";
}