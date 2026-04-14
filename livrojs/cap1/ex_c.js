/*
TODO:
Elaborar um programa para uma loja, o qual leia o preço de um produto e
informe as opções de pagamento da loja. Calcule e informe o valor para
pagamento à vista com 10% de desconto e o valor em 3x.
*/

let preco = 60.00;

console.log(`Preço: R$ ${preco}\nÀ Vista: R$ ${preco - (preco*0.10)}\nOu 3x de: R$ ${preco/3}`);