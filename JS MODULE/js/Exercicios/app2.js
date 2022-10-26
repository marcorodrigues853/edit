let paises = ['Albânia','Bolívia','Canadá','Dinamarca','Etiópia','Finlândia','Alemanha','Hungria','Irlanda','Japão','Quênia'];


console.info('with for')
console.info('------------')
for (let i = 0; i < paises.length; i++) {
   console.log(paises[i]);
}
 console.info('with foreach')
 console.info('------------')
paises.forEach((pais)=>{
console.log(pais)
})


paises.unshift('Portugal');
paises.push('Espanha');
console.table(paises)


console.log(paises.slice(-3))
console.log(paises.length)
console.log(paises.splice(10))
console.log(paises.join(' - '))
