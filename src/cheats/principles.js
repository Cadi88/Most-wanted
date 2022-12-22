// const "respeta el scope & inmodificable"
// var "no respeta el scope y puede ser acc desde fuera"
// let "var que respeta el scope y puede cambiar de valor"

//TIPOS DE VARIABLE
const abc = "pepito";
const numbertype = 2;
const Myboolean = false;
const myArray = ["a1", "b2", "c3"];
const Myobject = {
  name: "Omar",//PARES PROPIEDAD Y VALOR
  age: 46,
};

null
undefined

//OPERADORES LOGICOS
a == b; // comparación IGUAL QUE
a != b; //a diferentye de b DIFERENTE QUE
a || b; //a ó b, uno debe ser verdadero OR
a && b; //a y b deben ser vedadedos AND

//CONDICIONALES
if (a == b) {
  console.log("a is equal to b");
} else {
  console.log("a is not equal to b");
}

//ITERACIÓN (declaracion, condicion e incremento)
for (var i = 0; i <= 10; i++) {
  console.log(i);
} //i=i+1

//FUNCTIONS (argumentos no props *son de react) las funciones siempre llevan parentesis
function myFunction() {
  console.log("HELLO WORLD");
} //FUNCION REGULA CON SU PROPIO AMBITO SCOPE

//
const myFunct = (a,b) => console.log("HELLO PIG");
; // FUNCION AAROW FUNCTION -  FUNCION ANONIMA CON SCOPE ABIERTO NO RESTRINGE USO DE VARIABLES

//parametro: es lo que le voy a pasar a la funct
//argumento: es lo q espera la funct