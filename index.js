// 1
function ehPrimo(number) {
    if (number < 2) {
      return false;
    } 
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }  
    return true;
  }  
  function verificarPrimo() {
    const inputNumber = parseInt(prompt('Digite algum número:'));
    const number = Number.isNaN(inputNumber) ? 0 : inputNumber;
  
    if (ehPrimo(number)) {
      console.log(number + ' Este é um número primo.');
    } else {
      console.log(number + ' Este não é um número primo.');
    }
  }
  
  verificarPrimo();


  // 2

  function verificarSenha(senha) { 
    if (senha.length < 8) {
      return false;
    }    
    const temLetraMaiuscula = /[A-Z]/.test(senha);
    const temLetraMinuscula = /[a-z]/.test(senha);
    const temNumero = /[0-9]/.test(senha);    
    return temLetraMaiuscula && temLetraMinuscula && temNumero;
  }
  const senha = prompt('Digite a sua senha:');
  if (verificarSenha(senha)) {
    console.log('Senha válida!');
  } else {
    console.log('ERRO! Senha inválida!');
  }
  
  // 3

  function calcularFatorial(numero) {
    if (numero === 0 || numero === 1) {
      return 1;
    }
    let fatorial = 1;  
    for (let i = 2; i <= numero; i++) {
      fatorial *= i;
    }
    return fatorial;
  } 
  for (let i = 1; i <= 10; i++) {
    const fatorial = calcularFatorial(i);
    console.log(`O fatorial de ${i} é: ${fatorial}`);
  }
  
   // 4

  function verificarQuadrado() {
  var numero = parseInt(prompt("Informe um número para verificar se é ou não um quadrado perfeito:"));
  var raizQuadrada = Math.sqrt(numero);
  if (Number.isInteger(raizQuadrada)) {
    alert("O número é um quadrado perfeito!");
  } else {
    alert("O número não é um quadrado perfeito.");
  }
}

verificarQuadrado();
