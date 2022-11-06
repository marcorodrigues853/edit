// const name='Marco';
// let age = 12;
// const married=true;



// const hobbies = {
//   swimming:{
//     name: 'swimming',
//     swimmingSpeed:2,
//     local: 'home'
//   }
// }


// console.log(`O ${name} tem ${age} e tem como hobbies ${hobbies.swimming.name}` )




// const animal = name && married;
//   console.log(name && age);
//   console.log(animal);



// const n=1;

// if(n===1){
//   console.log('Eu sou unico')
// }else if (n!==1 && n!==3){
//   console.log('Somos pares')
// }else if (n===3){
//   console.log('Somos um trio')
// }


// switch(n){
//   case 1:
// console.log('Eu sou único')
//   break;
//   case 2:
// console.log('Eu sou um par')
//   break;
// default: console.log('Eu sou um trio')
// }



//
// for(let i=0; i<=10; i++){
//   // console.log(i%2);
//   i%2=== 0 ?  console.info(`✅ ${i} sou par`): console.error(`⛔️ ${i} sou ímpar`);
// }

// let k =1;
// while(k<=10){
//   k%2 === 0 ?  console.info(`✅ ${k} sou par WHILE`): console.error(`⛔️ ${k} sou ímpar WHILE`);
//   k++;
// }


// const teste = ()=>{
//   console.log('arrow function')
// }

// teste();




// function sum(a, b){
//   console.log(a+b)
//   return a+b;
// }

// function multiply(a, b){
//   console.log(a*b)
//   return a*b;
// }
// function multiply(a=0, b=0){
//   console.log(a*b)
//   return a*b;
// }


// function generatePerson(name='', age=0){
//  console.log({
//   name: name,
//   age: age
// })
//   return {
//     name: name,
//     age: age
//   }
// }


// sum(10, 10);
// multiply(10, 10);
// generatePerson('Marco', 34)
// generatePerson()


// const result = generatePerson('ze', 20);
// console.log(result)


// const array = new Array(10)
// console.log(array)



// const array2= [1,2,3,4]

// array2[99]=2;
// console.log(array2);





// const positions =  new Array(4);
// console.log(positions)
// const positions2 =  new Array(1,2,3,4);
// console.log(positions2)



// positions2.forEach(e => console.log(e));


// positions2.push(5)
// console.log(positions2)

// console.log('batatas'.toString())


// const doubleArray = ...positions, ...positions2
// console.log(doubleArray)


// const months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July');
// console.log(months.length)

// const monthsToString= months.toString();
// console.log(monthsToString)

// const numbers =[1,2,3]
// numbers.pop()
// numbers.shift()
// console.log(numbers)

// const addToArray = [1,2,3,4,5,6]
// addToArray.push(7)
// console.log(addToArray)


// const addBar = ['batatas', 'morangos']


// console.log(addBar.join('/'))


// const joinarray = addBar.concat(addToArray)
// console.log(joinarray)


// const person = new Object({
//         name: 'Marco',
//         age: 34,
//         country:'Portugal'
// });

// console.table(person);

// console.table(Object.entries(person));
// console.table(Object.keys(person))
// console.table(Object.values(person));



// ////////////////////////////////
// //? String
// ////////////////////////////////

// const text = 'Marco Rodrigues';
// console.log('lenght',text.length)
// console.log('indexOf', text.indexOf('a'))
// console.log('replace', text.replace('Marco', 'Javascript é pétaculo'))
// console.log('onde começa', text.charAt(6))
// console.log('touppercase', text.toUpperCase())
// console.log('divide string', text.split(' Rodrigues'))



// let textfull= 'MArco MArco MArco'

// console.log(textfull.replace('A', 'Z'))
// // console.log(textfull.replaceAll('A', 'Z'))




// Concatenação
// const numeros = '5'+5
// console.log(numeros)


// const string1 = 'Isto é um teste';
// const string2 = ' tu vais passar';

// console.log(string1 + string2)

// console.log('Isto é ' + 1 + ' String com '+ 1e3 +' numeros')



// console.log(parseFloat('3.5'))



// DATES

// const today = new Date()
// console.log(today)

// const now = Date.now()
// console.log(now)



// const february6 =  new Date('2020-02-6')
// console.log(february6)
// console.log(february6.getDate())
// console.log(february6.getFullYear())
// february6.setMonth(5)
// console.log(february6)



// const Person = new Object({
//   name: 'ze',
//   year: 1988,
//   age: (function(){2022-year})
// });
// console.log(Person)



// const name = 'Marco'
// const lastName = 'Rodrigues'

// const fullName =  function (name, lastName){
//    return name + ' ' + lastName
// }


// console.log(fullName(name, lastName))


// const sum = function (a,b){
//   return a+b
// }


// console.log(sum(2,2))



// const sumLong = function (...arguments){


// }


// (function(){
//   console.log('Marco Rodrigues 00000')
// })();

// (
//   function(a, b)
//   {
//   console.log(a+b);
//   return a+b;
// }
// )(3,3);

// CLOSURES



// function generateColaborate(name, position){

//   let colaboraterNumber = 0

//   return {
//     id: colaboraterNumber,

//   }
// }


// function divide(){
// let divide=1;
// console.log('divide', divide)
// ++divide;
// console.log('divide', divide)
// return function(number){
//     // console.log('divide', divide)
//     console.log(number/divide)
//      return  number/divide;
//   }

// }
// divide();
// divide();
// divide();
// divide();
// divide()(10);
// divide()(10);


// const b = divide()
// b(10);
// b(10)
// b(10)
// b(10)




// divide()(10);
// divide()(10);
// divide()(10);



// function Book (title, author){
//   this.title=title;
//   this.author=author;
// }


// "Os tres mosqueteiros Alecandre Dumas"
// " Os Maias Eça de Qeuros"

// const book1 = new Book("Os tres mosqueteiros", 'Alexandre Dumas')
// const book2 = new Book("Os Maias", 'Eça de Queirós')

// console.log(book1, book2);


// book1.title='O Conde  de Monte Cristo';
// console.log(book1);


// console.log('all buttons', document.getElementsByTagName('button'))

// console.log(
//   'querySelectorAll',
//   document.getElementsByTagName('.container'),
// )
// console.log(
//   'Faz console.log da div com o id teste.',
//   document.getElementById('teste'),
// )
// - Faz console.log de todos os button.
// - Faz console.log dos button que fazem parte da div com a class container.
// - Faz console.log da div com o id teste.
