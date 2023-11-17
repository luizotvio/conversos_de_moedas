const  valorEmDolar = prompt("Digite o valor em dolar: ");

const cotacaoDoDolar = 4.86;

const valorEmReal = valorEmDolar * cotacaoDoDolar;

alert(`Valor final após a conversão de dolar para real é: R$ ${valorEmReal.toFixed(2)}`);