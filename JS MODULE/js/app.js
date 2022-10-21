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


const months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July');
console.log(months.length)

const monthsToString= months.toString();
console.log(monthsToString)

const numbers =[1,2,3]
numbers.pop()
numbers.shift()
console.log(numbers)

const addToArray = [1,2,3,4,5,6]
addToArray.push(7)
console.log(addToArray)


const addBar = ['batatas', 'morangos']


console.log(addBar.join('/'))


const joinarray = addBar.concat(addToArray)
console.log(joinarray)
