let titulo = document.querySelector("h1");
titulo.innerHTML = "Jogo do Número Secreto";

let paragrafo = document.querySelector("p");
paragrafo.innerHTML = "Escolha um número entre 1 e 10";

function verificarChute() {
  console.log("O botão foi clicado");
}

// let numeroSecreto = parseInt(Math.random() * 11);
// let tentativas = 1;
// let chute;

// alert("Boas vindas ao jogo do número secreto");

// while (chute != numeroSecreto) {
//   let chute = prompt("Escolha um número entre 1 e 10");
//   if (chute == numeroSecreto) {
//     break;
//   } else {
//     if (chute > numeroSecreto) {
//       alert("O número secreto é menor");
//     } else {
//       alert("O número secreto é maior");
//     }
//   }
//   tentativas++;
// }

// let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
// alert(
//   `O número secreto era ${numeroSecreto} e você acertou com apenas ${tentativas} ${palavraTentativa}`
// );
