function calculadora() {
    const operacao = Number(prompt("escolha uma operação:\n1 - soma (+)\n2 - subtração (-)\n3 - multiplicação (*)\n4 - divisão real (/)\n5 - divisão inteira (%)\n6 - potenciação (**)"));

    if (!operacao || operacao > 6) {
        alert("ERRO! operação invalida");
        calculadora();
    } else {
let n1 = Number(prompt("insira o primeiro valor:"));
let n2 = Number(prompt("insira o segundo valor:"));
let resultado;

function soma() {
    resultado = n1 + n2;
    alert(`${n1} + ${n2} = ${resultado}`)
    novaOperacao();
}

function subtracao() {
    resultado = n1 - n2;
    alert(`${n1} - ${n2} = ${resultado}`)
    novaOperacao();
}

function multiplicacao() {
    resultado = n1 * n2;
    alert(`${n1} * ${n2} = ${resultado}`)
    novaOperacao();
}

function divisaoReal() {
    resultado = n1 / n2;
    alert(`${n1} / ${n2} = ${resultado}`)
    novaOperacao();
}

function divisaoInteira() {
    resultado = n1 % n2;
    alert(`o resto da divisão de ${n1} por ${n2} é ${resultado}`)
    novaOperacao();
}

function potenciacao() {
    resultado = n1 ** n2;
    alert(`${n1} elevado a ${n2} é igual a ${resultado}`)
    novaOperacao();
}

function novaOperacao() {
    let opcao = prompt("deseja fazer outra operação?\n1 - sim\n2 - não");

    if (opcao == 1) {
        calcular();
    } else if(opcao == 2) {
        alert("Até mais!")
    } else {
        alert("digite uma opção válida!")
        novaOperacao();
    }
}

if (operacao == 1) {
    soma ();
} else if (operacao == 2) {
    subtracao ();
} else if (operacao == 3) {
    multiplicacao ();
} else if (operacao == 4) {
    divisaoReal ();
} else if (operacao == 5) {
    divisaoInteira ();
} else if (operacao == 6) {
    potenciacao ();
}

    }
}
calculadora ();
