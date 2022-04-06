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











