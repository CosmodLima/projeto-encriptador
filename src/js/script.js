const textArea = document.querySelector(".texto-area");
const mensagem = document.querySelector(".texto-resultado");
const btnCopiar = document.querySelector(".btn-copiar");

btnCopiar.addEventListener('click', function () {
  copiarTexto(mensagem.value);
});

function copiarTexto(texto) {
  const inputTemporario = document.createElement("input");
  inputTemporario.setAttribute("value", texto);
  document.body.appendChild(inputTemporario);
  inputTemporario.select();
  document.execCommand("copy");
  document.body.removeChild(inputTemporario);

  textArea.value = '';
  mensagem.value = '';

}

function btnEncriptar() {
  const textoEncriptado = encriptar(textArea.value);
  mensagem.value = textoEncriptado;
  textArea.value = "";
}

function encriptar(stringEncriptada) {
  let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
  stringEncriptada = stringEncriptada.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringEncriptada.includes(matrizCodigo[i][0])) {
      stringEncriptada = stringEncriptada.replace(new RegExp(matrizCodigo[i][0], 'g'), matrizCodigo[i][1]);
    }
  }
  return stringEncriptada;
}

function btnDesencriptar() {
  const textoDesencriptado = desencriptar(textArea.value);
  mensagem.value = textoDesencriptado;
  textArea.value = "";
}

function desencriptar(stringDesencriptado) {
  let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
  stringDesencriptado = stringDesencriptado.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringDesencriptado.includes(matrizCodigo[i][1])) {
      stringDesencriptado = stringDesencriptado.replace(new RegExp(matrizCodigo[i][1], 'g'), matrizCodigo[i][0]);
    }
  }
  return stringDesencriptado;
}
