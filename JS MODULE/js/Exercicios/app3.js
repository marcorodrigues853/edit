

(function(){

console.log('isto foi demasiado rápido!;')
})()


function calcDiscount(preco, desconto){

  if(desconto === 0)  console.log('desconto 0', preco*2)
  else if (desconto < 10)  console.log(preco - (preco * (desconto/100)))
  else if (desconto >= 10 && desconto < 30)   console.log(preco - (preco * (desconto/100)))

}

calcDiscount(1000, 9);
calcDiscount(1000, 14);
calcDiscount(1000, 0);

function Produto(nome, valor){
this.nome = nome,
this.valor = valor
}


const product1 =  new Produto('Vitor', 9);

console.log(product1);
product1.valor=2.5;
console.log(product1);

console.log(parseInt(product1.valor));
