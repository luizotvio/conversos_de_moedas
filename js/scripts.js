const userName = prompt("Qual o seu nome? ")

const  valorEmDolar = prompt("Digite o valor em dolar: ");

const cotacaoDoDolar = 4.86;

const valorEmReal = valorEmDolar * cotacaoDoDolar;

alert(`Olá ${userName}, o valor final após a conversão de dolar para real é de: R$ ${valorEmReal.toFixed(2)}`);