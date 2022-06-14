//1 - Criar um loop que conte de 1 até 10 usando FOR
console.log("Contagem crescente:");
for (i = 1; i <= 10; i++) {
    console.log(i);
}

//2 - Criar um loop que conte de 10 até 1 usando WHILE
console.log("Contagem decrescente:");
i = 10;
while (i >= 1) {
    console.log(i);
    i -= 1;
}

//3 - Criar um loop que conte todos os números ímpares de 1 até 100
console.log("Números ímpares:");
for (numberI = 1; numberI <= 100; numberI++) {
    if (numberI % 2 !== 0) {
        console.log(numberI);
    }
}

//4- Criar um loop que conte todos os números pares de 0 a 100
console.log("Números pares:");
numberP = 0;
while (numberP <= 100) {
    console.log(numberP);
    numberP += 2;
}