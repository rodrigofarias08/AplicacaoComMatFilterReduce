


//Programa para cadastro e listagem de carros em uma revenda.


//Entradas:

let carros = [{ nome: "uno", preco: 10000 },
{ nome: "gol", preco: 15000 },
{ nome: "pajero", preco: 90000 }]

//Listagem de todos os carros:
console.log("A lista de carros cadastrados é a seguinte: ")
carros.map(carro => console.log(`Carro: ${carro.nome}
Preço: R$${carro.preco.toFixed(2)}
`))


//Filtro por valor máximo:
let max = Number(prompt("Digite o valor máximo (em R$) que o cliente deseja pagar: "))

let carros2 = carros.filter(carro => (carro.preco <= max))
console.log(`
A lista de carros com valor abaixo de R$${max.toFixed(2)} é: `)
carros2.map(carro => console.log(`Carro: ${carro.nome}
Preço: R$${carro.preco.toFixed(2)}
`))


//Valor total dos carros:
let total = carros.reduce((acumulador, carro) => (acumulador + carro.preco), 0)
console.log(`
O valor total dos carros nesta revenda é de R$${total.toFixed(2)}.`)
