const html = document.querySelector("html");
const focoBt = document.querySelector(".app__card-button--foco");
const curtoBt = document.querySelector(".app__card-button--curto");
const longoBt = document.querySelector(".app__card-button--longo");
const banner = document.querySelector(".app__image");
const titulo = document.querySelector(".app__title");
const botoes = document.querySelectorAll(".app__card-button");
const startPauseBt = document.querySelector("#start-pause");

const musicaFocoInput = document.querySelector("#alternar-musica");
const musica = new Audio("/sons/luna-rise-part-one.mp3");

let tempoDecorridoEmSegundos = 5;

musica.loop = true;

musicaFocoInput.addEventListener("change", () => {
  if (musica.paused) {
    musica.play();
  } else {
    musica.pause();
  }
});

focoBt.addEventListener("click", () => {
  alterarConteudo("foco");
  focoBt.classList.add("active");
});

curtoBt.addEventListener("click", () => {
  alterarConteudo("descanso-curto");
  curtoBt.classList.add("active");
});

longoBt.addEventListener("click", () => {
  alterarConteudo("descanso-longo");
  longoBt.classList.add("active");
});

function alterarConteudo(conteudo) {
  botoes.forEach(function (conteudo) {
    conteudo.classList.remove("active");
  });

  html.setAttribute("data-contexto", conteudo);
  banner.setAttribute("src", `/imagens/${conteudo}.png`);

  switch (conteudo) {
    case "foco":
      titulo.innerHTML = `Otimize sua produtividade,<br>
      <strong class="app__title-strong"> mergulhe no que importa.</strong>`;
      break;

    case "descanso-curto":
      titulo.innerHTML = `Que tal dar uma respirada?<br>
      <strong class="app__title-strong"> Faça uma pausa curta!</strong>`;
      break;

    case "descanso-longo":
      titulo.innerHTML = `Hora de voltar à superfície.<br>
      <strong class="app__title-strong"> Faça uma pausa longa!</strong>`;
      break;

    default:
      break;
  }
}

const contagemRegressiva = () => {
  tempoDecorridoEmSegundos -= 1;
  console.log("Temporizador:" + tempoDecorridoEmSegundos);
};
