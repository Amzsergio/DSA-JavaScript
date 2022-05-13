/*
 #1 Two Sum 
A. 3/29/22 My solution only works for some arrays, I've not found the logic problem. 
B. 3/29/22 Optimal solution here: https://www.youtube.com/watch?v=IufUNRCQ37E&list=PLY5pAT_51eGyo4ixvdZgzY57N0_R1QMtb&ab_channel=ThinkFWD 
*/

//let nums = [2, 2, 5, 3, 4, 4] ** 6
//target = 8
// let newArr = [4,]; 1
// let acc = 4
// i = 1
//lookFor = t - acc = 9
// j = 5
//k = 5

// let nums = [2, 4, 3, 4] 
// let target = 8
// var twoSum = function(nums, target) {
//   let newArr = [];
//   let acc = nums[0];
//   for (let i=0; newArr.length < 2; i++){
//     let lookFor = target - acc;
//     for(let j=0; j<nums.length; j++){
//       if(lookFor === nums[j] && newArr.length < 2){
//         newArr.push(j)
//         for(let k=0; k<nums.length; k++){
//           if(acc === nums[k] && k !== j){
//             newArr.push(k)
//           }
//         }
//       }
//     }
//     if (acc <= target){
//       acc += nums[i+1];
//     }else if(acc > target){
//       acc = acc - target;
//         }
//     }
//     return newArr;
// };

/*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*/

/*
#200 Number of Islands
https://www.youtube.com/watch?v=r260LwU67Uo&list=PLY5pAT_51eGyo4ixvdZgzY57N0_R1QMtb&index=2&ab_channel=ThinkFWD
A. study how to go over a 2d grid. 

 */

/*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*/

/* // CODEWARS
// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.
// Don't forget the space after the closing parentheses!


let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

function createPhoneNumber(numbers){
    let newArr = []
    if(numbers.length < 5) return `-${numbers.join('')}`
    else if(numbers.length < 10 && numbers.length > 4){
        for(let i=0; i<3; i++){
            let aux = numbers.shift();
            newArr.push(aux);
        }
        return newArr.join('') + createPhoneNumber(numbers);
    }else if(numbers.length === 10){
        let newArr = []
        for(let i=0; i<3; i++){
            let aux = numbers.shift();
            newArr.push(aux);
        }
        return `(${newArr.join('')}) ${createPhoneNumber(numbers)}`
    }
  }

  createPhoneNumber(numbers) */


/*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*/

/* // CODEWARS Does my number look big in this?

// A Narcissistic Number is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).
// For example, take 153 (3 digits), which is narcisstic:
//     1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
// and 1652 (4 digits), which isn't:
//     1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938
// The Challenge:
// Your code must return true or false (not 'true' and 'false') depending upon whether the given number is a Narcissistic number in base 10. This may be True and False in your language, e.g. PHP.
// Error checking for text strings or other invalid inputs is not required, only valid positive non-zero integers will be passed into the function.

// i = 0 
//acc = 0 + 
//arrValue.length = 3

function narcissistic(value) {
    // Code me to return true or false
      let arrValue = String(value).split('').map((value) => {
          return Number(value)
      })
      let acc = 0;
      for(let i=0; i<arrValue.length; i++){
          acc += Math.pow(arrValue[i], arrValue.length)
          console.log(acc)
      }
      if(value === acc){
        return true
      }else {
          return false
      }
  } */

  /*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*/
  
  /*   //    CODEWARS Sum of Digits / Digital Root
  
//   Digital root is the recursive sum of all the digits in a number.
// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

function digital_root(n) {
    
    let arrN = ('' + n).split('')
    if (arrN.length === 1) return n;
    if(arrN.length > 1) {
        let sum = arrN.reduce((acc, d) => {
            return Number(d) + acc
        }, 0)
        let arrSum = ('' + sum).split('')
        if (arrSum.length > 1){
            return sum = digital_root(sum)
        }
        return sum
    }
}


console.log(digital_root(493193)) */

/*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*/
//CODEwARS Recursive Replication

// You need to design a recursive function called replicate which will receive arguments times and number.
// The function should return an array containing repetitions of the number argument. For instance, replicate(3, 5) should return [5,5,5]. If the times argument is negative, return an empty array.
// As tempting as it may seem, do not use loops to solve this problem.
/* 
function replicate(times, number, newArr=[]) {
    if(times === newArr.length || times < 0) return newArr;
    newArr.push(number)
    return replicate(times, number, newArr)
} */

/*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*/
/* EJERCICIO 1
*
* Implementar de forma RECURSIVA el método Newton-Raphson. Este método es utilizado para aproximar
* la raiz cuadrada de un número entero positivo.
*
* Parametros:
*   count: cantidad de veces que se requiere iterar
*   x: valor entero positivo al que se le quiere calcular la raiz cuadrada
*
* Formula:
*   y = (valorAnterior + (x/valorAnterior))/2
*   valorAnterior(0) = x/2
* 
* Salida:
*   > -1 si no es invocado con un x positivo (Ejemplo: -4)
*   > -1 si no es invocado con un x entero   (Ejemplo: 4.3)
*   > -1 si no es invocado con un x positivo y entero (Ejemplo: -4.3)
*   > El valor obtenido luego de haber aplicado la formula count veces a x
* 
* Ejemplos:
*   x = 20
*   count = 4
*   valorAnterior(0) = 10
*   y(1) = (10 + (20/10))/2 = 6
  *   valorAnterior = 6
  *   y(2) = (6 + (20/6))/2 = 4.666
  *   valorAnterior = 4.666
  *   y(3) = (4.666 + (20/4.666))/2 = 4.476
  *   valorAnterior = 4.476
  *   y(4) = (4.476+ (20/4.476))/2 = 4.472
*
*   x = 45
*   count = 4
*   valorAnterior(0) = 22.5
*   y(1) = (22.5 + (45/22.5))/2 = 12.25
*   valorAnterior = 12.25
*   y(2) = (12.25 + (45/12.25))/2 = 7.96
*   valorAnterior = 7.96
*   y(3) = (7.96 + (45/7.96))/2 = 6.80
*   valorAnterior = 6.80
*   y(4) = (6.80 + (45/6.80))/2 = 6.70
*
* */

/*
function newtonRaphson(x, count, valorAnterior=x/2){
  
  let y = (valorAnterior + (x/(valorAnterior)))/2;
  console.log(y)
  
  if( x < 0 || !Number.isInteger(x)) return -1
  if(count === 0) return y
    if(count > 0){
      
      count--
      y = newtonRaphson(x, count, y);
    }
    return y
  }
  console.log(newtonRaphson(45,4))
  */
 /*  function newtonRaphson(x, count, valorAnterior = x/2){
  
    let result = (valorAnterior + (x/valorAnterior))/2
    
    if(count === 0){
      return result;
    }
    if(x<0 || !Number.isInteger(x)){
      return -1
    }
    count--
    return newtonRaphson(x, count, result)
  } */
  /*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*/
  
  /*
  * EJERCICIO 2
  *
  * A partir de una formula matematica, encontrar y determinar si los parentesis de la misma se encuentran balanceados.
  * Decimos que los parentesis de una formula son balanceados si y solo si por cada ( hay un ), se debe respetar
  * el orden indicado, es decir, primero ( y luego ), )( no es una combinacion valida.
  *
  * Parametros:
  *   exp: string que describe la expresion matematica a analizar
  *
  * Salida:
  *   > 0: si estan balanceados
  *   > Cualquier otro numero: si no estan balanceados
  *
  * Ejemplos:
  
  *   exp: "(5+6)-(t+2*9-(a+7)/4+(8+5*2))" ---> 0
  
  *   exp: "70 + (9/x - 2))" -->[(,),(,)] -->[]= 
  [),(,(,),)] -->[0] = 
  
  para ( asignar 1
    para ) asignar -1
    ) condicional, si le antecede un 1 en cualquier pos                                     
    
    *   exp: "(9+10)-6*a/2+(-5)" -------------->  0
    *   exp: "(4))" ---------------------------> !== 0
    *   exp: "))((" ---------------------------> !== 0
    * */
   
/*      function balanced(exp) {
    // Tu código aca:
    let newArr = exp.split("").filter(item => item == "(" || item == ")")
    console.log(newArr)
    if(newArr.length%2 !== 0) return 1 // If the new arr.length is Odd it means that it's not possible arr is balanced
    if(newArr[0] === ")" || newArr[newArr.length-1] === "(" ) return 1// If the first position is -1, it is not possible it has an opened one before. 
  
    let newArr2 = newArr.map(item => {
      return item === "("? 1 : -1
    })
    console.log(newArr2)
    let sum = 0
    for(let i=0; i<newArr2.length; i++){
      sum = sum + newArr2[i]
      if(sum === 0 && newArr2[i+1] === -1) return 1 // if the sum is 0 and the next index is ")", it means that it's not possible to balance the array
      if(sum > (newArr2.length - i)) return 1 //  this line only exists to improve the efficiency in case that the array to be something like this ['(','(','(','(',')',')'], only it has to go over up to the middle of the array to understand that it's not possible array to be balanced. 
    }
    console.log(sum)
    return sum 
    
  }
  
  console.log(balanced("((())")) */
  
  
  /*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*/
  
  
  
  /*
  * EJERCICIO 3
  *
  * Implementar el método compressList dentro del prototype de LinkedList que deberá DEVOLVER UNA NUEVA LISTA
  * en donde cada elemento se obtien de aplicar la funcion a dos nodos consecutivos. Si la lista tiene un unico
  * elemento, debe devolver la lista con dicho elemento.
  *
  *
  * Parametros:
  *   func : funcion a aplicar
  *
  * Salida: 
  *   > una nueva lista con las caracteristicas mencionadas
  *
  * Ejemplos:
  * lista:  -> 5 -> 4 -> 9 -> 1 -> 2 -> null
  * func = function(a,b) return a+b; 
  * lista.compressList(func): -> 9 -> 10 -> null
  
  * ¿Por que? 
  *   - Toma el 5 y el 4 -> func(5, 4) -> retorna 9 => nuevo nodo con 9 
  *   - Toma el 9 y el 1 -> func (9, 1) -> retorna 10 => nuevo nodo con 10, consecutivo al nodo previamente creado
  *   - Toma el 2, no tiene un proximo elemento para aplicar la funcion, se deshecha 
  *   => Se obtiene una nueva lista que es:  -> 9 -> 10 -> null 
  *
  * lista: -> 2 -> 2 -> null
  * func = function(a,b) return a+b; 
  * lista.compressList(func): -> 4 -> null
  * 
  * ¿Por que? 
  *   - Toma el 2 y el 2 -> func(2, 2) -> retorna 4 => nuevo nodo con 4
  *   - No tengo mas nodos para aplicar la funcion 
  *   => Se obtiene una nueva lista que es: -> 4 -> null 
  
  *
  * lista: -> 2 -> null
  * func = function(a,b) return a+b; 
  * lista.compressList(func): -> 2 -> null
  * 
  * ¿Por que? 
  *   - La lista inicial tiene un UNICO nodo, por lo tanto no le aplicaremos funcion ni reduccion
  *   - No se puede reducir 
  *   - Devuelve una nueva lista igual a la provista  
  *   => Se obtiene una nueva lista que es: -> 2 -> null 
  * 
  * */
 //-> 5 -> 4 -> 9 -> 1 -> 2 -> 5 -> null
 // newList -> 9 -> 10 ->
  
 /*   LinkedList.prototype.compressList = function(func) {
   // Tu código aca:
   if(this.head && !this.head.next) return this
   let current = this.head;
   let newList = new LinkedList();
   while(current.next){
     newList.add(func(current.value, current.next.value));
     if(current.next.next){
       current = current.next.next
      }else break;
      // Se pone el break para que no quede en bucle infinito en una lista con longitud par. 
    }
    return newList;
  }; */
  
  /*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*/
  
  /*
  * EJERCICIO 4
  *
  * Implementar el método removeFrom dentro del prototype de LinkedList que deberá MODIFICAR la lista
  * de forma tal que el elemento en el indice indicado (recibido por parametro) sea eliminado de la misma.
  *
  * Parametros:
  *   index: describe el indice del elemento que debe ser eliminado [el head, es la posicion 0]
  *
  * Ejemplos:
  *   lista: -> 5 -> 2 -> 4 -> 6 -> null
  *   lista(0) = 5 
  *   lista.removeFrom(2): -> 5 -> 2 -> 6 -> null
  *
  *   lista: -> 5 -> 10 -> 3 -> 2 -> 9 -> null
  *   lista(0) = 5
  *   lista.removeFrom(3):-> 5 -> 10 -> 3 -> 9 -> null
  lista.removeFrom(0): -> 10 -> 3 -> 9 -> null
  * */
/*    LinkedList.prototype.removeFrom = function(index){
   // Tu código aca:
   
   if (index === 0){
    //  let cache = this.head.next
    //  this.head = cache
    this.head = this.head.next
     return this
    } 
    let current = this.head;
    let aux = 1; 
    while(index > aux){
      current = current.next
      aux++
    }
    if(!current.next.next) {
      current.next = null;
    }
    if (current.next.next){
      let cache = current.next.next
      current.next = cache
    }
    return this
  }; */
  
  /*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*/
  
  /*
  * EJERCICIO 5
  *
  * Implementar el método insertInOrder dentro del prototype de LinkedList que deberá agregar un elemento
  * a la lista ordenada (MAYOR a MENOR).
  *
  *
  * Parametros:
  *   value: valor a ingresar
  *
  * Ejemplos:
  *   lista: -> 5 -> 4 -> 2 -> null
  *   lista.insertInOrder(3): -> 5 -> 4 -> 3 -> 2 -> null
  *
  * */
 // 8 -> 7 -> 2 -> null
 /*   LinkedList.prototype.insertInOrder = function(value){
   // Tu código aca:
   let newNode = new Node(value);
   if (!this.head) { // si la lista esta vacia
    this.head = newNode;
    return;
      } else if (!this.head.next && this.head.value > value) {
        this.head.next = newNode;
        return;
      } else if (this.head.value < value) {
        newNode.next = this.head;
        this.head = newNode;
        return;
      }
      let current = this.head;
      let aux;
      
      while (current.next !== null) {
        if (value > current.next.value) {
          aux = current.next;
          current.next = newNode;
          newNode.next = aux;
          return;
        }
        current = current.next;
      }
      current.next = newNode;
      return;
    }; */
/*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*/
// CODEWARS Moving Zeros To The End

// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
/* 
function moveZeros(arr) {
  let arr2 = [];
  for(let i=0; i<arr.length; i++){
    while(arr[i] === 0){
      arr.splice(i, 1)
      arr2.push(0)  
    }
  } 
  for(let i=0; i<arr2.length; i++){
    arr.push(arr2[i])
  }
  return arr
}

console.log(moveZeros([ 9, 0, 0, 9, 1, 2, 1, 1, 3, 1, 9]))
 */
/*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*/
/*
* EJERCICIO 6
*
* Utilizando un STACK, y dada una frase invertir palabra por palabra de la misma.
* NO SE PUEDEN USAR METODOS DE ARRAY. 
*
* Parametro:
*   str: string a ser invertido palabra a palabra
* 
* Salida: 
*  > string de la palabra invertida 
*
* Ejemplo:
*   Hello World: olleH dlroW
*   There is a little monkey: erehT si a elttil yeknom
* */

function reverseWords(str){
  /* 
  let pila = new Stack();  //pila = l
  let palabra = '';                    //
  for(let i= 0; i< str.length; i++){ //     olleh
    if(str[i]=== " " ){
      pila.push(palabra)
      palabra = '';
    }
    else{
      palabra =  str[i] + palabra;    //dlrow
    }
  }
  pila.push(palabra)//como la ultima palabra no se pushea porque no cumple la condicion de corte del espacio, la pusheamos afuera del ciclo
  let palabra2= '';
  for (let i = 0; i < pila.array.length; i++){
     if(i > 0 ){
     palabra2 = palabra2 +" "+ pila.array[i]; 
    }
    else{
      palabra2 = pila.array[i];
    }
  }
  return palabra2
  }
  */
  
  
  }
  
  /*
  * EJERCICIO 7
  *
  * Implemtnar la funcion height dentro del prototype de BinarySearchTree que calcule la altura de un arbol.
  *
  * Parametros: -
  * Valor de retorno: altura del arbol
  * 
  * Salida:
  *   > Altura del arbol 
  *
  * Pista: funcion auxiliar, calcular la altura de un arbol.[Una forma de resolverlo es pensarlo recursivamente y usando Math.max]
  *
  *            16             ---> Nivel 1
            /      \
          6         23        ---> Nivel 2
        /  \       /   \
       2    14    17    31    ---> Nivel 3
        \
         5                    ---> Nivel 4
  
  
  * */
  
  BinarySearchTree.prototype.height = function(){
  
      if(!this.left && !this.right) return 1
      if(this.left && !this.right) return 1 + this.left.height()
      if(this.right && !this.left) return 1 + this.right.height()
    
      return Math.max(1 + this.left.height(), 1 + this.right.height())
    
  };
  
  /*
  * EJERCICIO 8
  *
  * Implemtnar la funcion balanced dentro del prototype de BinarySearchTree que determine si el arbol
  * se encuentra o no balanceado.
  *
  * Parametros: -
  * 
  * Salida:
  *   > true: si el arbol esta balanceado
  *   > false: si el arbol no esta balanceado
  *
  *
  *            16             ---> Nivel 1
            /      \
          6         23        ---> Nivel 2
        /  \       /   \
       2    14    17    31    ---> Nivel 3
        \
         5                    ---> Nivel 4
  
  * La funcion devolveria true
  *
  * TIP: Se pueden usar funciones previamente definidas
  * */
  
  BinarySearchTree.prototype.balanced = function(){
    let sizeLeft
    let sizeRight
  
    if(this.left && this.right){
      sizeLeft = this.left.size()
      sizeRight = this.right.size()
    } else return false
  
    return sizeLeft === sizeRight
  };
  
  
  /* EJERCICIO 9
  *
  * Ordena un arreglo de objetos usando un SELECTION SORT pero con algunas particularidades.
  * Ademas del arreglo a ordenar, la funcion va a recibir como parametro una función que va
  * ser quien va a determinar si un elemento es mayor a otro para determinar su posicion final.
  *
  * Ejemplo:
  * let array = [
  *   {title: 'Comprar tomate', description: 'Ir a la verduleria a comprar tomate', priority: 4, price: 300},
  *   {title: 'Ir al gimnasio', description: 'Ir al gimnasio', priority: 4, price: 200},
  *   {title: 'Comprar harina', description: 'Ir al supermercado a comprar harina', priority: 2, price: 200},
  *   {title: 'Comprar libro', description: 'Ir a la libreria', priority: 2, price: 700}
  * ]
  *
  * orderFunction(array[0], array[1]) -> Devolvera 1 si, la prioridad de array[0] es mayor a la prioridad de array[1].
  *                                      En el caso de que las prioridades sean iguales, el que tiene mayor precio, es mas grande.
  *                                      Por lo tanto array[0] > array[1] ya que array[0].priority === array[1].priority &&
  *                                                                              array[0].price > array[1].price
  *
  *                                   -> Devolvera -1 caso contrario. Es decir, si array[0].priority < array[1].priority
  *                                   => Devolvera 1 si están bien ordenados o -1 si hay que intercambiarlos
  *
  * specialSort(array, orderFunction) -> retornaria el siguiente arreglo
  * [
  *   {title: 'Comprar tomate', description: 'Ir a la verduleria a comprar tomate', priority: 4, price: 300},
  *   {title: 'Ir al gimnasio', description: 'Ir al gimnasio', priority: 4, price: 200},
  *   {title: 'Comprar libro', description: 'Ir a la libreria', priority: 2, price: 700}
  *   {title: 'Comprar harina', description: 'Ir al supermercado a comprar harina', priority: 2, price: 200}
  * ]
  * 
  * */
  
  var specialSort = function(array, orderFunction) {
    for(let i = 0; i < array.length; i++) {
      // Finding the smallest number in the subarray
      let min = i; // 0
      for(let j = i+1; j < array.length; j++){
          // if(array[j] < array[min]) {
          if(orderFunction(array[min], array[j]) === -1) { // 1 || -1
              min=j; 
          }
       }
       if (min != i) {
           // Swapping the elements
           let tmp = array[i]; // 1
           array[i] = array[min];
           array[min] = tmp;
      }
    }
  
    return array
  };
  
  // EJERCICIO 9
// Implementar la función cardGame: a partir de dos Queues que va a recibir como paráemtro que
// van a representar mazos de cartas de dos jugadores debemos determinar quien va a ser el ganador
// de este juego que va a tener la siguiente dinámica:
// - Los jugadores tendrán que defender su "Castillo" que contiene un total de 100 puntos de resistencia
// - Cada carta tendrá puntos de ataque (attack) y puntos de defensa (defen 
// - Ambos jugadores van a sacar las dos primeras cartas de su mazo
//      * La primera carta será su carta asignada para atacar
//      * La segunda carta será su carta asignada para defender
// - La carta asignada para atacar del jugador uno se enfrentará contra la carta asignada para defender
//   del jugador dos y viceversa. Si el ataque supera los puntos de defensa el daño sobrante será aplicado
//   sobre el castillo.
// - El juego finaliza cuando alguno de los dos castillos se quede sin puntos de resistencia o cuando los mazos
//   se acaben. En este último caso ganará aquel jugador que tenga mayor cantidad de puntos de resistencia
//   restantes en su castillo.
// La función deberá devolver un string indicando al ganador: 'PLAYER ONE' o 'PLAYER TWO' (Respetar mayúsculas) o
// 'TIE' en el caso de empate
// NOTA: Ambos mazos contienen la misma cantidad de cartas
//
// Ejemplo:
// Los jugadores levantan 2 cartas cada uno.
// La primera carta del jugador uno va a atacar a la segunda carta del jugador dos
// La primer carta del jugador dos va a atacar a la segunda carta del jugador uno
//
// Primer carta del jugador 1 (ATAQUE) vs Segunda carta del jugador 2 (DEFENSA):
// {attack: 5, defense: 5} vs {attack: 5, defense: 20}
// Ataque 5 vs Defensa 20 --> 5 no supera 20 --> No hay daño sobre el castillo
//
// Primer carta del jugador 2 (ATAQUE) vs Segunda carta del jugador 1 (DEFENSA):
// {attack: 20, defense: 26} vs {attack: 15, defense: 10}
// Ataque 20 vs Defensa 10 --> 20 supera a 10 --> Como hay 10 puntos de diferencia esa cantidad de daño es aplicada
// al castillo del jugador 1
//
// Una vez terminada la ronda, se procede a repetir lo mismo con las siguientes 2 cartas de cada jugaodr hasta
// finalizar el juego.
function cardGame(playerOneCards, playerTwoCards) {
  // Tu código aca:
/*   let castlePlayer1 = 100;
  let castlePlayer2 = 100;

  while(playerOneCards.size() || playerTwoCards.size()){
    let card1PlayerOne = playerOneCards.dequeue()
    let card2PlayerOne = playerOneCards.dequeue()
    let card1PlayerTwo = playerTwoCards.dequeue()
    let card2PlayerTwo = playerTwoCards.dequeue()

    if(card1PlayerOne.attack > card2PlayerTwo.defense){
      let subtract = card1PlayerOne.attack - card2PlayerTwo.defense;
      castlePlayer2 -= subtract
    }
    if(card1PlayerTwo.attack > card2PlayerOne.defense){
      let subtract = card1PlayerTwo.attack - card2PlayerOne.defense;
      castlePlayer1 -=  subtract
    }
    if(castlePlayer1 === 0 || castlePlayer2 === 0) break
  }
  if(castlePlayer1 === castlePlayer2) return 'TIE'
  if (castlePlayer1 > castlePlayer2) return 'PLAYER ONE' 
  else return 'PLAYER TWO' */
}

// EJERCICIO 7
// La función countDeep recibe por parámetro un arreglo que contiene números y/o arreglos (estos últimos contienen, a su vez, más números y/o arreglos), y retorna la cantidad de arreglos que hay en total, incluyendo al padre.
// Ejemplo:
// countDeep( [ 1, 2, 3, [ 4, [ 5, 6 ] ], 7, [ 8 ], 9] ) ----> Debería retornar 4
function countDeep(arr) {
  // Tu código aca:
  let acc = 1;
/*   for(let i=0; i < arr.length; i++){
    if(Array.isArray(arr[i])){
      acc += countDeep(arr[i])
    }
  } */
  /* ----------------------------------- */
  /*   for (const element of arr) {
    if(Array.isArray(element)) acc += countDeep(element)
  } */
  /* ----------------------------------- */
  arr.forEach(element => {
    if(Array.isArray(element)) acc += countDeep(element)
  });
  return acc;
}


////////////////////////////////////////////////////////////////////////////

//CODEWARS Multiples of 3 or 5 
/* 
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

Note: If the number is a multiple of both 3 and 5, only count it once.
*/

function solution(number){
  
  if(number > 0){
    let mult = new Set();
    for( let i = 0; i < number; i++ ){
      if( (i%3)===0 || (i%5)===0 ){
        mult.add(i)
      }
    } 
  
      return Array.from(mult).reduce((acc, ele) => {
        return acc + ele
      }, 0)
  }
   
  return 0
  
}




